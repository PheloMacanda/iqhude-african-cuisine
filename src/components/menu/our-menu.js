import './our-menu.css';
import Beef from '../../assets/beef.jpg';
import Mleqwa from '../../assets/mleqwa2.jpg';
import Pense from '../../assets/pense.jpg';

const Menu = () => {

    return (
        <section className="menu" id="menu">
            <div className="title">
                <h2>Our <span>M</span>enu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="content">
                <div className="box">
                    <div className="imgBx">
                        <img src={Beef} alt="Menu 1" />
                    </div>
                    <div className="text">
                        <h3>Beef Stew</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Mleqwa} alt="Menu 2" />
                    </div>
                    <div className="text">
                        <h3>Mleqwa with Steamed Bread</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Pense} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <h3>Tripe with Samp</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Pense} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <h3>Tripe with Samp</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Pense} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <h3>Tripe with Samp</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={Pense} alt="Menu 3" />
                    </div>
                    <div className="text">
                        <h3>Tripe with Samp</h3>
                    </div>
                </div>
            </div>
            <div className="title">
                <a href="/" className="btn">View All</a>
            </div>
        </section>
    );
}

export default Menu;