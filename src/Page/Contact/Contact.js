import React from 'react';
import s1 from '../../Images/bg4.jpg';


const Contact = () => {

    const handlefrom = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const feedback = form.feedback.value;
        console.log(name, email, feedback)
        form.reset();
    }
    return (
        <div className="hero " style={{ background: `url(${s1})` }} >



            <div className="mt-20 mb-28">
                <h1 className='text-center p-5  text-red-900 text-3xl font-semibold'>Contact Us</h1>
                <form className=" w-full  " onSubmit={handlefrom}>
                    <div className=" ">
                        <input type="text" name="name" placeholder="Enter Your Name" className="h-12 p-5 mb-6 text-center rounded-lg w-full md:72 lg:w-96" required />
                    </div>
                    <div className=" ">
                        <input type="email" name="email" placeholder="Enter Your Email" className="h-12 p-5 mb-6 text-center rounded-lg w-full md:72 lg:w-96" required />
                    </div>
                    <div className=" ">
                        <textarea name="feedback" className="textarea textarea-bordered text-md font-semibold p-5 text-center rounded-lg w-full md:72 lg:w-96" placeholder="Enter Any Inquiries or Feedback" required></textarea>
                    </div>


                    <div className=" mt-6 mb-8 lg:w-96">
                        <button className="btn btn-primary w-96">submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Contact;