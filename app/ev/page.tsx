import ProgramPage from "../components/ProgramPage";

const pageData = {

  title: "Formula Electric",
  tagline: "Pioneering the future of sustainable motorsport.",

  description: "The Texas A&M Formula SAE Electric Team, established in 2021, is at the cutting edge of automotive innovation. Recognizing the industry's shift, a dedicated group of students embarked on the ambitious journey of designing, building, and competing with a Formula E style race car. Our team comprises students from a diverse range of disciplines, fostering a collaborative environment where different perspectives drive innovation.",
  
  mission: "Our mission is to produce the highest caliber of engineering students by designing, building, and competing with an electric racecar. Through continuous improvement, teamwork, and a commitment to engineering principles and safety, we strive to create a foundation for success.",
  competitionEvents: [
    { name: 'Engineering Design', points: 150 },
    { name: 'Cost & Manufacturing', points: 100 },
    { name: 'Business Presentation', points: 75 },
    { name: 'Autocross', points: 100 },
    { name: 'Efficiency', points: 100 },
    { name: 'Acceleration', points: 75 },
    { name: 'Skid Pad', points: 75 },
    { name: 'Endurance', points: 250 },
  ],
  subTeams: [
    'Aerodynamics',
    'Battery',
    'Chassis',
    'Distributed BMS',
    'Electronics',
    'Powertrain',
    'Suspension',
    'Software'
  ],
  contactEmail: "tamuformulaelectric@gmail.com",

  // --- Image Gallery ---
  images: [
    '/images/ev/showcase/25_Speed.jpg',
    '/images/ev/showcase/25_Side.jpg',
    '/images/ev/showcase/25_Aero.jpg',
    '/images/ev/showcase/25-comp-back.jpg',
    '/images/ev/showcase/25-93.jpg',
    '/images/ev/showcase/24-lighting.jpg'
  ],

  // --- Team Legacy / History ---
  history: [
    {
      year: '2024-2025',
      achievement: 'Top 5 in Business & Strong Design Finish',
      details: 'The team secured a 5th place finish in the business presentation and tied for 21st in the highly competitive design event.',
      carImage: '/images/ev/showcase/history/25.jpg'
    },
    {
      year: '2023-2024',
      achievement: 'First Place Autocross Win & Dynamic Debut',
      details: 'Secured a 1st place victory at the UT Arlington Autocross event and successfully passed technical inspection to race in all dynamic events for the first time.',
      carImage: '/images/ev/showcase/history/24.jpg'
    },
    {
      year: '2022-2023',
      achievement: 'Pioneered Core Vehicle Technologies',
      details: 'Developed foundational capabilities in carbon fiber processes and cylindrical cell battery architecture, built around a steel spaceframe chassis.',
      carImage: '/images/ev/showcase/history/23.jpg'
    },
    {
      year: '2021-2022',
      achievement: 'Inaugural Year of the Formula Electric Team',
      details: 'The team was established, laying the groundwork for future electric vehicle development and competition.',
      carImage: '/images/ev/showcase/history/22.jpg'
    }
  ],
  instagramUrl: "https://www.instagram.com/tamuformulaelectric/",
  linktreeUrl: "https://linktr.ee/tamu_formulaelectric",
};

const FormulaElectricPage = () => {
  return (
    <ProgramPage
      title={pageData.title}
      tagline={pageData.tagline}
      description={pageData.description}
      mission={pageData.mission}
      subTeams={pageData.subTeams}
      competitionEvents={pageData.competitionEvents}
      contactEmail={pageData.contactEmail}
      images={pageData.images}
      history={pageData.history}
      instagramUrl={pageData.instagramUrl}
      linktreeUrl={pageData.linktreeUrl}
    />
  );
};

export default FormulaElectricPage;