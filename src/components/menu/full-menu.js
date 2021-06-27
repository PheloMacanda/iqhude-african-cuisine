import './our-menu.css';
import Beef from '../../assets/brownsampbeef.jpeg';
import Mleqwa from '../../assets/mleqwa2.jpg';
import Pense from '../../assets/pense.jpg';
import BeefBread from '../../assets/beef-bread.jpg';
import PenseBread from '../../assets/pense-bread.jpg';
import Catering1 from '../../assets/Catering1.jpeg';
import Catering2 from '../../assets/Catering2.jpeg';
import Catering6 from '../../assets/Catering6.jpeg';

const FullMenu = () => {

    return (
        <section className="menu" id="menu">
            <div className="title">
                <h2>Our Full <span>M</span>enu</h2>
                <p>These are all the dishes we serve on a daily basis.</p>
            </div>

            <div className="content">
                <div className="box">
                    <div className="imgBx">
                        <img src={Beef} alt="Menu 1" />
                    </div>
                    <div className="text">
                        <p>Beef Stew and Samp (R80)</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Mleqwa} alt="Menu 2" />
                    </div>
                    <div className="text">
                        <p>Mleqwa with Steamed Bread (R140 Full | R70 Half)</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Pense} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <p>Tripe with Samp (R70)</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={BeefBread} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <p>Beef Stew with Steamed Bread (R80)</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={PenseBread} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <p>Tripe with Steamed Bread (R70)</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Catering1} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <p>You can add sides for R30, Butternut, Chakalaka and Creamy Spinach</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Catering2} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <p>We also do catering for events</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Catering6} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <p>Mleqwa plates with veggies</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FullMenu;