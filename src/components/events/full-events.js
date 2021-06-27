import './events.css';
import SizweCatering from '../../assets/SizweCatering.jpeg';
import YatchCatering from '../../assets/YatchCatering.jpeg';
import SizweFood from '../../assets/SizweFood.jpeg';
import SizweIqhude from '../../assets/SizweIqhude.jpeg';
import About from '../../assets/about.jpeg';
import Prawns from '../../assets/Prawns.jpeg';
import Catering3 from '../../assets/Catering3.jpeg';
import Catering7 from '../../assets/Catering7.jpeg';
import Catering5 from '../../assets/Catering5.jpeg';
import Catering4 from '../../assets/Catering4.jpeg';
import Ribs from '../../assets/Ribs.jpeg'; 
import Event from '../../assets/white-group2.jpg';

const FullEvents = () => {
    return (
        <section className="events" id="events">
            <div className="title">
                <h2>Our Past <span>E</span>vents</h2>
                <p>We also do catering for events, these are some of the events we catered for.</p>
            </div>
            <div className="content">
                <div className="box">
                    <div className="imgBx">
                        <img src={SizweCatering} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Catering Event on a yacht</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={YatchCatering} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Catering Event on a yacht</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={SizweFood} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Sizwe at Iqhude African Cuisine</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={SizweIqhude} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Sizwe at Iqhude African Cuisine</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={About} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Sizwe at Iqhude African Cuisine</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Prawns} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Prawns at a catering event</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Catering3} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Beef stew with sides for events</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Catering5} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Beef Stew</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Catering7} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Umleqwa, samp and sides</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Event} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Another Catering event</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Catering4} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Beef, samp and sides</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Ribs} alt="Event" />
                    </div>
                    <div className="text">
                        <h3>Ribs</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FullEvents;