// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

class CowinDashboard extends Component {
  state = {
    isLoading: true,
    lastSevenDetails: [],
    vacciByAge: [],
    vacciByGender: [],
    failurePage: false,
  }

  componentDidMount() {
    this.getCovidResults()
  }

  getCovidResults = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      const lastWeekDaysVaccination = data.last_7_days_vaccination
      const ageVaccination = data.vaccination_by_age
      const genderVaccination = data.vaccination_by_gender
      this.setState({
        lastSevenDetails: lastWeekDaysVaccination,
        vacciByAge: ageVaccination,
        vacciByGender: genderVaccination,
        isLoading: false,
        failurePage: false,
      })
    } else {
      this.setState({isLoading: false, failurePage: true})
    }
  }

  getSuccessView = () => {
    const {lastSevenDetails, vacciByAge, vacciByGender} = this.state
    return (
      <>
        <div className="inner-card">
          <h1 className="vacci">Vaccination Coverage</h1>
          <VaccinationCoverage vacciCoverageDetails={lastSevenDetails} />
        </div>
        <div className="inner-card">
          <h1 className="vacci">Vaccination By Gender</h1>
          <VaccinationByGender genderVacciDetails={vacciByGender} />
        </div>
        <div className="inner-card">
          <h1 className="vacci">Vaccination By Age</h1>
          <VaccinationByAge ageVacciDetails={vacciByAge} />
        </div>
      </>
    )
  }

  failurePage = () => {
    console.log('fail')
    return (
      <>
        <img
          alt="failure view"
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          className="failure-img"
        />
        <h1 className="failure-note">Something Went Wrong</h1>
      </>
    )
  }

  render() {
    const {isLoading, failurePage} = this.state
    const successFail = failurePage ? this.failurePage() : this.getSuccessView()
    return (
      <div className="bg-cont">
        <div className="logo-name">
          <img
            alt="website logo"
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          />
          <p className="name">Co-WIN</p>
        </div>
        <h1 className="heading">CoWIN Vaccination in India</h1>
        <div className="card">
          {isLoading && (
            <div data-testid="loader" className="loader-spanner">
              <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
            </div>
          )}
          {!isLoading && successFail}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
