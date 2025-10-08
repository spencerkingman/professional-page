import PortfolioHeader from '../../components/PortfolioHeader/PortfolioHeader'
import Section from '../../components/Section/Section'
import Portfolio from '../Portfolio/Portfolio'
import './KeyboardSmashDetector.css'

const KeyboardSmashDetector = () => {
  return (
    <>
      <PortfolioHeader projectName="Keyboard Smash Detector" />
      <Section>
        <h3 className="text-xl font-semibold mb-4">Problem</h3>
        <p>
          The Customer Support team was having a problem with our contact form.
          They were overwhelmed with an increasing volume of spam submissions.
          We were using Perimeter X, but they were still getting as many as 100
          messages per day. Many of these messages were nothing more than
          keyboard mashing. They asked me if I could create a filter to protect
          them from these type of submissions (without using CAPTCHA, if
          possible).
        </p>
      </Section>
      <Section>
        <h3 className="text-xl font-semibold mb-4">Solution</h3>
        <p>
          The complete solution included a regex blacklist of common spam
          patterns, a honeypot field, and a keyboard mash detector, like the one
          below.
        </p>
      </Section>
      <Section>
        <h3 className="text-xl font-semibold mb-4">Demo</h3>
        <p>Demo section here.</p>
      </Section>
      <Section marginOverrides="mb-24">
        <h3 className="text-xl font-semibold mb-4">Notes</h3>
        <p>Notes here.</p>
      </Section>
      <Portfolio headerLevel={3} headerText="Other Projects" />
    </>
  )
}

export default KeyboardSmashDetector
