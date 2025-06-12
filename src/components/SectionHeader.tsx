import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { downloadStats, headingData, profilesPhotos } from '@/data/content';
import appStore from '@/images/app-store.png';
import google from '@/images/google-play.png';
import taxi from '@/images/taxi.svg';
import ButtonCircle3 from '@/shared/Button/ButtonCirclel3';

const SectionHeader = () => {
  return (
    <div className="container">
      <div className="items-center justify-between space-y-10 md:flex md:space-y-0">
        <div className="space-y-5 md:w-[50%]">
          <div>
            <span className="text-xl text-button-primary">-</span>{' '}
            {headingData.description}
          </div>
          <div
            className="w-[80%] text-3xl font-medium lg:text-5xl"
            style={{ lineHeight: '1.2em' }}
          >
            {headingData.title}{' '}
            <span className="text-button-primary">{headingData.spanText}</span>
          </div>
          <div className="w-[90%] text-sm text-neutral-500">
            {headingData.subtext}
          </div>
          <div className="flex items-center gap-4 pt-3">
            <Link href="/#" className="w-[30%]">
              <Image
                src={google}
                alt="download from google"
                className="h-full w-full object-cover"
              />
            </Link>
            <Link href="/#" className="w-[30%]">
              <Image
                src={appStore}
                alt="download on appStore"
                className="h-full w-full object-cover"
              />
            </Link>
          </div>
          <div className="flex items-center gap-3 pt-3">
            <div className="flex items-center -space-x-2">
              {profilesPhotos.map((profile) => (
                <div className="h-10 w-10" key={profile}>
                  <Image
                    width={300}
                    height={300}
                    className="h-full w-full rounded-full object-cover object-center"
                    src={profile}
                    alt="profile"
                  />
                </div>
              ))}
              <ButtonCircle3
                size="w-9 h-9"
                className="bg-white text-xl text-button-primary ring ring-button-primary/50"
              >
                +
              </ButtonCircle3>
            </div>
            <div>
              <div className="text-lg font-medium">{downloadStats.title}</div>
              <div className="text-sm text-neutral-500">
                {downloadStats.description}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[48%]">
          <Image src={taxi} alt="taxi-app" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
