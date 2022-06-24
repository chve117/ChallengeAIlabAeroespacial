
const SpaceBackground = (props) => {

    return (
        <section className="spaceBG">
            <div className="spaceBlur" />
            <div className="spaceChildren">
                <div className="pageContainer">
                    {props.children}
                </div>
            </div>
        </section>
    );
}

export default SpaceBackground;