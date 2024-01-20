import './index.css'

import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'

const SimilarJobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = jobDetails

  return (
    <li className="similar-job-card">
      <div className="similar-job-company-log-role-card">
        <img
          className="similar-job-company-logo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="similar-job-role-card">
          <h1 className="similar-job-role-h1">{title}</h1>
          <div className="similar-job-rating-card">
            <AiFillStar className="similar-job-star-icon" />
            <p className="similar-job-rating-p">{rating}</p>
          </div>
        </div>
      </div>

      <div className="similar-job-description-card">
        <h1 className="similar-job-description-h1">Description</h1>
        <p className="similar-job-description-p">{jobDescription}</p>
      </div>
      <div className="similar-job-other-details-card">
        <div className="similar-job-location-and-type-card">
          <div className="similar-job-location-card">
            <MdLocationOn className="similar-job-location-icon" />
            <p className="similar-job-location-p">{location}</p>
          </div>
          <div className="similar-job-type-card">
            <BsBriefcaseFill className="similar-job-type-icon" />
            <p className="similar-job-type-p">{employmentType}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobItem
