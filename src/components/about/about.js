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
                            Iqhude African Cuisine was founded in 2013 by Sizwe Luther Makapela who
                            started his business in a garage serving a few customers in his neighbourhood.
                            Serving delicious South African cuisines with a different twist and a flavourful menu and recipes. 
                            The interests grew from serving only on weekends to everyday. 
                            Iqhude African Cuisine has been commended by many for the delicious food and those who had the luxury of tasting our meals.
                            Umleqwa (which means free range chicken) is our number one selling dish that is prepared in our unique style for more tender and flavour.
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