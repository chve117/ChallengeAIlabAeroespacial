import { useEffect, Suspense } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { BackButton, Planet3DModel } from "../components";

const OnePlanet = () => {

    const { planet } = useParams();
    const navigate = useNavigate();
    const availablePlantes = ['Mercurio', 'Venus', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno'];

    useEffect(() => {
        if (!availablePlantes.includes(planet)) {
            navigate("/404")
        } else {
            console.log(planet);
        }
    }, []);

    return (
        <>
            <BackButton />
            <div className="onePlanet-container">
                <div className="planet">
                    <Planet3DModel />
                </div>
                <div className="info-planet">
                    <h2>{planet}</h2>
                    <p>
                        Similitud Exoplaneta Ideal:
                    </p>
                    <p className="percentage">
                        90.23%
                    </p>
                    <p>
                        <b> Distancia: </b> 54 millones (km)
                    </p>
                    <p>
                        <b> Tiempo:  </b> 300 años
                    </p>
                    <p className="more-info">
                        Este planeta no cuenta con un campo magnético que le proteja de la radiación y los vientos solares.
                    </p>
                </div>
            </div>
        </>
    );
}

export default OnePlanet;