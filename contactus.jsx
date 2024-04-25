import React from 'react'
import './contactus.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

 const Contactus = () => {
  
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4f55d8ab-3913-4dee-81e4-978feb183ba9");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if(res.success){
          console.log("success" , res);
          setResult(res.message);
          event.target.reset();
      }
      else{
          console.log("error" ,  res);
          setResult(res.message);
      }
      };
    return (
      <div className='contact'>
          <div className="contact-col"> 
          <h3>Send us a message <img src={msg_icon} alt="" /></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloremque explicabo, veniam temporibus animi deleniti consectetur aut, quasi officia sed inventore dicta quidem fuga, necessitatibus reprehenderit accusamus nobis dolor distinctio. Saepe quis laudantium numquam.
          </p>
  
          <ul>
              <li> <img src={mail_icon} alt="" />Contact@Greatstack.dev</li>
              <li><img src={phone_icon} alt="" />+91 4562015365 </li>
              <li> <img src= {location_icon} alt="" />77 Massachusetts Ave, Cambridge<br/> MA 01239, United States </li>
          </ul>
           </div> 
            <div className="contact-col">
            <form>
                <label>Your name</label>
                <input type="text" name = "name" placeholder='Enter your name ' required/>
                <label>Phone number</label>
                <input type="tel" name = "phone" placeholder='Enter your phone number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type = "submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
           <span>{result}</span>
         </div> 
           </div>
  )
}

export default Contactus