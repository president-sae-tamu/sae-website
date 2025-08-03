import ProgramPage from "../components/ProgramPage";

const pageData = {
  title: "Formula Internal Combustion",
  tagline: "Where precision engineering meets raw power.",

  description: "Established in 1998, the Texas A&M Formula IC Team has dominated across decades with 8 competition wins and 14 top 5 finishes. Every year, we design, manufacture, and test a brand new formula style race car powered by an internal combustion engine, optimizing every component for speed, efficiency, and reliability.",

  mission: "To develop exceptional engineers through innovative formula race car design and competition. Each year, our senior engineering students start with a clean slate, fostering creative freedom and unique problem-solving that prepares them for industry leadership while pursuing excellence in Formula SAE competition.",
  competitionEvents: [
    { name: 'Design', points: 150 },
    { name: 'Autocross', points: 125 },
    { name: 'Cost', points: 100 },
    { name: 'Acceleration', points: 100 },
    { name: 'Efficiency', points: 100 },
    { name: 'Skid-Pad', points: 75 },
    { name: 'Business Presentation', points: 75 },
    { name: 'Endurance', points: 275 },
  ],
  contactEmail: "tamufsaebusiness@gmail.com",
  subTeams: [
    'Aerodynamics',
    'Chassis',
    'Electrical',
    'Powertrain',
    'Suspension',
  ],
  images: [
    '/images/ic/showcase/ic-25-panning.jpg',
    '/images/ic/showcase/ic-25-team.jpg',
    '/images/ic/showcase/ic-comp.jpg',
    '/images/ic/showcase/ic-25-70.jpg',
    '/images/ic/showcase/ic-25-57.jpg',
    '/images/ic/showcase/ic-25-72.jpg',
  ],

  history: [
    {
      year: '2024-2025',
      achievement: '2nd Place Overall at FSAE Michigan',
      details: 'A top-tier performance with strong results across all categories, including 4th in Endurance and 5th in Skidpad.',
      carImage: '/images/ic/showcase/history/25.jpg'
    },
    {
      year: '2023-2024',
      achievement: '5th Place Overall & 1st in Acceleration',
      details: 'A strong acceleration performance carried the car to a greatly-improved top 5 finish.',
      carImage: '/images/ic/showcase/history/24.jpeg'
    },
    {
      year: '2022-2023',
      achievement: '5th Place in Autocross',
      details: 'A strong autocross performance once again led the team to 27th overall.',
      carImage: '/images/ic/showcase/history/23.jpg'
    },
    {
      year: '2021-2022',
      achievement: '1st Place in Autocross',
      details: 'Dominated the Autocross event with a lightning-fast time, finishing 27th overall at the Michigan competition.',
      carImage: '/images/ic/showcase/history/22.jpg'
    },
    {
      year: '2020-2021',
      achievement: 'National Champions & Record-Breaking Performance',
      details: 'Swept the competition in Nevada, winning Overall, Endurance, Autocross, and Skid Pad, while setting a new national points record for an IC car.',
      carImage: '/images/ic/showcase/history/21.jpg'
    },
    {
      year: '2019-2020',
      achievement: '',
      details: 'Season impacted by global events, focused on design development.',
      carImage: '/images/ic/showcase/history/20.jpg'
    },
    {
      year: '2018-2019',
      achievement: 'Top 10 Overall Finish in Lincoln',
      details: 'Placed 10th out of 76 teams, with notable results including 8th in Endurance and 9th in Fuel Efficiency.',
      carImage: '/images/ic/showcase/history/19.jpeg'
    },
    {
      year: '2017-2018',
      achievement: 'National Champions Again',
      details: 'Back-to-back championship with 1st in Endurance and 2nd in Autocross.',
      carImage: '/images/ic/showcase/history/18.png'
      
    },
    {
      year: '2016-2017',
      achievement: 'National Champions',
      details: 'Championship victory with 1st in Endurance and Fuel Efficiency, 2nd in Design.',
      carImage: '/images/ic/showcase/history/17.jpg'
    },
    {
      year: '2015-2016',
      achievement: '7th in Autocross',
      details: 'A strong autocross performance but endurance challenges kept us at 25th overall in Lincoln.'
    },
    {
      year: '2010-2011',
      achievement: 'National Champions',
      details: ''
    },
    {
      year: '2008-2009',
      achievement: 'National Champions',
      details: ''
    },
    {
      year: '2006-2007',
      achievement: 'Back-to-Back National Champions',
      details: ''
    },
    {
      year: '2005-2006',
      achievement: 'National Champions',
      details: ''
    },
    {
      year: '1999-2000',
      achievement: 'National Champions',
      details: '',
    },
    {
      year: '1998-1999',
      achievement: 'Rookie Season',
      details: 'Winner of the William C. Mitchell Rookie Award',
    },
  ],
  instagramUrl: "https://www.instagram.com/tamu.formula.sae/",
  linktreeUrl: "https://linktr.ee/tamuformulasae"
};

const FormulaCombustionPage = () => {
  return (
    <ProgramPage
      title={pageData.title}
      tagline={pageData.tagline}
      description={pageData.description}
      mission={pageData.mission}
      competitionEvents={pageData.competitionEvents}
      contactEmail={pageData.contactEmail}
      images={pageData.images}
      history={pageData.history}
      subTeams={pageData.subTeams}
      instagramUrl={pageData.instagramUrl}
      linktreeUrl={pageData.linktreeUrl}
    />
  );
};

export default FormulaCombustionPage;