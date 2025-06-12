import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { footerBannerData } from '@/data/content';
import appStore from '@/images/app-store.png';
import google from '@/images/google-play.png';
import Heading from '@/shared/Heading/Heading';

const FooterBanner = () => {
  return (
    <div className="mx-auto rounded-2xl bg-button-primary py-16">
      <Heading
        className="mb-5"
        desc={footerBannerData.descriptionOne}
        isMain
        isCenter
      >
        {footerBannerData.heading}
      </Heading>
      <p className="mx-auto w-[80%] text-center md:w-[50%]">
        {footerBannerData.descriptionTwo}
      </p>
      <div className="flex items-center justify-center gap-4 pt-10">
        <Link href="/#" className="w-[30%] md:w-[14%]">
          <Image
            src={google}
            alt="download from google"
            className="h-full w-full object-cover"
          />
        </Link>
        <Link href="/#" className=" w-[30%] md:w-[14%]">
          <Image
            src={appStore}
            alt="download on appStore"
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterBanner;
