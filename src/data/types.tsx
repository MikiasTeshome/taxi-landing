import type { StaticImageData } from 'next/image';

export type DriverType = {
  profile: StaticImageData | string;
  name: string;
  car: string;
  rating: number;
};

export type BlogType = {
  coverImage: string;
  tag: string;
  title: string;
  date: string;
  writer: string;
};

export type ReviewType = {
  name: string;
  occupation: string;
  review: string;
  profilePhoto: string;
};
