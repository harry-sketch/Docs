import React from 'react';
import { SocialData } from '../../FooterContent';

// Data

const Social = () => (
  <div className="flex items-center space-x-5">
    {SocialData.map(({ id, icon, link }) => (
      <span
        className="cursor-pointer"
        key={id}
        role="presentation"
        onClick={() => window.open(link)}
      >
        {icon}
      </span>
    ))}
  </div>
);

export default Social;
