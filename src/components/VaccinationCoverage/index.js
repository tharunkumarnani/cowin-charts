// Write your code here
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'

const VaccinationCoverage = props => {
  const {vacciCoverageDetails} = props
  const DataFormatter = num => {
    if (num > 1000) {
      return `${num / 1000}k`
    }
    return num
  }
  return (
    <ResponsiveContainer width={1000} height={300}>
      <BarChart data={vacciCoverageDetails}>
        <XAxis dataKey="vaccine_date" tick={{stroke: 'gray', strokeWidth: 0}} />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: 'red', strokeWidth: 0}}
        />
        <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="20%" />
        <Legend
          wrapperStyle={{padding: 20}}
          layout="horizontal"
          align="center"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
