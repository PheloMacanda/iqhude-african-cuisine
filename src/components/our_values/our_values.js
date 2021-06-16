import './our_values.css';
import IqhudeLogo from '../../assets/IqhudeLogo.jpg';

const OurValues = () => {

    return (
        <section className="our_values" id="our_values">
            <div className="title">
                <h2>Our <span>V</span>alues</h2>
                <p>Customers are an asset to our business therefore their opinion
                    is valuable to us. We believe in using fresh produce that creates
                    succulent and flavorful dishes. We strive to improve on our delivery times
                    and menu. We believe in consistency.
                </p>
            </div>
            <div className="content">
                <div class="card">
                    <img src={IqhudeLogo} alt="Our Logo" style={{ width: '100%' }} />
                    <h4 className="heading">
                        <b>Vision</b>
                    </h4>
                    <p>To be a known brand in serving memorable traditional foods.</p>
                </div>
                <div class="card">
                    <img src={IqhudeLogo} alt="Our Logo" style={{ width: '100%' }} />
                    <h4 className="heading2">
                        <b>Mission</b>
                    </h4>
                    <p>
                        To create dishes that are attractive to the eye whilst meeting our customer’s needs daily. 
                        Conduct regular trainings for our employees
                    </p>
                </div>
                <div class="card">
                    <img src={IqhudeLogo} alt="Our Logo" style={{ width: '100%' }} />
                    <h4 className="heading3">
                        <b>Objectives</b>
                    </h4>
                    <p>
                        Expand the Iqhude brand nationally and maximise profitability. 
                        Maintain the same standards while being efficient.
                        To be innovative and driven by change.
                    </p>
                </div>
            </div>
        </section>
            )
};

            export default OurValues;