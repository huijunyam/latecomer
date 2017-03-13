import React from 'react';
import { Link } from 'react-router';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  compare(a,b) {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  }

  filteredGraph() {
    let filteredDates = {};
    let array = [];
    for (let i = 0; i < this.props.students.length; i++) {
      while (this.props.students[i].dates.length > 0) {
        const date = this.props.students[i].dates.pop();
        if (filteredDates[date] !== undefined) {
          filteredDates[date] += 1;
        } else {
          filteredDates[date] = 1;
        }
      }
    }
    Object.keys(filteredDates).forEach(key => {
      array.push({ date: key, frequency: filteredDates[key] });
    });
    array = array.sort(this.compare);
    return array;
  }

  render() {
    return (
      <div className="graph-view">
          <LineChart width={980} height={500} data={this.filteredGraph()}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="date"/>
           <YAxis/>
           <Tooltip/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Legend />
           <Line type="monotone" dataKey="frequency" stroke="#8884d8" activeDot={{r: 8}}/>
          </LineChart>
      </div>
    );
  }
}

export default Graph;
