from pyexpat import model
from flask_restful import Api, Resource, reqparse
from tensorflow import keras

model = keras.models.load_model('habitable_planets.h5')

@app.route("/predict", methods=["GET","POST"])

def predict():

    data = {"success": False}



    params = flask.request.json

    if (params == None):

        params = flask.request.args



   

    # if parameters are found, return a prediction

    if (params != None):

        data["prediction"] = str(model.predict([[params[0], params[1], params[2], params[3]]])[0][0])

        data["success"] = True



    # return a response in json format

    return flask.jsonify(data) 

class HelloApiHandler(Resource):
  def get(self):
    return {
      'resultStatus': 'SUCCESS',
      'message': "Hello Api Handler"
      }

  def post(self):
    print(self)
    parser = reqparse.RequestParser()
    parser.add_argument('type', type=str)
    parser.add_argument('message', type=str)

    args = parser.parse_args()

    print(args)
    # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    request_type = args['type']
    request_json = args['message']
    # ret_status, ret_msg = ReturnData(request_type, request_json)
    # currently just returning the req straight
    ret_status = request_type
    ret_msg = request_json

    if ret_msg:
      message = "Your Message Requested: {}".format(ret_msg)
    else:
      message = "No Msg"
    
    final_ret = {"status": "Success", "message": message}

    return final_ret