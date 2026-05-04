import Home from './features/portfolio/pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolioData = {
  hero: {
    name: 'Ehdaa A.Salah ',
    role: 'Software Engineer',
    action: 'Contact Me',
  },
  about: {
    title: 'About me',
    text:
      'I build clean, responsive websites with a focus on simple layouts, readable code, and smooth user experiences. My background includes front-end development, UI design, and creating reusable React components.',
    resumeLabel: 'Download Resume',
    resumeHref: '/Angular.pdf',
  },
  contact: {
    email: 'abdullahehdaa@gmail.com',
    phone: '+201002987249',
  },
  socials: [
    { name: 'Facebook', href: 'https://facebook.com', icon: 'fa-brands fa-facebook-f' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'fa-brands fa-twitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'fa-brands fa-linkedin-in' },
    { name: 'GitHub', href: 'https://github.com', icon: 'fa-brands fa-github' },
  ],
}

export default function App() {
  return <Home portfolio={portfolioData} />
}
