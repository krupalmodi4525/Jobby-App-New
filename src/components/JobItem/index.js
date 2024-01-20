import './index.css'

import {Link} from 'react-router-dom'

import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'

const JobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails

  return (
    <li className="li-card">
      <Link to={`/jobs/${id}`} className="li-i">
        <div className="company-and-role-card">
          <img src={companyLogoUrl} alt="company logo" className="job-logo" />
          <div className="job-role-card">
            <h1 className="job-h1">{title}</h1>
            <div className="job-rating-card">
              <AiFillStar className="job-icon" />
              <p className="job-rating-p">{rating}</p>
            </div>
          </div>
        </div>
        <div className="job-item-other-details-card">
          <div className="job-item-location-and-type-card">
            <div className="job-item-location-card">
              <MdLocationOn className="job-item-location-icon" />
              <p className="job-item-location">{location}</p>
            </div>
            <div className="job-item-type-card">
              <BsBriefcaseFill className="job-item-type-icon" />
              <p className="job-item-type">{employmentType}</p>
            </div>
          </div>
          <p className="p">{packagePerAnnum}</p>
        </div>
        <hr width="100%" />
        <div className="job-item-description-card">
          <h1 className="job-item-description-h1">Description</h1>
          <p className="job-item-p">{jobDescription}</p>
        </div>
      </Link>
    </li>
  )
}

export default JobItem
