import './index.css'
import './assets/fonts/Zen_Old_Mincho/ZenOldMincho-Regular.ttf'

function App() {
  return (
    <main className="p-12">
      <h1 className="text-4xl tracking-tight">
        Spencer Kingman - Professional Page
      </h1>
      <section className="mt-8 max-w-145">
        <h2 className="text-2xl mb-4">About Me</h2>
        <p className="mb-4 text-base">
          {
            'My primary professional experience is as a software engineer, and before that, a high school math teacher. For the past eight years, I have been a key contributor at '
          }
          <a
            href="https://www.niche.com"
            className="underline hover:text-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.niche.com
          </a>
          , a website that boasts tens of millions of users annually, and almost
          $100mil in annual revenue. Most of the projects presented below are
          adaptations of work I originally performed for Niche.
        </p>
      </section>
      <section className="mt-8 max-w-145">
        <h2 className="text-2xl mb-4">Portfolio</h2>
        <h3 className="text-xl mb-2">Contact Form Spam Filter</h3>
        <p>
          The Customer Support team was having a problem with our contact form.
          They were overwhelmed with an increasing volume of spam submissions.
          We were using Perimeter X, but they were still getting as many as 100
          messages per day. Many of these messages were nothing more than
          keyboard mashing. They asked me if I could create a filter to protect
          them from these type of submissions.
        </p>
        <p></p>
        <h3 className="text-xl mb-2">Dependency Triage (Vue)</h3>
        <h3 className="text-xl mb-2">JSON Layout Admin (Svelte)</h3>
        <h3 className="text-xl mb-2">Shared Linting Config (ESLint)</h3>
        <h3 className="text-xl mb-2">Fluxible to Redux Migration (Graphviz)</h3>
        <h3 className="text-xl mb-2">Design System (Rollup/Storybook)</h3>
      </section>
    </main>
  )
}

export default App
