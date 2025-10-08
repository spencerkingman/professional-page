import './Section.css'

function Section({
  children,
  marginOverrides = ''
}: {
  children: React.ReactNode
  marginOverrides?: string
}) {
  return (
    <section className={`section mt-8 mb-8 ${marginOverrides}`}>
      {children}
    </section>
  )
}

export default Section
