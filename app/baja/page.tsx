import ProgramPage from "../components/ProgramPage";

const pageData = {
  title: "Baja SAE",
  tagline: "Engineered to conquer the toughest terrain.",
  description: "The Baja SAE builds vehicles that can withstand the most punishing conditions imaginable. Each year, we design and fabricate an all-terrain racing vehicle from the ground up. Our engineers output robust chassis, capable suspension, and optimized powertrain designs. The result is an unstopable vehicle that showcases the excellence of Aggie engineers.",
  
  mission: "Baja provides a path for self-motivated engineering students to extend their learning in a practical manner. This unique experience enables them to excel in their future careers.",
  competitionEvents: [
    { name: 'Endurance', points: 400 },
    { name: 'Design Presentation', points: 150 },
    { name: 'Cost Report', points: 100 },
    { name: 'Acceleration', points: 75 },
    { name: 'Maneuverability', points: 75 },
    { name: 'Hill Climb / Sled Pull', points: 75 },
    { name: 'Suspension', points: 75 },
    { name: 'Sales Presentation', points: 50 },
  ],
  contactEmail: "baja.sae.tamu@gmail.com",
  instagramUrl: "https://www.instagram.com/tamu.baja.sae/",
  linktreeUrl: "https://linktr.ee/tamu.baja.sae",
  subTeams: [
    'Electrical',
    'Chassis',
    'Powertrain',
    'Suspension',
  ],
  images: [
    '/images/baja/showcase/baja-25-23.jpg',
    '/images/baja/showcase/baja-good.jpg',
    '/images/baja/showcase/baja-drift.jpg',
    '/images/baja/showcase/baja-campus.jpg',
    '/images/baja/showcase/baja-comp-dirt.jpg',
    '/images/baja/showcase/baja-tuff.jpg',
  ],
  history: [
    {
      year: '2024-2025',
      achievement: 'First podium placement in program history',
      details: '31st overall in Maryland with an impressive 3rd place in the acceleration event marking the first podium placement.',
      carImage: '/images/baja/showcase/history/25.jpg'
    },
    {
      year: '2023-2024',
      achievement: 'Outstanding performance in design presentation',
      details: '18th overall in Williamsport with strong scores including 4th place in the design event.',
      carImage: '/images/baja/showcase/history/24.jpeg'
    },
    {
      year: '2022-2023',
      achievement: 'Top 40 in all three static events',
      details: 'Placed 44th overall in Oregon with solid performance in the design, cost, and sales events',
      carImage: '/images/baja/showcase/history/23.jpeg'
    },
    {
      year: '2021-2022',
      achievement: 'Returning strong to standard competition',
      details: '27th overall in Tennessee which was aided by high achievement in static events',
      carImage: '/images/baja/showcase/history/22.jpg'
    },
    {
      year: '2020-2021',
      achievement: 'Top 10 Overall in Virtual & Validation Events',
      details: 'Placed 8th overall out of 156 teams in the Virtual Knowledge Event and 3rd among all non-capstone projects at Texas A&M.',
      carImage: '/images/baja/showcase/history/21.jpg'
    },
    {
      year: '2019-2020',
      achievement: 'Pioneered 4WD Design & Top 20 Virtual Finish',
      details: 'Amidst the COVID-19 pandemic, the team pivoted to a 4WD vehicle and secured a team-record 16th place in the virtual competition.',
      carImage: '/images/baja/showcase/history/20.png'
    },
    {
      year: '2018-2019',
      achievement: 'Strong Showing in Static Events',
      details: 'Placed 52nd overall in California, with impressive results including 9th in Cost Report and 16th in Sales Presentation.',
      carImage: '/images/baja/showcase/history/19.jpg'
    },
    {
      year: '2017-2018',
      achievement: 'Inaugural Year Success',
      details: "In its first-ever competition, the team placed 33rd overall in Kansas, highlighted by a 7th place finish in the Maneuverability event.",
      carImage: '/images/baja/showcase/history/18.jpeg'
    }
  ]
};


const BajaPage = () => {
  return (
    <ProgramPage
      title={pageData.title}
      tagline={pageData.tagline}
      description={pageData.description}
      images={pageData.images}
      history={pageData.history}
      mission={pageData.mission}
      competitionEvents={pageData.competitionEvents}
      contactEmail={pageData.contactEmail}
      subTeams={pageData.subTeams}
      instagramUrl={pageData.instagramUrl}
      linktreeUrl={pageData.linktreeUrl}
    />
  );
};

export default BajaPage;