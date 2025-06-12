import React from 'react';

import { reviewSectionData } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

import ReviewSlider from './ReviewSlider';

const SectionReviews = () => {
  return (
    <div className="container">
      <Heading desc={reviewSectionData.description} isCenter>
        {reviewSectionData.headingStart}{' '}
        <span className="text-button-primary">
          {reviewSectionData.spanText}
        </span>
      </Heading>

      <ReviewSlider />
    </div>
  );
};

export default SectionReviews;
