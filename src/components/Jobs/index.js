import './index.css'

import Header from '../Header'

import AllJobsSection from '../AllJobsSection'

const Jobs = () => (
  <>
    <Header />
    <div className="jobs-card">
      <div className="card">
        <AllJobsSection />
      </div>
    </div>
  </>
)

export default Jobs
