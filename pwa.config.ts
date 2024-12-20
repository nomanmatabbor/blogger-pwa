import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'Chemistry Job Insight',
  shortName: 'Chemistry Job Insight',
  description: 'Navigating Opportunities in Chemistry',
  direction: 'auto',
  language: 'en-GB',
  backgroundColor: '#fff',
  themeColor: '#283593',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Resources',
      shortName: 'Resources',
      description: 'Get resources...',
      url: '/search/label/Resources?utm_source=homescreen',
    },
    {
      name: 'Write for us',
      shortName: 'Write for us',
      description: 'Write for us...',
      url: '/p/write-for-us-contribute-to-chemistry.html?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.chemistryjobinsight.com',
} satisfies Config;
