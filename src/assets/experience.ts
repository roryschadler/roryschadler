import { Experience } from '../components/atomic/ExperienceItem';

const experiences: Experience[] = [
  {
    company: 'Zapata Computing',
    location: 'Boston, MA',
    roles: [
      {
        title: 'Front-End Developer, Quantum Platform Engineering Team',
        description: [
          'Developing user interfaces which are used by scientists and DevOps professionals to develop quantum computing and machine learning solutions, and run those solutions in an enterprise environment',
        ],
      },
    ],
    startDate: 'March 2022',
  },
  {
    company: 'MaterialsMine',
    location: 'Remote',
    roles: [
      {
        title:
          'Associate in Research, Duke University Pratt School of Engineering',
        description: [
          'Continuing work on the MaterialsMine application, helping transition the application to a containerized and production-ready environment. Projects include front-end web development in Vue.js and migrating static views to reactive components',
        ],
        startDate: 'December 2021',
        endDate: 'March 2022',
      },
      {
        title: 'Software Engineer, University of Vermont',
        description: [
          'Helped in the development of an online database for data on nanocomposite materials, including work on semantic data ETL, manipulation and retrieval',
          'Built several tools for the automatic conversion and retrieval of data provided by academic journals',
        ],
        startDate: 'January 2020',
        endDate: 'September 2020',
      },
    ],
    startDate: 'January 2020',
    endDate: 'March 2022',
  },
];

export default experiences;
