import Section from '../../components/Section/Section'

function Contact() {
  return (
    <Section>
      <h2 className="text-2xl mb-4">Contact</h2>
      <div className="space-y-4">
        <p className="text-base">
          I'm always interested in hearing about new opportunities and interesting projects.
        </p>
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:spencer@example.com" 
                className="underline hover:text-white active:text-gray-300"
              >
                spencer@example.com
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a 
                href="https://linkedin.com/in/spencerkingman" 
                className="underline hover:text-white active:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/spencerkingman
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a 
                href="https://github.com/spencerkingman" 
                className="underline hover:text-white active:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/spencerkingman
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Contact
