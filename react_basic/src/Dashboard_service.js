import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://azuintone-hrms-devapi-appsvc01.azurewebsites.net/api/dashboard/birthdays/annivarsaries');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default ApiComponent;