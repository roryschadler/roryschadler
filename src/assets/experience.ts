import { ItemInterface } from '../components/atomic/Item';

const experiences: ItemInterface[] = [
  {
    title: 'Zapata Computing',
    subtitle: 'Boston, MA',
    subItems: [
      {
        title: 'Front-End Developer, Quantum Platform Engineering Team',
        text: [
          'Developing user interfaces which are used by scientists and DevOps professionals to develop quantum computing and machine learning solutions, and run those solutions in an enterprise environment',
        ],
      },
    ],
    startDate: 'March 2022',
  },
  {
    title: 'MaterialsMine',
    subtitle: 'Remote',
    subItems: [
      {
        title:
          'Associate in Research, Duke University Pratt School of Engineering',
        text: [
          'Continuing work on the MaterialsMine application, helping transition the application to a containerized and production-ready environment. Projects include front-end web development in Vue.js and migrating static views to reactive components',
        ],
        startDate: 'December 2021',
        endDate: 'March 2022',
      },
      {
        title: 'Software Engineer, University of Vermont',
        text: [
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
