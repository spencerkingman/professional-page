import PortfolioHeader from '../../components/PortfolioHeader/PortfolioHeader'
import Section from '../../components/Section/Section'
import Portfolio from '../Portfolio/Portfolio'

const ProfessionalPage = () => {
  return (
    <>
      <PortfolioHeader projectName="Professional Page (This Site)" />
      <Section>
        <h3 className="text-xl font-semibold mb-4">Problem</h3>
        <p>
          After years of building out apps and platforms for my employer, I
          realized that I did not have a good way to showcase my work publicly.
        </p>
      </Section>
      <Section>
        <h3 className="text-xl font-semibold mb-4">Solution</h3>
        <p>
          This is a client-side rendered app built with Vite, TypeScript, React,
          and Tailwind. I am using React-Router for the routing, but only in
          "Declarative" mode. I am hosting the site with GitHub Pages on a
          custom domain. I used Claude to help stand it up quickly, and I am
          managing the code with ESLint, Prettier, Husky, and Vitest. I have a
          simple CI/CD pipeline using GitHub Actions.
        </p>
      </Section>
      <Section>
        <h3 className="text-xl font-semibold mb-4">Code</h3>
        <p className="pb-4">
          The code is available{' '}
          <a
            href="https://github.com/spencerkingman/professional-page/blob/main/"
            className="hover:text-white active:text-gray-300 underline"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </Section>
      <Portfolio headerLevel={3} headerText="Other Projects" />
    </>
  )
}

export default ProfessionalPage
