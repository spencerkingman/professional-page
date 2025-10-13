import PortfolioHeader from '../../components/PortfolioHeader/PortfolioHeader'
import Section from '../../components/Section/Section'
import Portfolio from '../Portfolio/Portfolio'
import './KeyboardSmashDetector.css'
import DemoSection from './DemoSection'

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
          below. These approaches practically eliminated spam submissions.
        </p>
      </Section>
      <DemoSection />
      <Section>
        <h3 className="text-xl font-semibold mb-4">Code</h3>
        <p className="pb-4">
          The demo is built with React, Typescript, and Tailwind. I used Claude
          to write the MVP. I have published the project to GitHub. The UI code
          is available{' '}
          <a
            href="https://github.com/spencerkingman/professional-page/blob/main/src/routes/KeyboardSmashDetector.tsx/KeyboardSmashDetector.tsx"
            className="hover:text-white active:text-gray-300 underline"
            target="_blank"
          >
            here
          </a>
          , and the logic is{' '}
          <a
            href="https://github.com/spencerkingman/professional-page/blob/main/src/routes/KeyboardSmashDetector.tsx/KeyboardSmashDetector.tsx"
            className="hover:text-white active:text-gray-300 underline"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </Section>
      <Section marginOverrides="mb-24">
        <h3 className="text-xl font-semibold mb-4">Notes</h3>
        <p className="pb-4">
          I made this implementation much more aggressive than the one we used
          in production. It is more fun to play with that way, and we don't have
          to worry about false positives here. You may notice that if you
          include vowels and spaces, it is much more difficult to detect
          keyboard smash.
        </p>
        <p className="pb-4">
          The production implementation also includes a rigorous unit test, with
          nearly 200 test cases.
        </p>
        <p>
          In production, ignored emails are logged. I wrote a Python script that
          pulls the logs, parses them, and sends a daily summary message to the
          Customer Support team. So far, out of thousands of emails, we have
          never had a false positive.
        </p>
      </Section>
      <Portfolio headerLevel={3} headerText="Other Projects" />
    </>
  )
}

export default KeyboardSmashDetector
