import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { ReviewType } from '@/data/types';
import quotationImg from '@/images/quotation.png';
import quotationImg2 from '@/images/quotation2.png';

type ReviewCardProps = {
  reviewData: ReviewType;
};

const ReviewCard: FC<ReviewCardProps> = ({ reviewData }) => {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div>
        <Image
          className="absolute right-full top-24 -mr-16 opacity-50 md:opacity-100 lg:mr-3"
          src={quotationImg}
          alt=""
        />
        <Image
          className="absolute left-full top-24 -ml-16 opacity-50 md:opacity-100 lg:ml-3"
          src={quotationImg2}
          alt=""
        />

        <div
          key={reviewData.name}
          className="flex cursor-pointer flex-col items-center text-center"
        >
          <div className="mb-10 h-[100px] w-[100px] overflow-hidden rounded-full">
            <Image
              width={300}
              height={300}
              src={reviewData.profilePhoto}
              alt="profile"
              className="mb-10 h-full w-full object-cover"
            />
          </div>
          <span className="block text-2xl font-semibold">
            {reviewData.name}
          </span>
          <span className="text-sm text-neutral-500">
            {reviewData.occupation}
          </span>
          <div className="mt-3.5 flex items-center space-x-0.5 text-yellow-500">
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
            <StarIcon className="h-4 w-4" />
          </div>
          <span className="mt-5 block">{reviewData.review}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
