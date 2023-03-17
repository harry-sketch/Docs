import ExternalLinks from '../../../helpers/externalLinks';
import FooterIcons from '../../assets/FooterIcons';

export type TSocialDataType = {
  id: number;
  icon: JSX.Element;
  link: string;
};

export type TNavData = {
  id: number;
  name: string;
  href: string;
}[];

export type TNavigationType = {
  [key: string]: TNavData;
};

const { twitter, insta, linkedin, youTube } = FooterIcons;

export const NavigationData: TNavigationType = {
  solutions: [
    { id: 1, name: 'Documentation', href: '/docs' },
    // { id: 2, name: "API Reference", href: "/docs" },
    { id: 3, name: 'Blog', href: '/blog' },
  ],
  support: [
    {
      id: 4,
      name: 'GitHub',
      href: 'https://github.com/Huddle-01/',
    },
    {
      id: 5,
      name: 'Discord',
      href: 'https://turborepo.org/discord',
    },
    {
      id: 6,
      name: 'Twitter',
      href: 'https://twitter.com/huddle01com',
    },
  ],
  company: [
    { id: 7, name: 'About Us', href: 'https://github.com/Huddle-01' },
    {
      id: 8,
      name: 'Terms & Conditions',
      href: 'https://twitter.com/huddle01com',
    },
    {
      id: 9,
      name: 'Privacy Policy',
      href: 'https://twitter.com/huddle01com',
    },
    { id: 10, name: 'Cookies', href: 'https://twitter.com/huddle01com' },
  ],
};

export const SocialData: TSocialDataType[] = [
  { id: 1, icon: twitter, link: ExternalLinks.twitterLink },
  { id: 2, icon: insta, link: ExternalLinks.instaLink },
  { id: 3, icon: linkedin, link: ExternalLinks.linkedinLink },
  { id: 4, icon: youTube, link: ExternalLinks.ytLink },
];
