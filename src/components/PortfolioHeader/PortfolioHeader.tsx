import './PortfolioHeader.css'

const PortfolioHeader = ({ projectName }: { projectName: string }) => (
  <div className="portfolio-project__header-container">
    <span className="portfolio-project__down-arrow">↓</span>
    <h2 className="text-2xl tracking-tight portfolio-project__header">
      {projectName}
    </h2>
  </div>
)

export default PortfolioHeader
