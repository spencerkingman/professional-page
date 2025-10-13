import { useEffect, useState } from 'react'
import Section from '../../components/Section/Section'
import { isKeyboardSmash } from '../../utils/keyboard-smash-detector-utils'

const DemoSection = () => {
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
    <Section>
      <h3 className="text-xl font-semibold mb-4">Demo</h3>
      <p>
        Try typing some text into the input below to see if it is detected as a
        keyboard smash. This implementaiton will test for:
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
  )
}

export default DemoSection
