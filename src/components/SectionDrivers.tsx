import React from 'react';
import { MdArrowForward } from 'react-icons/md';

import { driversSectionData } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';

import DriverCard from './DriverCard';

const SectionDrivers = () => {
  return (
    <div className="container">
      <div className="mb-10 items-end justify-between space-y-5 md:flex md:space-y-0">
        <Heading desc={driversSectionData.description} className="md:w-[40%]">
          {driversSectionData.headingStart}{' '}
          <span className="text-button-primary">
            {driversSectionData.spanText}{' '}
          </span>
          {driversSectionData.headingEnd}
        </Heading>

        <ButtonPrimary
          sizeClass="px-6 py-4"
          className="flex items-center gap-1.5"
          href={driversSectionData.href}
        >
          View All Drivers
          <MdArrowForward />
        </ButtonPrimary>
      </div>
      <div className="grid gap-10 md:grid-cols-3">
        {driversSectionData.drivers.map((driver) => (
          <DriverCard key={driver.name} driverData={driver} />
        ))}
      </div>
    </div>
  );
};

export default SectionDrivers;
