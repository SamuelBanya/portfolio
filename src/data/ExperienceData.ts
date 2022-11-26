interface ExperienceDataType {
  title: string;
  date: string;
  details: string[];
}

export const ExperienceData: ExperienceDataType[] = [
  {
    title: 'Junior Software Developer',
    date: 'Nov 2022 - Present',
    details: [
      'Assists the development manager with all aspects of software design and coding.', 'Created API documentation for existing API backend.', 'Revised and created Postman Collection API calls for API calls.',
    ],
  },
  {
    title: 'Technical Support Engineer',
    date: 'Nov 2021 - Oct 2022',
      details: [
        'Listened to users’ needs, listened for recurring requests, and represented users in daily meetings with the Tier 2 and engineering teams.',
        'Consistently achieved top 3 status for overall ticket closure rate within support team.',
      ],
  },
];
