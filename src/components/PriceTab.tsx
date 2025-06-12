'use client';

import React, { useState } from 'react';

import { pricingData } from '@/data/content';
import Toggle from '@/shared/Toggle/Toggle';

import PricingItem from './PricingItem';

const PriceTab = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-3">
        <span>Bill Monthly</span>
        <Toggle onChange={() => setMonthly(!monthly)} />
        <span>Bill Annualy</span>
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {pricingData.plans.map((plan, idx) => (
          <PricingItem
            key={plan.name}
            timePlan={monthly}
            index={idx}
            pricingData={plan}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceTab;
