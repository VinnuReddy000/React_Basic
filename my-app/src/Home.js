import React from 'react';
import { useState } from 'react';
import './Home.css';
import HolidayList from './Services/Holidaylist';

const Home = () => {
  const [employees] = useState([]);
  const Holidays = HolidayList();

  return (
    <>
      <div className='heading'>
        <h1> Dashboard </h1>
        <button>Click me!</button>
      </div>
      <div className='content'>
        <h3> CAKE festival </h3>
        <p>Start Date: 07.06.2024 - 08.00 AM - End Date: 11.09.2024 - 08.00 AM
          What does Cake Day mean?
          The term “cake day” refers to an anniversary celebration – the term is most commonly used to describe the day of the year that a Reddit user opened his or her account. Although many attribute the origin of this term to the Reddit community,
          other platforms have begun to use it, such as Imgur</p>
      </div>
      <div className='div_bar'>
        <div className="employee-table">
          <table>
            <thead>
              <tr>
                <th>Emp ID</th>
                <th>Emp Name</th>
                <th>DOJ</th>
              </tr>
            </thead>
            <tbody>
            {employees.map(emp =>
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.employee_name}</td>
                  <td>{emp.employee_age}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className='workanniversary'>
          <table>
            <thead>
              <th>Holiday ID</th>
              <th>Holiday Name</th>
              <th>Holiday Date</th>
            </thead>
            <tbody>
            {Holidays.map((Holiday,index) => (
              <tr key={index}>
                <td>{Holiday.HolidayId}</td>
                <td>{Holiday.HolidayName}</td>
                <td>{Holiday.HolidayDate}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;