import './index.css'

const FiltersGroup = props => {
  const {
    selectSalaryRange,
    salaryRange,
    employmentTypes,
    employmentTypesList,
    salaryRangesList,
    selectemploymentType,
  } = props

  const renderTypeOfEmployment = () => (
    <div>
      <h1 className="h1">Type of Employment</h1>
      <ul className="list-card">
        {employmentTypesList.map(eachItem => (
          <li key={eachItem.employmentTypeId} className="li">
            <input
              id={eachItem.employmentTypeId}
              type="checkbox"
              value={eachItem.employmentTypeId}
              checked={employmentTypes.includes(eachItem.employmentTypeId)}
              onChange={selectemploymentType}
            />
            <label className="label" htmlFor={eachItem.employmentTypeId}>
              {eachItem.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  const renderSalaryRange = () => (
    <div>
      <h1 className="h1">Salary Range</h1>
      <ul className="list-card">
        {salaryRangesList.map(eachItem => (
          <li key={eachItem.salaryRangeId} className="li">
            <input
              id={eachItem.salaryRangeId}
              type="radio"
              checked={salaryRange === eachItem.salaryRangeId}
              value={eachItem.salaryRangeId}
              onChange={selectSalaryRange}
            />
            <label className="label" htmlFor={eachItem.salaryRangeId}>
              {eachItem.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="main-card">
      {renderTypeOfEmployment()}
      <hr className="hr" />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup
