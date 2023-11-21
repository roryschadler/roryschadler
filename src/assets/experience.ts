import { ItemAriaProps, ItemProps } from 'components/atomic/Item';

const ariaProps: ItemAriaProps = {
  title: 'Company',
  subtitle: 'Location',
  subItems: 'Role',
};

const experiences: ItemProps[] = [
  {
    title: 'Zapata Computing',
    subtitle: 'Boston, MA',
    key: 'zapata',
    subItems: [
      {
        title:
          'Software Engineer, Front-End, Quantum Platform Engineering Team',
        key: 'platform_engineer',
        text: [
          [
            'As part of the Quantum Platform team, I contribute to Orquestra',
            'across the tech stack, writing and deploying high-performance',
            'user interfaces for use by scientists and non-scientists alike.',
            'Orquestra enables anyone to write and deliver quantum and machine',
            'learning solutions, and run them in an enterprise environment.',
          ],
        ],
      },
    ],
    startDate: 'March 2022',
    ariaProps,
  },
  {
    title: 'MaterialsMine',
    subtitle: 'Remote',
    key: 'materialsmine',
    subItems: [
      {
        title:
          'Associate in Research, Duke University Pratt School of Engineering',
        key: 'duke_ra',
        text: [
          [
            'Continued work on the MaterialsMine application, helping',
            'transition the application to a containerized and',
            'production-ready environment. Projects included front-end web',
            'development in Vue.js and migrating static views to reactive',
            'components',
          ],
        ],
        startDate: 'December 2021',
        endDate: 'March 2022',
      },
      {
        title: 'Software Engineer, University of Vermont',
        key: 'uvm_engineer',
        text: [
          [
            'Helped in the development of an online database for data on',
            'nanocomposite materials, including work on semantic data ETL,',
            'manipulation and retrieval',
          ],
          [
            'Built several tools for the automatic conversion and retrieval of',
            'data provided by academic journals',
          ],
        ],
        startDate: 'January 2020',
        endDate: 'September 2020',
      },
    ],
    startDate: 'January 2020',
    endDate: 'March 2022',
    ariaProps,
  },
];

export default experiences;
