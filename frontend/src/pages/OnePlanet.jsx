import { useEffect, Suspense, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { BackButton, Planet3DModel } from "../components";
import axios from 'axios'

const OnePlanet = () => {

    const navigate = useNavigate(); 
    const availablePlantes = ['Mercurio', 'Venus', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno'];
    
    const { planet } = useParams(); //Param from URL
    
    //States
    const [ percentage, setPercentage ] = useState(90.23);
    const [ distance, setDistance ] = useState("54 millones (km)");
    const [ time, setTime ] = useState("300 años");
    const [ moreInfo, setMoreInfo ] = useState("Este planeta no cuenta con un campo magnético que le proteja de la radiación y los vientos solares.");

    useEffect(() => {
        if (!availablePlantes.includes(planet)) {
            navigate("/404")
        } else {

            console.log(planet);

            // TODO: Aquí realizar peticion a servidor con nombre de planeta ( variable "planet" )
            axios.get('http://localhost:5000/flask/hello').then(response => {
                console.log("SUCCESS", response)
                // TODO: Aquí llenar los estados:
                //!  - percentage con setPercentage
                //!  - distance con setDistance
                //!  - time con setTime
                //!  - moreInfo con setMoreInfo
            }).catch(error => {
                console.log("ERROR",error)
            })
            
        }
    }, []);

    return (
        <>
            <BackButton />
            <div className="onePlanet-container">
                <div className="planet">
                    <Suspense fallback={null} >
                        <Planet3DModel nameSolarPlanet={planet} />
                    </Suspense>
                </div>
                <div className="info-planet">
                    <h2>{planet}</h2>
                    <p>
                        Similitud Exoplaneta Ideal:
                    </p>
                    <p className="percentage">
                        {percentage}%
                    </p>
                    <p>
                        <b> Distancia: </b> {distance}
                    </p>
                    <p>
                        <b> Tiempo:  </b> {time}
                    </p>
                    <p className="more-info">
                        {moreInfo}
                    </p>
                </div>
            </div>
        </>
    );
}

export default OnePlanet;