
const SpaceBackground = (props) => {

    return(
        <section className="spaceBG">
            <div className="spaceBlur"/>
            <div className="spaceChildren">
            { props.children }
            </div>
        </section>
    );
}

export default SpaceBackground;