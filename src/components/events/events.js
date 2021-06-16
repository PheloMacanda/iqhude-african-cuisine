import './events.css';
import Group from '../../assets/white-group.jpg'; 
import Catering from '../../assets/catering1.jpg';

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
                            <img src={Catering} alt="Event" />
                        </div>
                        <div className="text">
                            <h3>Catering</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src={Catering} alt="Event" />
                        </div>
                        <div className="text">
                            <h3>Catering</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src={Catering} alt="Event" />
                        </div>
                        <div className="text">
                            <h3>Catering</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src={Catering} alt="Event" />
                        </div>
                        <div className="text">
                            <h3>Catering</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src={Catering} alt="Event" />
                        </div>
                        <div className="text">
                            <h3>Catering</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Events;