import './our-menu.css';
import Beef from '../../assets/brown-samp-beef.jpg';
import Mleqwa from '../../assets/mleqwa2.jpg';
import Pense from '../../assets/pense.jpg';
import BeefBread from '../../assets/beef-bread.jpg';
import PenseBread from '../../assets/pense-bread.jpg';

const Menu = () => {

    return (
        <section className="menu" id="menu">
            <div className="title">
                <h2>Our <span>M</span>enu</h2>
                <p>These are some of the dishes we serve on a daily basis..</p>
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
                {/* <div className="box">
                    <div className="imgBx">
                        <img src={Pense} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <p>Tripe with Samp</p>
                    </div>
                </div> */}
            </div>
            <div className="title">
                <a href="/" className="btn">View All</a>
            </div>
        </section>
    );
}

export default Menu;