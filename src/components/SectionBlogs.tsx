import React from 'react';

import { blogSectionData } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

import BlogCard from './BlogCard';

const SectionBlogs = () => {
  return (
    <div className="container">
      <div className="mb-10 items-end justify-between space-y-5 md:flex md:space-y-0">
        <Heading className="" desc={blogSectionData.descriptionOne}>
          {blogSectionData.headingStart}{' '}
          <span className="text-button-primary">
            {blogSectionData.spanTextOne}{' '}
          </span>{' '}
          &{' '}
          <span className="text-button-primary">
            {blogSectionData.spanTextTwo}
          </span>
        </Heading>
        <div className="border-button-primary pl-3 text-sm text-neutral-500 md:w-[30%] md:border-l-2">
          {blogSectionData.descriptionTwo}
        </div>
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogSectionData.blogs.map((blogData) => (
          <BlogCard key={blogData.title} blogData={blogData} />
        ))}
      </div>
    </div>
  );
};

export default SectionBlogs;
