// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const data = [
  {
    count: 482792375,
    language: 'Telugu',
  },
  {
    count: 206837094,
    language: 'Hindi',
  },
  {
    count: 160391841,
    language: 'English',
  },
]

const VaccinationByGender = props => {
  const {genderVacciDetails} = props
  console.log(genderVacciDetails)
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          verticalAlign="bottom"
          iconType="circle"
          layout="horizontal"
          align="center"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByGender
