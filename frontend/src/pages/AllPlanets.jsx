import { ToggleSearchButton } from "../components";


const AllPlanets = () => {
    return(
        <div className="container">
            <h1>All Planets</h1>
            <ToggleSearchButton/>
            <div className='wrapper'>
              <Card title="Mercurio" distance=" 54 millones" imagen="https://drive.google.com/uc?export=view&id=1Apl3uFSp49AU305oD6J86PS6G5uJFtVk"/>
              <Card title="Venus" distance=" 54 millones" imagen="https://drive.google.com/uc?export=view&id=1ISr5JmuHntNv9-x8yeH-SXAHahx-RLwF"/>
              <Card title="Marte" distance=" 54 millones" imagen="https://drive.google.com/uc?export=view&id=1Zlu3gCPBHnRCoqKME6BfUQanPDAijrAh"/>
              <Card title="Jupiter"distance=" 54 millones" imagen="https://drive.google.com/uc?export=view&id=1WzzUDMNab1vvcw4wfU2Ryy9hSMaarp-h"/>
              <Card title="Saturno" distance=" 54 millones" imagen="https://drive.google.com/uc?export=view&id=1wEuo0Yw-S-QJ-VFwWSeCmsDjQqfU7lg0"/>
              <Card title="Urano" distance=" 54 millones" imagen="https://drive.google.com/uc?export=view&id=1H-3GuCQ7NSrkq5mq59OSzh7WFit2PwwQ"/>
              <Card title="Neptuno" distance=" 54 millones" imagen="https://drive.google.com/uc?export=view&id=1AvqXEFMT751FGbjyP2KDueEX1ES0MZIG"/>
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