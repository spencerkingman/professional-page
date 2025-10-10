import Section from '../../components/Section/Section'

function Contact() {
  return (
    <Section>
      <h2 className="text-2xl mb-4 ">Contact</h2>
      <div className="space-y-4">
        <div>
          <ul className="list-circle list-inside space-y-2">
            <li>
              <a
                href="mailto:spencerkingman@gmail.com"
                className="hover:text-white active:text-gray-300"
              >
                spencerkingman@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/spencerkingman"
                className="hover:text-white active:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/spencerkingman-niche
              </a>
            </li>
            <li>
              <a
                href="https://github.com/spencerkingman"
                className="hover:text-white active:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/spencerkingman
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/spencer-kingman-4776b5126"
                className="hover:text-white active:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/spencer-kingman-4776b5126
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Contact
