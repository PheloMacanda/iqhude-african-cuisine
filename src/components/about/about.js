import './about.css';
import AboutImg from '../../assets/sizwe.jpg';

const About = () => {

    return (
        <>
            <section className="about" id="about">
                <div className="row">
                    <div className="col50"> 
                        <h2 className="titleText"><span>A</span>bout Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="col50">
                        <div className="imgBx">
                            <img src={AboutImg} alt="About" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;