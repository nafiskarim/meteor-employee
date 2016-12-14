import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Employees } from '../../imports/collections/employees'

const EmployeeList = (props) => {
  // props.employee is available here
  return (
    <div>
      <div className="employee-list">
        employee-list component
      </div>
    </div>
  )
}

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('employees')

  // return an object. whatever we return will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() }
}, EmployeeList)
