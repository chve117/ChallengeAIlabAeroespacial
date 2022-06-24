import { ToggleSearchButton } from "../components";

const AllPlanets = () => {
    return(
        <div className="container">
            <h1>All Planets</h1>
            <ToggleSearchButton/>
            <div className='wrapper'>
              <Card title="Mercurio" distance=" 54 millones"/>
              <Card title="Venus"/>
              <Card title="Marte"/>
              <Card title="Jupiter"/>
              <Card title="Saturno"/>
              <Card title="Urano"/>
              <Card title="Neptuno"/>
      </div>
        </div>
    );
}

function Card(props){
    return(
      <div className="card">
              <div class="cover__card">
                  <img src={props.img}/>
              </div>
              <hr/>
              <div class="footer__card">
                  <h3 class="user__name">{props.title}</h3>
              </div>
              <div className='fotter__card'>
                <p>Distancia:{props.distance}</p>
              </div>
          </div>
    )
  }

export default AllPlanets;