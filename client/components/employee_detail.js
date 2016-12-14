import React from 'react'

const EmployeeDetail = (props) => {
  return (
    <div className="thumbnail">
      <img src={props.employee.avatar} />
      <div>
        <h3>{props.employee.name}</h3>
      </div>
      <ul className="list-group">
        <li className="list-group-item">Phone: {props.employee.phone}</li>
        <li className="list-group-item">Email: {props.employee.email}</li>
      </ul>
    </div>
  )
}

export default EmployeeDetail
