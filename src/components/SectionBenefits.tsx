import React from 'react';

import { benefitsData } from '@/data/content';
import ButtonCircle from '@/shared/Button/ButtonCircle';
import Heading from '@/shared/Heading/Heading';

const SectionBenefits = () => {
  return (
    <div className="container">
      <Heading desc={benefitsData.description} isCenter>
        {benefitsData.headingStart}{' '}
        <span className="text-button-primary">{benefitsData.span}</span>
      </Heading>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {benefitsData.benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex flex-col items-center justify-center gap-5 px-5"
          >
            <ButtonCircle size="w-16 h-16">{benefit.svg}</ButtonCircle>
            <div className="text-xl font-medium">{benefit.title}</div>
            <div className="text-center text-sm text-neutral-500">
              {benefit.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionBenefits;
