import './events.css';
import Group from '../../assets/white-group.jpg'; 
import HHPSizwe from '../../assets/hhp-sizwe.jpg';
import HouseCater from '../../assets/house-cater.jpg';
import CateringEvent from '../../assets/event.jpg';

const Events = () => {

    return (
        <>
            <section className="events" id="events">
                <div className="title">
                    <h2>Our Past Catering <span>E</span>vents</h2>
                    <p>We also do catering for events, these are some of the events we catered for..</p>
                </div>
                <div className="content">
                    <div className="box">
                        <div className="imgBx">
                            <img src={Group} alt="Event" />
                        </div>
                        <div className="text">
                            <h3>Event with friends</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src={HHPSizwe} alt="Event" />
                        </div>
                        <div className="text">
                            <h3>Sizwe with HHP</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src={HouseCater} alt="Event" />
                        </div>
                        <div className="text">
                            <h3>Tourists enjoying african meals</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src={CateringEvent} alt="Event" />
                        </div>
                        <div className="text">
                            <h3>Catering Event</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Events;