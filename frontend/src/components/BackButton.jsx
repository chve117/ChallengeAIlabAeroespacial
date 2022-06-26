import ReturnIcon from '../assets/icons/return.svg?component'
import { useNavigate } from "react-router-dom";

const BackButton = ({ className }) => {

    const navigate = useNavigate();

    return (<>
        <div className={`backButton ${className}`} onClick={() => { navigate("/") }}>
            <ReturnIcon/>
        </div>
    </>);
}

export default BackButton;