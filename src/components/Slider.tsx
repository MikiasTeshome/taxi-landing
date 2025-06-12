/* eslint-disable import/no-extraneous-dependencies */
import '@splidejs/splide/css';
import '@splidejs/react-splide/css/core';

import { Splide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import type { FC, ReactNode } from 'react';
import React from 'react';

export interface SliderProps {
  children: ReactNode;
  perPage?: number;
  autoplay?: boolean;
  type?: string;
  perMove?: number;
  gap?: string;
  pagination?: boolean;
  drag?: 'free' | boolean;
  autoScroll?: {
    speed: number;
  };
  arrows?: boolean;
  trigger?: boolean;
  breakpoints?: {
    640: {
      perPage: number;
      gap: string;
    };
    768: {
      perPage: number;
      gap: string;
    };
    1024: {
      perPage: number;
      gap: string;
    };
    1280: {
      perPage: number;
      gap: string;
    };
    1536: {
      perPage: number;
      gap: string;
    };
  };
}

const Slider: FC<SliderProps> = ({ children, trigger, ...args }) => {
  const options = {
    ...args,
    classes: {
      prev: 'splide__arrow--prev bg-button-primary',
      next: 'splide__arrow--next bg-button-primary',
    },
  };
  return (
    <div className="">
      <Splide options={options} extensions={trigger ? { AutoScroll } : {}}>
        {children}
      </Splide>
    </div>
  );
};

export default Slider;
