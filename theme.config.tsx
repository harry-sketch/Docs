import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Huddle01 from './components/assets/Huddle01';
import { Footer } from './components/common/Footer/Footer';

const config: DocsThemeConfig = {
  toc: {
    float: true,
  },
  feedback: {
    content: 'Question? Give us feedback →',
  },
  darkMode: false,
  logo: function LogoActual() {
    return (
      <div id="huddle01-logo">
        <Huddle01 height={26} />
        <span className="sr-only">Huddle01</span>
      </div>
    );
  },
  head: function () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter, title } = useConfig();
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/favicon/favicon.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@huddle01com" />
        <meta name="twitter:creator" content="@huddle01com" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={frontMatter.description} />
        <meta
          property="og:url"
          content={`https://doc.huddle01.com${router.asPath}`}
        />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Huddle01Docs" />
      </>
    );
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  footer: { component: <Footer /> },
  nextThemes: {
    defaultTheme: 'dark',
  },
};

export default config;
