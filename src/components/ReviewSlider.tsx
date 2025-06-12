'use client';

import { SplideSlide } from '@splidejs/react-splide';
import React from 'react';

import { reviewSectionData } from '@/data/content';

import ReviewCard from './ReviewCard';
import Slider from './Slider';

const ReviewSlider = () => {
  return (
    <div>
      <Slider
        arrows
        perPage={1}
        perMove={1}
        gap="50px"
        autoplay
        pagination={false}
      >
        {reviewSectionData.reviews.map((reviewData) => (
          <SplideSlide key={reviewData.name}>
            <ReviewCard reviewData={reviewData} />
          </SplideSlide>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
