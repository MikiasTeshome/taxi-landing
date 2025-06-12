import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { MdStar } from 'react-icons/md';

import type { DriverType } from '@/data/types';

type DriverCardProps = {
  driverData: DriverType;
};

const DriverCard: FC<DriverCardProps> = ({ driverData }) => {
  return (
    <div className="rounded-xl bg-white p-3 shadow-md">
      <div className="overflow-hidden rounded-t-xl bg-custom-gray">
        <Image
          src={driverData.profile}
          alt={driverData.name}
          className="w-full object-cover"
        />
      </div>
      <div className="mt-3 flex items-start justify-between">
        <div>
          <h3 className="font-medium">{driverData.name}</h3>
          <p className="text-sm text-neutral-500">{driverData.car}</p>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <MdStar className="text-yellow-400" /> {driverData.rating}.0
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
