import React, { useEffect, useState } from 'react';

const url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=KEYHERE&steamids=76561197960435530";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      const result = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));

      if(!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, []);


  return <span>{data}</span>

}



export default App;
