import type { FC } from 'react';
import React from 'react';

type ToggleProps = {
  onChange?: (checked: boolean) => void;
};

const Toggle: FC<ToggleProps> = ({ onChange }) => {
  return (
    <div className="space-x-3">
      <div className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          onChange={(e) => onChange && onChange(e.target.checked)}
        />
        <div className="peer h-6 w-11 rounded-full bg-button-primary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent" />
      </div>
    </div>
  );
};

export default Toggle;
