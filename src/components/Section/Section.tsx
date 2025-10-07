import './Section.css'

function Section({ children }: { children: React.ReactNode }) {
  return <section className="section">{children}</section>
}

export default Section
