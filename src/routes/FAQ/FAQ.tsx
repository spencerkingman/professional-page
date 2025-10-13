import Section from '../../components/Section/Section'

function FAQ() {
  return (
    <Section>
      <h2 className="text-2xl mb-4 tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Where are you located?</h3>
          <p className="text-base">I live in Pittsburgh, PA.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Are you available for freelance work?
          </h3>
          <p className="text-base">
            Yes, I am open to freelance opportunities. Please reach out at{' '}
            <a
              href="mailto:spencerkingman@gmail.com"
              className="underline hover:text-white active:text-gray-300"
            >
              spencerkingman@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  )
}

export default FAQ
