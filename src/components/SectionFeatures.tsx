import Image from 'next/image';
import React from 'react';

import { featuresData } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

const SectionFeatures = () => {
  return (
    <div className="container mb-24">
      <div className="mb-10 items-end justify-between space-y-5 md:flex md:space-y-0">
        <div className="w-full md:w-[50%] lg:w-[30%]">
          <Heading className="text-white" desc={featuresData.descriptionTwo}>
            <span className="text-button-primary">
              {featuresData.spanText}{' '}
            </span>
            {featuresData.headingEnd}
          </Heading>
        </div>
        <div className="border-button-primary pl-3 text-sm text-neutral-100 md:w-[30%] md:border-l">
          {featuresData.descriptionOne}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {featuresData.features.map((feature, idx) => (
          <div
            key={feature.title}
            className={`flex rounded-xl bg-white shadow-md ${
              idx === 1 ? 'flex-col-reverse' : 'flex-col'
            }`}
          >
            <div className={`px-5 ${idx === 1 ? 'pb-5' : 'pt-5'}`}>
              <h2 className="text-center text-xl font-medium">
                {feature.title}
              </h2>
              <p className="mx-auto w-[90%] text-center text-sm text-neutral-500">
                {feature.description}
              </p>
            </div>
            <div className={`${idx === 1 ? 'mb-10' : 'mt-10'} px-6`}>
              <Image
                src={feature.screenshot}
                alt="screenshot"
                className="w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFeatures;
