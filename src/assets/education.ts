import { ItemInterface } from '../components/atomic/Item';

const education: ItemInterface[] = [
  {
    title: 'Dartmouth College',
    subtitle: 'Hanover, NH',
    subItems: [
      {
        text: [
          'Bachelor of Arts in Physics modified with Computer Science, cum Laude',
          'Minor in Chinese Language',
        ],
      },
      {
        title: 'Awards:',
        text: [
          'Christina Porter Award in the Arts for Achievement in Vocal Music, Hopkins Center for the Arts',
          'Stanley Wallace Technical Theater Award, Dartmouth College Department of Theater',
        ],
      },
      {
        title: 'Relevant Coursework:',
        text: [
          'Quantum Computation and Information, Quantum Mechanics, Physical Computing, Advanced Mechanics, Software Design and Implementation, Machine Learning',
        ],
      },
    ],
    startDate: 'September 2017',
    endDate: 'June 2021',
  },
  {
    title: 'Beijing Normal University',
    subtitle: 'Beijing, China',
    subItems: [
      {
        text: ['Chinese Language Study Abroad, Dartmouth College'],
      },
    ],
    startDate: 'September 2019',
    endDate: 'December 2019',
  },
];

export default education;
