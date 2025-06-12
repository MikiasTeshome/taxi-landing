import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import ButtonCircle3 from '@/shared/Button/ButtonCirclel3';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';

type DownloadCardProps = {
  title: string;
  OSversion: string;
  qrCode: StaticImageData | string;
  href: string;
  svg: JSX.Element;
};

const DownloadCard: FC<DownloadCardProps> = ({
  title,
  OSversion,
  qrCode,
  href,
  svg,
}) => {
  return (
    <div className="relative space-y-3 rounded-lg bg-custom-dark-gray p-5 text-neutral-100">
      <div className="text-xl font-medium">{title}</div>
      <div className="text-xs text-neutral-500">{OSversion}</div>
      <ButtonPrimary
        href={href}
        className="text-black"
        sizeClass="py-2 px-3"
        fontSize="text-sm"
      >
        Download
      </ButtonPrimary>
      <div className="w-[35%] overflow-hidden rounded-md md:w-[30%]">
        <Image src={qrCode} alt="qr-code" className="w-full object-cover" />
      </div>
      <ButtonCircle3
        className="absolute -bottom-3 -right-3 bg-custom-black"
        size="lg:w-24 lg:h-24 w-20 h-20"
      >
        {svg}
      </ButtonCircle3>
    </div>
  );
};

export default DownloadCard;
