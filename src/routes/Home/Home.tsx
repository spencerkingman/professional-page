import Section from '../../components/Section/Section'
import Portfolio from '../Portfolio/Portfolio'

function Home() {
  return (
    <>
      <Section>
        <h2 className="text-2xl mb-4 tracking-tight">About Me</h2>
        <p className="mb-4 text-base">
          {
            'My primary professional experience is as a software engineer, and before that, a high school math teacher. For the past eight years, I have been a key contributor at '
          }
          <a
            href="https://www.niche.com"
            className="underline hover:text-white active:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.niche.com
          </a>
          , a website that boasts tens of millions of users annually, and almost
          $100mil in annual revenue. Most of the projects presented below are
          adaptations of work I originally performed for Niche.
        </p>
      </Section>
      <Portfolio />
    </>
  )
}

export default Home
