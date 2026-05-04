import Home from './features/portfolio/pages/Home'

const portfolioData = {
  hero: {
    name: 'Ehdaa A.Salah ',
    role: 'Software Engineer',
    action: 'Contact Me',
  },
  about: {
    title: 'About me',
    text:
      'I build clean, responsive websites with a focus on simple layouts, readable code, and smooth user experiences. My background includes front-end development, UI design, and creating reusable React components Flutter developer with over two years of experience in building cross-platform mobile applications using the Flutter framework. Proficient in AI productivity tools (ChatGPT, Replit Notion AI, Trae, Cline) to enhance development processes and optimize workflows. Strong problem-solving, time management, and communication skills, with a proven ability to deliver high-quality projects on time. Motivated to contribute to team success through innovation, technical expertise, and a collaborative approach.',
    resumeLabel: 'Download Resume',
    resumeHref: '/Angular.pdf',
  },
  contact: {
    email: 'abdullahehdaa@gmail.com',
    phone: '+201002987249',
  },
  socials: [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'fa-brands fa-linkedin-in' },
    { name: 'Facebook', href: 'https://facebook.com', icon: 'fa-brands fa-facebook-f' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'fa-brands fa-twitter' },
    
  ],
}

export default function App() {
  return <Home portfolio={portfolioData} />
}
