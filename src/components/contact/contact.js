import { useState } from 'react';
import './contact.css';

const Contact = () => {

    const [val, setVal] = useState({
        name: '',
        email: '',
        cellNumber: '',
        message: ''
    });

    const {
        name,
        email,
        cellNumber,
        message
    } = val;

    const sendQuery = (event) => {
        event.preventDefault();
        alert('Query Submitted! The Iqhude African Cuisine Team will get back to you ASAP.'); 

        // fetch('http://localhost:8080/api/v1/queries', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         name,
        //         email,
        //         cellNumber,
        //         message
        //     })
        // })
        // .then((response) => {
        //     console.log(response.json());

        //     if(response.status === 200 || response.status === 201) {
        //        alert('Query Submitted! The Iqhude African Cuisine Team will get back to you ASAP.'); 

        //        setVal({
        //            name: '',
        //            email: '',
        //            cellNumber: '',
        //            message: ''
        //        })
        //     }
            
        // })
        // .catch((err) => {
        //     alert(err.message);
        //     return err;
        // })
    }

    return (
        <>
            <section className="contact" id="contac">
                <div className="title">
                    <h2 className="titleText"><span>C</span>ontact Us</h2>
                    <p>For any complaints/compliments or order/catering enquiries, fill in this form and we'll get back to you asap.</p>
                </div>
                <form className="contactForm" onSubmit={sendQuery}>
                    <h3 style={{ paddingLeft: '1rem'}}>Send Message</h3>
                    <div className="inputBox">
                        <input value={name} type="text" placeholder="Name" onChange={(e) => setVal({ ...val, name: e.target.value })} />
                    </div>
                    <div className="inputBox">
                        <input value={email} type="text" placeholder="E-mail" onChange={(e) => setVal({ ...val, email: e.target.value })} />
                    </div>
                    <div className="inputBox">
                        <input value={cellNumber} type="text" placeholder="Cell No." onChange={(e) => setVal({ ...val, cellNumber: e.target.value })}/>
                    </div>
                    <div className="inputBox">
                        <textarea value={message} placeholder="Message" onChange={(e) => setVal({ ...val, message: e.target.value })}>
                        </textarea>
                    </div>
                    <div className="inputBox">
                        <input type="submit" placeholder="Name" value="Send" />
                    </div> 
                </form>
            </section>
        </>
    )
};

export default Contact;