import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HolidayList() {
    const [holidayList, setHolidayList] = useState([]);

    useEffect(() => {
        axios.get('https://azuintone-hrms-devapi-appsvc01.azurewebsites.net/api/employee/holiday/list', {
            headers: {
                'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJub25jZSI6ImdvMkdFTS1LMmN1NDhhVFV1eFJiT0lWOU9oYVZZSXlWdWxRaHJTU1FlWG8iLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85ZmJkOGY4My03MzdiLTRiMGQtOWY4Mi04YWFmZmJmODYyYjEvIiwiaWF0IjoxNzI0MjIxNDI4LCJuYmYiOjE3MjQyMjE0MjgsImV4cCI6MTcyNDIyNTMyOCwiYWlvIjoiRTJkZ1lHQ1hFcGkrd3JINXg1VE1nREFXaHJRZkFBPT0iLCJhcHBfZGlzcGxheW5hbWUiOiJhenVpbnRvbmUtaHJtcy1kZXYtcmV2YW1wLXNwYSIsImFwcGlkIjoiZDM5ZDE3MTAtNzA2Yi00YTVlLWI2ZjMtY2E3YWMxMDA3NGE1IiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOWZiZDhmOGMtNzM3Yi00YjBkLTlmODItOGFhZmZiZjg2MmIxLyIsImlkdHlwIjoiYXBwIiwib2lkIjoiZjdkZGZjMzYtZmIwNC00YWI5LWFmZWUtNzdlNGQwN2E1YWIzIiwicmgiOiIwLkFYSUFnNC05bjN0ekRVdWZnb3F2LV9oaXNRTUFBQUFBQUFBQXdBQUFBQUFBQUFEREFBQS4iLCJyb2xlcyI6WyJBcHBsaWNhdGlvbi5SZWFkV3JpdGUuQWxsIiwiR3JvdXAuUmVhZC5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIlVzZXIuUmVhZC5BbGwiLCJHcm91cE1lbWJlci5SZWFkLkFsbCIsIklkZW50aXR5UHJvdmlkZXIuUmVhZC5BbGwiXSwic3ViIjoiZjdkZGZjMzYtZmIwNC00YWI5LWFmZWUtNzdlNGQwN2E1YWIzIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkFTIiwidGlkIjoiOWZiZDhmOGMtNzM3Yi00YjBkLTlmODItOGFhZmZiZjg2MmIxIiwidXRpIjoiNkp0ZURpU3dORWU0RFo2UWtkY09BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiMDk5N2ExZDAtMGQxZC00YWNiLWI0MDgtZDVjYTczMTIxZTkwIl0sInhtc19pZHJlbCI6IjcgMjYiLCJ4bXNfdGNkdCI6MTQ0OTY1NTA4OH0.Qa-kVYeI1H0rcmq8h5UwsO4nO3hHZC8EtsjmlMcyGp-h_IFuM2RuPslPDC3JDKIO8i0DPgvC4Y69Oy2Y49qrlTtx4dq-zt1La0UhR47NkAjn1VBTXDBE8ol2E2pNdC0WM-6VRz4d3tfaT0PQ0Q4Br7uqDIes8K5Vg3K29EH2C2STGjm1aPlc9BI1eioNeBFf8-zzidodZOdy1tkZkF1AXV3BZPyFyM8pnF-6qhye9FHx-Mnn4vpKECxxe-ZjslPzdnivkN-VG9Z-opv9Acn_ybXqsrvG0f0Dc4nBUw2VuGChqBjpOYNg2r6jddD4-TAdrIslrQrD2Z-6k4_b1zR5-g',
                },
            })
            .then(response => response.json())
            .then(json => {
                setHolidayList(json);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Holiday List</h1>
            {holidayList.map((holiday) => (
                <div key={holiday.id}>
                    <h2>{holiday.name}</h2>
                    <p>{holiday.date}</p>
                </div>
            ))}
        </div>
    );
}

export default HolidayList;