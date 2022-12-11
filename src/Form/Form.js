import React from 'react';

const Form = () => {
    return (
        <div id='contact' className=' bg-slate-500 p-20'>
            <h1 className='text-5xl text-center font-bold mb-10 text-orange-400'>Contact me</h1>
            <form action="" className='container mx-auto flex flex-col md:w-3/5 gap-5'>
            <div>
            <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
            <input type="text" placeholder="Your Email" className="input input-bordered w-full my-5" />


            <textarea className="textarea textarea-bordered w-full" placeholder="Message" ></textarea>
            <button className='btn mt-5'>Send your message</button>
            </div>
            </form>
        </div>
    );
};

export default Form;