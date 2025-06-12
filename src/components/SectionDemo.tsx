import Image from 'next/image';
import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

import { sectionDemoData } from '@/data/content';
import ButtonCircle3 from '@/shared/Button/ButtonCirclel3';
import Heading from '@/shared/Heading/Heading';

const SectionDemo = () => {
  return (
    <div className="container">
      <Heading desc={sectionDemoData.description} isCenter>
        {sectionDemoData.headingStart} <span>{sectionDemoData.spanText}</span>
      </Heading>
      <div className="relative flex items-center justify-center">
        <ButtonCircle3
          className="absolute z-10 bg-neutral-400 text-white ring-8 ring-white/10"
          size="w-20 h-20"
        >
          <AiFillPlayCircle className="text-5xl" />
        </ButtonCircle3>
        <Image
          src={sectionDemoData.mockup}
          width={1920}
          height={1000}
          alt="mockup"
          className="z-0 w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default SectionDemo;
