'use client';

import React from 'react';

import AboutUs from '@/components/AboutUs';
import LocationSlider from '@/components/LocationSlider';
import SectionBenefits from '@/components/SectionBenefits';
import SectionBlogs from '@/components/SectionBlogs';
import SectionDemo from '@/components/SectionDemo';
import SectionDownloadApp from '@/components/SectionDownloadApp';
import SectionDrivers from '@/components/SectionDrivers';
import SectionFeatures from '@/components/SectionFeatures';
import SectionHeader from '@/components/SectionHeader';
import SectionPricing from '@/components/SectionPricing';
import SectionReviews from '@/components/SectionReviews';

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero/Header Section */}
      <div className="rounded-2xl bg-custom-gray py-20">
        <SectionHeader />
      </div>

      {/* Download App Section */}
      <div className="rounded-b-2xl bg-custom-black pb-16 pt-24">
        <SectionDownloadApp />
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <SectionBenefits />
      </div>

      {/* About Us Section */}
      <div className="rounded-2xl bg-custom-gray py-24">
        <AboutUs />
      </div>

      {/* Demo Section */}
      <div className="py-24">
        <SectionDemo />
      </div>

      {/* Features Section */}
      <div className="rounded-2xl bg-custom-black pb-1 pt-24 md:h-[45vh] md:pb-0 lg:h-[85vh]">
        <SectionFeatures />
      </div>

      {/* Pricing Section */}
      <div className="pb-24 pt-32 md:mt-32 lg:mt-72">
        <SectionPricing />
      </div>

      {/* Location Slider */}
      <div className="relative mb-28 mt-7 bg-custom-black">
        <LocationSlider />
      </div>

      {/* Reviews Section */}
      <div className="container mb-28">
        <SectionReviews />
      </div>

      {/* Drivers Section */}
      <div className="rounded-2xl bg-custom-gray py-24">
        <SectionDrivers />
      </div>

      {/* Blogs Section */}
      <div className="py-24">
        <SectionBlogs />
      </div>
    </div>
  );
};

export default HomePage;
