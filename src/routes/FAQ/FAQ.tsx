import Section from '../../components/Section/Section'

function FAQ() {
  return (
    <Section>
      <h2 className="text-2xl mb-4">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            What technologies do you work with?
          </h3>
          <p className="text-base">
            I primarily work with JavaScript/TypeScript, React, Node.js, and
            various web technologies. I have experience with both frontend and
            backend development.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Are you available for freelance work?
          </h3>
          <p className="text-base">
            Please reach out through the contact page to discuss potential
            opportunities.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            How can I see more of your work?
          </h3>
          <p className="text-base">
            Check out the Portfolio section for examples of my projects and
            adaptations of work I've done professionally.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default FAQ
