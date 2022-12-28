import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '../Slider/Slider';
import './PartnerSlider.css'
import eshikhon from '../../Assests/Imgs/eshikhon.png'
import ibr from '../../Assests/Imgs/20220209_221905.png'
import apon from '../../Assests/Imgs/Apon-Foundation.png'
import canvas from '../../Assests/Imgs/Canvas.png'
import cri from '../../Assests/Imgs/CRI.png'
import yb from '../../Assests/Imgs/young-banlga.png'
import tribeni from '../../Assests/Imgs/tribeni.png'
import shh from '../../Assests/Imgs/SHH.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const PartnerSlider = () => {
    const data = {
        navigation: true,
        pagination: true,
        autoplay: true,
        slidesPerView: 4
    }
    return (
        <div className=' mx-3 lg:mx-40 mb-10'>
            <div className='p-8 bg-[#0097FA] mt-10 mb-5 partner-down'>
                <h1 className='text-4xl font-bold text-white text-center'>Who Makes Us Strong</h1>
            </div>
            <Slider data={data}>
                <SwiperSlide>
                    <img className='h-[70px] w-[180px] cursor-pointer mb-10' src={yb} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px] w-[180px] cursor-pointer mb-10' src={cri} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px] w-[180px] cursor-pointer mb-10' src={apon} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px] w-[180px] cursor-pointer mb-10' src={tribeni} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px] w-[180px] cursor-pointer mb-10' src={shh} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px] w-[180px] cursor-pointer mb-10' src={ibr} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px] w-[180px] cursor-pointer mb-10' src={canvas} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px] w-[180px] cursor-pointer mb-10' src={eshikhon} alt="" />
                </SwiperSlide>
            </Slider>
            <div className='flex items-center flex-col'>
                <p className='text-lg text-center mt-10 mb-3'>When we are alone we can do so little; <br />
                    But together we can do so much.</p>
                <PrimaryButton>Be a Partner<MdOutlineArrowRightAlt className='text-2xl ml-2' /></PrimaryButton>
            </div>
        </div>
    );
};

export default PartnerSlider;