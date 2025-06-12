import type { FC } from 'react';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdArrowForward } from 'react-icons/md';

import ButtonSecondary from '@/shared/Button/ButtonSecondary';

type PricingItemType = {
  pricingData: {
    name: string;
    description: string;
    priceMonthly: number;
    priceYearly: number;
    href: string;
    plans: string[];
  };
  timePlan: boolean;
  index: number;
};

const PricingItem: FC<PricingItemType> = ({ pricingData, timePlan, index }) => {
  return (
    <div
      className={`rounded-2xl ${
        index === 1 ? 'bg-button-primary' : 'border border-neutral-300'
      } px-5 py-7`}
    >
      <h1 className="text-center text-3xl font-medium">{pricingData.name}</h1>
      <p className={`${index === 1 ? 'text-neutral-800' : 'text-neutral-500'}`}>
        {pricingData.description}
      </p>
      <div className="mt-7 flex items-center gap-2">
        <div className="text-5xl font-semibold">
          ${timePlan ? pricingData.priceMonthly : pricingData.priceYearly}
        </div>
        <div
          className={`text-sm ${
            index === 1 ? 'text-neutral-800' : 'text-neutral-500'
          }`}
        >
          {timePlan ? '/month' : '/year'}
        </div>
      </div>
      <div
        className={`my-5 h-px ${
          index === 1 ? 'bg-white/30' : 'bg-neutral-400/50'
        }`}
      />
      <div className="mb-5 space-y-5">
        {pricingData.plans.map((plan) => (
          <div
            className={`flex items-center ${
              index === 1 ? 'text-neutral-800' : 'text-neutral-500'
            }  gap-1`}
            key={plan}
          >
            <div>
              {index === 1 ? (
                <BsCheckCircleFill className="text-lg text-neutral-800" />
              ) : (
                <BsCheckCircleFill className="text-lg text-button-primary" />
              )}
            </div>{' '}
            {plan}
          </div>
        ))}
      </div>
      <ButtonSecondary
        className="flex w-full items-center gap-x-2 self-center rounded-full border border-button-primary bg-white text-button-primary"
        href={pricingData.href}
        sizeClass="py-3"
      >
        Get Started!
        <MdArrowForward />
      </ButtonSecondary>
    </div>
  );
};

export default PricingItem;
