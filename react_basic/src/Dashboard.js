import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import moment from 'moment';

const API_URL = 'https://azuintone-hrms-devapi-appsvc01.azurewebsites.net/api/dashboard/birthdays/annivarsaries';
const AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjluZDJIeF93WVZhcEFwN1dyOGEyaldSV21lXzVISUxfT0VyRHhKSGV0ZkEiLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85ZmJkOGY4My03MzdiLTRiMGQtOWY4Mi04YWFmZmJmODYyYjEvIiwiaWF0IjoxNzI0ODI2Njg0LCJuYmYiOjE3MjQ4MjY2ODQsImV4cCI6MTcyNDgzMDU4NCwiYWlvIjoiRTJkZ1lPQjNQNk5uOW0zZUhZYjI2bG1KTE5VZkFBPT0iLCJhcHBfZGlzcGxheW5hbWUiOiJhenVpbnRvbmUtaHJtcy1kZXYtcmV2YW1wLXNwYSIsImFwcGlkIjoiZDM5ZDE3MTAtNzA2Yi00YTVlLWI2ZjMtY2E3YWMxMDA3NGE1IiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOWZiZDhmODMtNzM3Yi00YjBkLTlmODItOGFhZmZiZjg2MmIxLyIsImlkdHlwIjoiYXBwIiwib2lkIjoiZjdkZGZjMzYtZmIwNC00YWI5LWFmZWUtNzdlNGQwN2E1YWIzIiwicmgiOiIwLkFYSUFnNC05bjN0ekRVdWZnb3F2LV9oaXNRTUFBQUFBQUFBQXdBQUFBQUFBQUFEREFBQS4iLCJyb2xlcyI6WyJBcHBsaWNhdGlvbi5SZWFkV3JpdGUuQWxsIiwiR3JvdXAuUmVhZC5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIlVzZXIuUmVhZC5BbGwiLCJHcm91cE1lbWJlci5SZWFkLkFsbCIsIklkZW50aXR5UHJvdmlkZXIuUmVhZC5BbGwiXSwic3ViIjoiZjdkZGZjMzYtZmIwNC00YWI5LWFmZWUtNzdlNGQwN2E1YWIzIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkFTIiwidGlkIjoiOWZiZDhmODMtNzM3Yi00YjBkLTlmODItOGFhZmZiZjg2MmIxIiwidXRpIjoidFZQWlg2Rzd5VWFDVUdCSFppbU5BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiMDk5N2ExZDAtMGQxZC00YWNiLWI0MDgtZDVjYTczMTIxZTkwIl0sInhtc19pZHJlbCI6IjcgNCIsInhtc190Y2R0IjoxNDQ5NjU1MDg4fQ.EySUzlf4KWysDxp8S6NbvZfPqnubtw7bUNqnt0aCBM61PiOr92P_3fBQC0svadhMTxzm_Pss_DskSqpz1U9bPy4HjXO1iGLFs-0aruwiQMYO5o6G2ylnZvet2nFLHEzjIKPjl_YnEa-7eM4kX_eAW1eK2MLs6pQSipSUi5FDSW3Ur4bwDcxNIxP1gVe8Dy_1sEP1dswJ_98jIPTkJgNdf39zCPEGMKHeDqhDpMgw_qRFKSXfOrMk7fTSwVvD4x5XtAnq9QRfZBddk6puiFCefaELM0B2Lf1bg9BM6PEuabPEACSk8SrK-keCISddtrbXuuPGYppdFW49beAy5GbdDg'; // Replace with your actual authentication token

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
      }
    };
    fetchData();
  }, [data]);

  return (
    <>
      <div className='heading'>
        <h1> Dashboard </h1>
      </div>
      <div className='content'>
        <h3> CAKE festival </h3>
        <p>Start Date: 07.06.2024 - 08.00 AM - End Date: 11.09.2024 - 08.00 AM
          What does Cake Day mean?
          The term “cake day” refers to an anniversary celebration ....</p>
        <a href="Announcement">Read more..</a>
      </div>
      <div className='div_bar'>
      <div className='employee-table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
        {data && data.birthday && data.birthday.data && (
            data.birthday.data.map((emp) => (
            <tr key={emp.employeeId}>
              <td>{emp.employeeName}</td>
              <td>{emp.shiftFormattedValue}</td>
              <td>{moment(emp.dateOfBirth).format('DD-MM-YYYY')}</td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
    <div className='workanniversary'>
          <table>
            <thead>
              <th>Name</th>
              <th>Shift</th>
              <th>DOJ</th>
              <th>Years</th>
            </thead>
            <tbody>
        {data && data.anniversary && data.anniversary.data && (
            data.anniversary.data.map((anniversary) => (
            <tr key={anniversary.employeeId}>
              <td>{anniversary.employeeName}</td>
              <td>{anniversary.shiftFormattedValue}</td>
              <td>{moment(anniversary.dateOfJoining).format('DD-MM-YYYY')}</td>
              <td>{anniversary.annivarsaryYears}</td>
            </tr>
          )))}
        </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;