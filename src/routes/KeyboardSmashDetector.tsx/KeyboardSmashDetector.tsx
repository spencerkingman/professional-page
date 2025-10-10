import { useEffect, useState } from 'react'
import PortfolioHeader from '../../components/PortfolioHeader/PortfolioHeader'
import Section from '../../components/Section/Section'
import Portfolio from '../Portfolio/Portfolio'
import './KeyboardSmashDetector.css'
import { isKeyboardSmash } from '../../utils/keyboard-smash-detector-utils'

const KeyboardSmashDetector = () => {
  const [inputValue, setInputValue] = useState('')
  const [testResult, setTestResult] = useState<{
    isValid: boolean
    failureReason: string
  } | null>(null)

  useEffect(() => {
    const result = isKeyboardSmash(inputValue)
    setTestResult(result)
  }, [inputValue])

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
      <Section>
        <h3 className="text-xl font-semibold mb-4">Demo</h3>
        <p>
          Try typing some text into the input below to see if it is detected as
          a keyboard smash. This implementaiton will test for:
        </p>
        <ul className="list-disc list-inside p-4">
          <li className="">Excessive repeating characters</li>
          <li className="">Consecutive keyboard patterns (QWERTY)</li>
          <li className="">Single long words</li>
          <li className="">Only numbers</li>
          <li className="">Insufficient unique characters</li>
          <li className="">Invalid English digraphs</li>
          <li className="">Too many or too few vowels</li>
          <li className="">Random-looking character distribution</li>
        </ul>
        <div
          className={`border rounded px-2 py-4 w-full mt-4${testResult && !testResult.isValid ? ' border-red-600 bg-red-100' : ' border-green-600 bg-green-100'}`}
        >
          <div>
            <label
              htmlFor="keyboard-smash-input"
              className="font-sans font-semibold block mb-2 text-gray-800"
            >
              Keyboard Smash Test (Press ENTER to clear):
            </label>
            <div className="flex gap-2">
              <input
                id="keyboard-smash-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-gray-50 border font-sans border-gray-800 text-gray-800 rounded px-3 py-2 w-full focus:outline-2 focus:outline-gray-800 focus:-outline-offset-2"
                placeholder="Type something to test..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setInputValue('')
                }}
              />
              <button
                onClick={() => setInputValue('')}
                className="text-gray-100 font-sans self-stretch px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
              >
                Clear
              </button>
            </div>
          </div>

          <p
            className={`font-mono text-center pt-4 text-sm ${testResult && !testResult.isValid ? 'text-red-600' : 'text-green-600'}`}
          >
            {testResult
              ? testResult.isValid
                ? 'Valid'
                : `Invalid: ${testResult.failureReason}`
              : ''}
          </p>
        </div>
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
