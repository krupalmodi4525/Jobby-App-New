import './index.css'

import {Link} from 'react-router-dom'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="main-card">
      <div className="card">
        <h1 className="h1">Find The Job That Fits Your Life</h1>
        <p className="p">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential
        </p>
        <Link to="/jobs">
          <button type="button" className="b">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
