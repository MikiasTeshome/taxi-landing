import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { HiOutlineUser } from 'react-icons/hi';
import { LuCalendarDays } from 'react-icons/lu';

import type { BlogType } from '@/data/types';

type BlogCardProps = {
  blogData: BlogType;
};

const BlogCard: FC<BlogCardProps> = ({ blogData }) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg">
      <div className="w-full overflow-hidden">
        <Image
          src={blogData.coverImage}
          alt={blogData.title}
          width={500}
          height={400}
          className="w-full object-cover"
        />
      </div>
      <div className="m-3 space-y-3">
        <span className="rounded-md bg-button-primary/30 px-2 py-1 text-xs text-button-primary">
          {blogData.tag}
        </span>
        <h1 className="text-xl font-medium">{blogData.title}</h1>
        <div className="flex items-center gap-3 text-sm text-neutral-500">
          <div className="flex items-center gap-1">
            <HiOutlineUser className="text-button-primary" /> {blogData.writer}
          </div>
          <div className="flex items-center gap-1">
            <LuCalendarDays className="text-button-primary" /> {blogData.date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
