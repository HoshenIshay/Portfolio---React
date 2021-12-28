import React from 'react' ;
import emailjs from 'emailjs-com' ;
import './Contact.css'
import contactImg from './img/ContactIMG.png'

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(`service_xxxxx`,'template_xxxxx' , e.target, 'user_xxxxxxxxxxxxxx')
        .then((result) => {
        alert("Message Sent , I will get back to you shortly", result.text);
        },
        (error) => {
        alert("An error occurred, Please try again", error.text);
        });
        };
    return (
        <div className="contact component__space" id="Contact">
           <div className="row">
               <div className="col__2">
                   <div className="contact__box">
                       <div className="contact__meta">
                           <h1 className="hire__text">Contact me .</h1>
                           <p className="hire__text white">I'm available to work full-time . Contact me :</p>
                           <p className="hire__text white">Phone : <strong>0555570355 </strong></p>
                           <p className="hire__text white">Email : <strong> HOSHEN192020@GMAIL.COM</strong></p>
                       </div>
                       <div className="input__box">
                           <form onSubmit={handleSubmit}>
                           <input name='name' type="text" className="contact name" placeholder="Your name *" />
                           <input name='email' type="text" className="contact email" placeholder="Your email *" />
                           <input type="text" className="contact subject" placeholder="Write a subject *" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit" value='Send'>submit</button>
                           </form>
                       </div>
                   </div>
               </div>
               <div className="col__2">
                   <img src={contactImg} alt="" className="contact__img" />
               </div>
           </div>
        </div>
    )
}

export default Contact
