import { Link, useLocation } from 'react-router'
import Section from '../../components/Section/Section'

function Portfolio({
  headerLevel = 2,
  headerText = 'Portfolio'
}: {
  headerLevel?: 2 | 3
  headerText?: string
}) {
  const location = useLocation()
  return (
    <Section>
      <nav>
        {headerLevel === 3 ? (
          <h3 className="text-xl mb-4 tracking-tight">{headerText}</h3>
        ) : (
          <h2 className="text-2xl mb-4 tracking-tight">{headerText}</h2>
        )}
        <ul className="list-circle list-inside space-y-2">
          {location.pathname !== '/portfolio/keyboard-smash-detector' && (
            <li>
              <Link
                className="w-64 p-2 pl-0 active:text-gray-300 active:drop-shadow-[6px_8px_1px_gray-200] underline hover:text-white"
                to="/portfolio/keyboard-smash-detector"
              >
                Keyboard Smash Detector
              </Link>
            </li>
          )}
          {location.pathname !== '/portfolio/professional-page' && (
            <li>
              <Link
                className="w-64 p-2 pl-0 active:text-gray-300 active:drop-shadow-[6px_8px_1px_gray-200] underline hover:text-white"
                to="/portfolio/professional-page"
              >
                Professional Page (this site)
              </Link>
            </li>
          )}
          <li>
            <span className="w-64 p-2 pl-0">...more to come.</span>
          </li>
          {/* <li>
            <a
              className="pointer-events-none w-64 p-2 pl-0 line-through decoration-2 hover:text-white"
              href="https://personal-page.spencerkingman.com"
            >
              Dependency Triage
            </a>
          </li>
          <li>
            <a
              className="pointer-events-none w-64 p-2 pl-0 line-through decoration-2 hover:text-white"
              href="https://professional.spencerkingman.com"
            >
              JSON Layout Admin (Svelte)
            </a>
          </li>
          <li>
            <a
              className="pointer-events-none w-64 p-2 pl-0 line-through decoration-2 hover:text-white"
              href="#"
            >
              Shared Linting Config (ESLint)
            </a>
          </li>
          <li>
            <a
              className="pointer-events-none w-64 p-2 pl-0 line-through decoration-2 hover:text-white"
              href="#"
            >
              Fluxible to Redux Migration (Graphviz)
            </a>
          </li>
          <li>
            <a
              className="pointer-events-none w-64 p-2 pl-0 line-through decoration-2 hover:text-white"
              href="#"
            >
              Design System (Rollup/Storybook)
            </a>
          </li> */}
        </ul>
      </nav>
    </Section>
  )
}

export default Portfolio
