'use client';

/* eslint-disable import/no-extraneous-dependencies */
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import Link from 'next/link';
import type { FC } from 'react';
import React, { useState } from 'react';

import { footerData, socials } from '@/data/content';
import ButtonCircle from '@/shared/Button/ButtonCircle';
import ButtonCircle3 from '@/shared/Button/ButtonCirclel3';
import Input from '@/shared/Input/Input';
import Logo from '@/shared/Logo/Logo';

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  /* eslint-disable no-useless-escape */
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleSubmit = async () => {
    try {
      if (!email) {
        setError('Please provide an email');
        return;
      }
      if (!email.match(emailRegex)) {
        setError('Please provide valid email');
        return;
      }
      const result = await axios.post('https://api.web3forms.com/submit', {
        reason: 'newsletter',
        email,
        access_key: '',
      });
      if (result.data) {
        setSuccess('successfully subscribed to newsletter');
      }
    } catch (e) {
      setError('failed to subscribe to newsletter');
    }
  };

  return (
    <div
      className={`nc-SectionSubscribe2 relative grid gap-10 text-neutral-100 lg:grid-cols-4 lg:gap-0 ${className}`}
    >
      <div className="col-span-1 space-y-5">
        <Logo />
        <p className="font-light text-neutral-200">{footerData.description}</p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <ButtonCircle3
              key={social.type}
              className="bg-custom-dark-gray"
              size="w-10 h-10"
            >
              {social}
            </ButtonCircle3>
          ))}
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-5 md:grid-cols-2 md:gap-10 lg:ml-20">
        {footerData.footerLinks.map((section) => (
          <div key={section.title} className="space-y-5">
            <div className="text-xl font-medium">{section.title}</div>
            <div className="flex flex-col items-start justify-center gap-5">
              {section.links.map((link) => (
                <div className="relative inline-block" key={link.name}>
                  <Link className="underline-text" href={link.href}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-1">
        <h2 className="text-xl font-medium">Get the latest information</h2>
        <div className="relative mt-5 max-w-sm">
          <Input
            required
            aria-required
            placeholder="Enter your email"
            type="email"
            rounded="rounded-full"
            className={`${error && 'ring-red-400'} ${
              success && 'ring-green-400'
            }`}
            onChange={(e) => setEmail(e.target.value)}
          />

          <ButtonCircle
            onClick={() => handleSubmit()}
            className="absolute right-1 top-1/2 -translate-y-1/2"
          >
            <ArrowSmallRightIcon className="h-5 w-5" />
          </ButtonCircle>
        </div>
        {error && <p className="ml-2 mt-1 text-xs text-red-500">{error}</p>}
        {success && (
          <p className="ml-2 mt-1 text-xs text-green-500">{success}</p>
        )}
      </div>
    </div>
  );
};

export default SectionSubscribe2;
