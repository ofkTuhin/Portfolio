import React from 'react';
import './contact.css'
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    const submitEmail=e=>{
        e.preventDefault();

        emailjs.sendForm('service_wx2czdp', 'template_9pte5vh', e.target, 'user_bZcvcIyejb7ajfsTBrJwM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <Fade bottom>
        <div  className="contactForm">
            <h2>Contact With Me</h2>
            <form onSubmit={submitEmail}>
            <div class="mb-3">
    
    <input type="text" class="form-control" placeholder="Name" name="name"/>
  </div>
  <div class="mb-3">

    <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Email" name="email"/>
    
  </div>
 
  <div class="mb-3">
   
    <textarea type="text" class="form-control" rows="5"  placeholder="Message" name="message"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        </Fade>
    );
};

export default Contact;