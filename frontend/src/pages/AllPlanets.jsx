import { ToggleSearchButton } from "../components";


const AllPlanets = () => {
    return(
        <div className="container">
            <h1>All Planets</h1>
            <ToggleSearchButton/>
            <div className='wrapper'>
              <Card title="Mercurio" distance=" 54 millones" imagen="../assets/images\planets/Mercurio.png"/>
              <Card title="Venus" distance=" 54 millones"/>
              <Card title="Marte" distance=" 54 millones"/>
              <Card title="Jupiter"distance=" 54 millones"/>
              <Card title="Saturno" distance=" 54 millones"/>
              <Card title="Urano" distance=" 54 millones"/>
              <Card title="Neptuno" distance=" 54 millones"/>
      </div>
        </div>
    );
}

function Card(props){
    return(
      <div className="card">
              <div class="cover__card">
                  <img src={props.imagen}/>
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