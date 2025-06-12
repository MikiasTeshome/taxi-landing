import React from 'react';

import { pricingData } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

import PriceTab from './PriceTab';

const SectionPricing = () => {
  return (
    <div className="container">
      <Heading desc={pricingData.description} isCenter className="mb-10">
        {pricingData.headingStart}{' '}
        <span className="text-button-primary">{pricingData.spanText}</span>
      </Heading>
      <PriceTab />
    </div>
  );
};

export default SectionPricing;
