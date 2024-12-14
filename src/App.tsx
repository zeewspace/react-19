
import { EventCard, EventCardSkeleton } from './components/EventCard'
import { EventProps } from './types/Event';

const events: EventProps[] = [
  {
    category: "Conferencia",
    title: "Tech Summit 2024",
    description: "Un evento dedicado a las últimas tendencias en tecnología e innovación.",
    startDate: new Date("2024-03-15T09:00:00"),
    endDate: new Date("2024-03-15T17:00:00"),
    imageSrc: "https://www.eventbookings.com/wp-content/uploads/2018/03/event-ideas-for-party-eventbookings.jpg",
    slug: "tech-summit-2024",
    location: "Centro de Convenciones de Lima, Perú",
  },
  {
    category: "Workshop",
    title: "Taller de Diseño UX/UI",
    description: "Aprende los principios del diseño de experiencia de usuario y diseño de interfaces.",
    startDate: new Date("2024-04-10T10:00:00"),
    endDate: new Date("2024-04-10T14:00:00"),
    imageSrc: "https://www.eventbookings.com/wp-content/uploads/2018/03/event-ideas-for-party-eventbookings.jpg",
    slug: "ux-ui-workshop",
    location: "Coworking Space, Miraflores, Perú",
  },
  {
    category: "Webinar",
    title: "Introducción a la Inteligencia Artificial",
    description: "Un webinar gratuito para aprender los conceptos básicos de IA y sus aplicaciones.",
    startDate: new Date("2024-05-05T18:00:00"),
    endDate: new Date("2024-05-05T20:00:00"),
    imageSrc: "https://www.eventbookings.com/wp-content/uploads/2018/03/event-ideas-for-party-eventbookings.jpg",
    slug: "intro-ai-webinar",
    location: "Online",
  },
  {
    category: "Festival",
    title: "Festival de Innovación y Emprendimiento",
    description: "Celebra la creatividad y el espíritu emprendedor en este evento único.",
    startDate: new Date("2024-06-01T10:00:00"),
    endDate: new Date("2024-06-01T22:00:00"),
    imageSrc: "https://www.eventbookings.com/wp-content/uploads/2018/03/event-ideas-for-party-eventbookings.jpg",
    slug: "innovation-festival",
    location: "Parque de la Exposición, Lima, Perú",
  },
  {
    category: "Curso",
    title: "Desarrollo Web Full Stack",
    description: "Un curso intensivo de 6 semanas para aprender desarrollo web completo.",
    startDate: new Date("2024-07-01T09:00:00"),
    endDate: new Date("2024-08-12T17:00:00"),
    imageSrc: "https://www.eventbookings.com/wp-content/uploads/2018/03/event-ideas-for-party-eventbookings.jpg",
    slug: "fullstack-course",
    location: "Academia Online",
  },
];

function App() {

  return (
    <main className='max-w-7xl mx-auto px-2 pb-4'>
      <h1 className='text-4xl mb-4 mt-4'> Eventos </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {events.map((props, i) => (
          <EventCard 
            key={i}
            {...props}
          />
        ))}
        <EventCardSkeleton />
      </div>
    </main>
  )
}

export default App
