import React, {Component} from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Employees } from '../../imports/collections/employees'
import EmployeeDetail from './employee_detail'

const PER_PAGE = 10

class EmployeeList extends Component {

  render(){
    // props.employees => an array of employee objects
    return (
      <div>
        <div className="employee-list">
          { this.props.employees.map( employee => {
              return <EmployeeDetail key={employee._id} employee={employee} />
            })
          }
        </div>
        <button onClick={() => Meteor.subscribe('employees', 20)} className="btn btn-primary">Load More...</button>
      </div>
    )
  }
}

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('employees', PER_PAGE)

  // return an object. whatever we return will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() }
}, EmployeeList)
