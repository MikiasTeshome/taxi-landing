import React from 'react';

import { downloadSectionData } from '@/data/content';

import DownloadCard from './DownloadCard';

const SectionDownloadApp = () => {
  return (
    <div className="container items-center justify-between space-y-5 md:flex md:space-y-0">
      <div className="space-y-4 text-neutral-100 md:w-[45%]">
        <div
          className="w-[95%] text-2xl font-medium lg:text-4xl"
          style={{ lineHeight: '1.1em' }}
        >
          {downloadSectionData.headingStart}{' '}
          <span className="text-button-primary">
            {downloadSectionData.spanText}
          </span>{' '}
          {downloadSectionData.headingEnd}
        </div>
        <div className="w-[80%] text-sm text-neutral-500">
          {downloadSectionData.description}
        </div>
        <div className="grid w-full grid-cols-4 divide-x divide-neutral-500 lg:w-[90%]">
          {downloadSectionData.stats.map((stat, idx) => (
            <div
              key={stat.title}
              className={`${idx === 0 ? 'col-span-2 px-0' : 'px-2 lg:px-5'}`}
            >
              <h1 className="font-medium lg:text-xl">{stat.title}</h1>
              <p className="text-xs text-neutral-500 lg:text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:w-[50%] lg:gap-7">
        {downloadSectionData.downloadLinks.map((download) => (
          <DownloadCard
            key={download.title}
            href={download.href}
            OSversion={download.OSversion}
            title={download.title}
            svg={download.svg}
            qrCode={download.qrCode}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionDownloadApp;
