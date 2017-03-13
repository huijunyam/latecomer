import React from 'react';
import moment from 'moment';
import $ from 'jquery';
import fullCalendar from 'fullcalendar';
import { withRouter } from 'react-router';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar({
      events: this.props.filteredStudents,
      allDay: false,
      selectable: true,
      color: "#0191C8",
      eventClick: (student) => {
        if (student.url) {
            this.props.router.push(`/student/${student.id}`);
        }
      }
    });
  }

  componentWillUnmount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar('destroy');
  }

  render() {
    return (
      <div className="calendar-view" ref="calendar"></div>
    );
  }
}

export default withRouter(Calendar);
