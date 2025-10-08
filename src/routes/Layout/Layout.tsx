import { NavLink, Outlet, useLocation } from 'react-router'
import './Layout.css'

const Layout = () => {
  const location = useLocation()
  console.log('🚀 ~ Layout ~ location:', location)
  return (
    <div className="layout-container">
      <header className="z-20 p-4 pb-0 sm:p-12 sm:pb-0">
        <h1 className="text-4xl tracking-tight">
          {'Spencer Kingman - Professional\u00A0Page'}
        </h1>
        <nav>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              const baseClass = 'nav-link'
              if (!isActive) return baseClass

              // On portfolio index page
              if (location.pathname === '/portfolio') {
                return `${baseClass} active`
              }

              // On portfolio project page
              return `${baseClass} nav-link--portfolio-project-active`
            }}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink className="nav-link" to="/faq">
            F.A.Q.
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </nav>
      </header>
      <main className="main-content pl-4 pr-4 pb-4 sm:pl-12 sm:pr-12 sm:pb-12">
        <Outlet />
      </main>
      <footer className="footer text-center p-4 pb-0 sm:p-12 sm:pb-0">
        <p>
          &copy; {new Date().getFullYear()} Spencer Kingman. All rights
          reserved.
        </p>
      </footer>
    </div>
  )
}

export default Layout
