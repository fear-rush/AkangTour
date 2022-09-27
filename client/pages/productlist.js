/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Layout from '../components/Layout';
import { data } from '../utils/data';
import Image from 'next/image';
import {
  MapPinIcon,
  CurrencyDollarIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline/';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import hero from '../public/productlist/header.png';
import mobilehero from '../public/productlist/header-mobile.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductListScreen = () => {
  return (
    <Layout title="Product List">
      <div className="m-auto mx-8">
        <div className="hidden sm:block min-w-full md:h-auto mt-4">
          <Image src={hero} width={300} height={100} layout="responsive" />
        </div>
        <div className="sm:hidden min-w-full md:h-auto mt-4">
          <Image
            src={mobilehero}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <h1 className="block font-semibold text-2xl my-5 min-w-full mx-8 lg:my-10">
        Most Popular Packets{' '}
      </h1>

      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
          el: '.custom-bullet',
          type: 'custom',
          renderCustom: (_, current, total) => {
            var text =
              '<div style="display: flex; gap: 1rem; justify-content: center; align-items: center;">';
            for (let i = 1; i <= total; i++) {
              if (current == i) {
                text += `<div style="width: 36px; height: 6px; border-radius: 1rem; background-color: #60A5FA;" ></div>`;
              } else {
                text += `<div style="width: 36px; height: 6px; border-radius: 1rem; background-color: #D1D5DB;" ></div>`;
              }
            }
            text += '</div>';
            return text;
          },
        }}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        modules={[Pagination, Navigation]}
        updateOnWindowResize
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 3,
          },
        }}
        className="border-2 sm:!px-6 sm:!mx-8"
      >
        <div className="absolute w-fit h-fit top-2/4 left-4 hidden sm:block z-10">
          <div className="next bg-sky-500 w-fit rounded-full p-1 text-center">
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </div>
        </div>
        {data.products.map((data, index) => (
          <div key={index}>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center shadow-lg mx-8 border-2 rounded-lg">
                <div className="min-w-full min-h-full bg-white rounded-lg">
                  <div className="flex flex-col justify-center items-center">
                    <div className="relative min-w-full">
                      <Image
                        src={data.image}
                        width={300}
                        height={192}
                        layout="responsive"
                      />
                      <div className="absolute w-fit h-fit -bottom-3 -left-4 sm:hidden">
                        <div className="next bg-sky-500 w-fit rounded-full p-1 text-center">
                          <ChevronLeftIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 right-2/4 translate-x-2/4 w-[140px] h-[22px] bg-sky-500 rounded-xl">
                        <h1 className="text-white font-bold text-sm text-center leading-5">
                          {data.duration}
                        </h1>
                      </div>
                      <div className="absolute w-fit h-fit -bottom-3 -right-4 sm:hidden">
                        <div className="next bg-sky-500 w-fit rounded-full p-1 text-center">
                          <ChevronRightIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-full py-6 px-6">
                      <div>
                        <h1 className="font-semibold text-ellipsis text-xl">
                          {data.title}
                        </h1>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <MapPinIcon className="h-8 w-8" />
                        <p className="block">{data.route}</p>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <CurrencyDollarIcon className="h-6 w-6" />
                        <p className="block text-gray-900 font-bold">
                          {data.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
        <div className="absolute w-fit h-fit top-2/4 right-4 hidden sm:block z-10">
          <div className="next bg-sky-500 w-fit rounded-full p-1 text-center">
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      </Swiper>
      <div className="min-w-full mt-10 h-[20px] rounded-lg custom-bullet"></div>
      <div className="min-w-full px-9 my-5">
        <h1 className="font-semibold text-2xl lg:my-10">Others Packet</h1>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-2 mx-6">
        {data.products.map((data, index) => (
          <div key={index} className="mb-5">
            <div className="flex flex-col justify-center items-center shadow-lg mx-8 border-2 rounded-lg lg:mx-2">
              <div className="min-w-full min-h-full bg-white rounded-lg">
                <div className="flex flex-col justify-center items-center">
                  <div className="relative min-w-full">
                    <Image
                      src={data.image}
                      width={300}
                      height={192}
                      layout="responsive"
                    />

                    <div className="absolute -bottom-2 right-2/4 translate-x-2/4 w-[140px] h-[22px] bg-sky-500 rounded-xl">
                      <h1 className="text-white font-bold text-sm text-center leading-5">
                        {data.duration}
                      </h1>
                    </div>
                  </div>
                  <div className="min-w-full py-6 px-6">
                    <div>
                      <h1 className="font-semibold text-ellipsis text-xl">
                        {data.title}
                      </h1>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <MapPinIcon className="h-8 w-8" />
                      <p className="block">{data.route}</p>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <CurrencyDollarIcon className="h-6 w-6" />
                      <p className="block text-gray-900 font-bold">
                        {data.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProductListScreen;
