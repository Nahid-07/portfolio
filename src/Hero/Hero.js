import React from 'react';
import heroImg from '../img/asif-bg-2.png'

const Hero = () => {
    return (
        <section className='bg-slate-900 md:flex justify-around items-center py-10'>
            <div className='md:w-1/2 flex justify-center p-12'>
                <img  src={heroImg} alt="" />
            </div>
            <div className='md:w-1/2 text-white flex justify-center'>
                <div>
                <h1 className='lg:text-5xl md:text-2xl font-bold text-orange-500'><span className='text-2xl'>Hello i am</span> NAHIDUL ISLAM ASIF</h1>
                <h1 className='text-4xl my-5'>MERN stack developer</h1>
                <a href="https://drive.google.com/file/d/1usNn7rTz25OfERvuIWg93ZTiNYI0vr_M/view?usp=share_link"><button className='bg-amber-700 px-5 py-4 rounded mt-4'>My resume</button> </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;