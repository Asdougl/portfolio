import { type Project } from '~/types/Project';

import asdouglCalendarEvent from '~/assets/images/asdougl-calendar-event.png';
import asdouglCalendarInbox from '~/assets/images/asdougl-calendar-inbox.png';
import asdouglCalendarMonth from '~/assets/images/asdougl-calendar-month.png';
import asdouglCalendarPeriod from '~/assets/images/asdougl-calendar-period.png';

export const PROJECTS: Project[] = [
  {
    title: 'Asdougl Calendar',
    description:
      'A simplified calendar app for organising the events in your life, with a focus on flexibility and readability. It is built with an understanding that events are not simply set meetings but instead checkpoints throughout your day.',
    repository: 'calendar',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'tRPC'],
    link: 'https://calendar.asdougl.com/',
    screenshots: [
      asdouglCalendarInbox,
      asdouglCalendarEvent,
      asdouglCalendarMonth,
      asdouglCalendarPeriod,
    ],
  },
  {
    title: 'Tools',
    description:
      'A collection of TypeScript and React tools that are focused on being reused in other projects without the need to install a package or configure dependencies. Simply copy and paste the functions and components you need and customise them to fit the use case.',
    tools: ['TypeScript', 'React', 'Tailwind CSS', 'Vitest', 'Storybook'],
    repository: 'tools',
  },
  {
    title: 'Headless Date Picker',
    description:
      'A fairly unopinionated and functional date picker built with TypeScript and React. It is designed to be used in any project simply by copying the source code and customising it where needed to fit your preferences and styles.',
    tools: ['TypeScript', 'React', 'Tailwind CSS'],
    repository: 'headless-date-picker',
  },
  {
    title: 'Portfolio Site',
    description:
      'This very website, a statically generated site built with Astro.',
    tools: ['TypeScript', 'React', 'Tailwind CSS', 'Astro'],
    repository: 'portfolio',
  },
];
