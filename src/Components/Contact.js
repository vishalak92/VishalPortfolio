import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">

         <div className="rowComp section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">


            </div>

         </div>

         <div className="rowComp">
            <div className="eight columns">
            <h3> I am always up for a conversation and would love to connect with you.
            We can talk about Technology, Dance, Sherlock, Stand-up Comedy and everything in between.
            Do drop in a 'Hi' with your name and email.
            </h3>
            <h2> Thank You. </h2>



           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state}<br />
					   </p>

             <h4>Email</h4>
            <p className="address">
              {email}<br />
            </p>

            <h4>Phone</h4>
           <p className="address">
             {phone}<br />
           </p>
				   </div>

            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
