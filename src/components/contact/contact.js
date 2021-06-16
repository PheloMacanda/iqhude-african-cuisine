import './contact.css';

const Contact = () => {

    return (
        <>
            <section className="contact" id="contac">
                <div className="title">
                    <h2 className="titleText"><span>C</span>ontact Us</h2>
                    <p>For any complaints/compliments or order/catering enquiries, fill in this form and we'll get back to you asap.</p>
                </div>
                <div className="contactForm">
                    <h3>Send Message</h3>
                    <div className="inputBox">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="inputBox">
                        <input type="text" placeholder="E-mail" />
                    </div>
                    <div className="inputBox">
                        <input type="text" placeholder="Cell No." />
                    </div>
                    <div className="inputBox">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="inputBox">
                        <input type="submit" placeholder="Name" value="Send" />
                    </div> 
                </div>
            </section>
        </>
    )
};

export default Contact;