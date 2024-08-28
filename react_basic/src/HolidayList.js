import React, { useEffect, useState } from "react";
import './HolidayList.css';
import axios from 'axios';

const HolidayList = () => {
  const [holidays, setHolidays] = useState([]);

  const authToken = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjluZDJIeF93WVZhcEFwN1dyOGEyaldSV21lXzVISUxfT0VyRHhKSGV0ZkEiLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85ZmJkOGY4My03MzdiLTRiMGQtOWY4Mi04YWFmZmJmODYyYjEvIiwiaWF0IjoxNzI0ODI2Njg0LCJuYmYiOjE3MjQ4MjY2ODQsImV4cCI6MTcyNDgzMDU4NCwiYWlvIjoiRTJkZ1lPQjNQNk5uOW0zZUhZYjI2bG1KTE5VZkFBPT0iLCJhcHBfZGlzcGxheW5hbWUiOiJhenVpbnRvbmUtaHJtcy1kZXYtcmV2YW1wLXNwYSIsImFwcGlkIjoiZDM5ZDE3MTAtNzA2Yi00YTVlLWI2ZjMtY2E3YWMxMDA3NGE1IiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOWZiZDhmODMtNzM3Yi00YjBkLTlmODItOGFhZmZiZjg2MmIxLyIsImlkdHlwIjoiYXBwIiwib2lkIjoiZjdkZGZjMzYtZmIwNC00YWI5LWFmZWUtNzdlNGQwN2E1YWIzIiwicmgiOiIwLkFYSUFnNC05bjN0ekRVdWZnb3F2LV9oaXNRTUFBQUFBQUFBQXdBQUFBQUFBQUFEREFBQS4iLCJyb2xlcyI6WyJBcHBsaWNhdGlvbi5SZWFkV3JpdGUuQWxsIiwiR3JvdXAuUmVhZC5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIlVzZXIuUmVhZC5BbGwiLCJHcm91cE1lbWJlci5SZWFkLkFsbCIsIklkZW50aXR5UHJvdmlkZXIuUmVhZC5BbGwiXSwic3ViIjoiZjdkZGZjMzYtZmIwNC00YWI5LWFmZWUtNzdlNGQwN2E1YWIzIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkFTIiwidGlkIjoiOWZiZDhmODMtNzM3Yi00YjBkLTlmODItOGFhZmZiZjg2MmIxIiwidXRpIjoidFZQWlg2Rzd5VWFDVUdCSFppbU5BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiMDk5N2ExZDAtMGQxZC00YWNiLWI0MDgtZDVjYTczMTIxZTkwIl0sInhtc19pZHJlbCI6IjcgNCIsInhtc190Y2R0IjoxNDQ5NjU1MDg4fQ.EySUzlf4KWysDxp8S6NbvZfPqnubtw7bUNqnt0aCBM61PiOr92P_3fBQC0svadhMTxzm_Pss_DskSqpz1U9bPy4HjXO1iGLFs-0aruwiQMYO5o6G2ylnZvet2nFLHEzjIKPjl_YnEa-7eM4kX_eAW1eK2MLs6pQSipSUi5FDSW3Ur4bwDcxNIxP1gVe8Dy_1sEP1dswJ_98jIPTkJgNdf39zCPEGMKHeDqhDpMgw_qRFKSXfOrMk7fTSwVvD4x5XtAnq9QRfZBddk6puiFCefaELM0B2Lf1bg9BM6PEuabPEACSk8SrK-keCISddtrbXuuPGYppdFW49beAy5GbdDg'; // Replace with your auth token

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://azuintone-hrms-devapi-appsvc01.azurewebsites.net/api/employee/holiday/list', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const holidays = Array.isArray(response.data) ? response.data : Object.values(response.data);
      setHolidays(holidays);
    } catch (error) {
      console.error(error);
    }
    console.log(holidays)
  };
  fetchData();
}, [authToken]);

  return (
    <>
      <div className='heading'>
        <h1> HolidayList </h1>
      </div>
      <div className='div_bar'>
      <div className='Holiday-table'>
      <table>
        <thead>
          <tr>
            <th>Discription</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday) => (
            <tr key={holiday.holidayId}>
              <td>{holiday.holidayName}</td>
              <td>{holiday.holidayDate}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
    <div className='Holiday-table'>
      <table>
        <thead>
          <tr>
            <th>Discription</th>
            <th>Date</th>
          </tr>
        </thead>
        </table>
        </div>
      </div>
    </>
  );
};

export default HolidayList;