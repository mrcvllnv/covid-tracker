import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import coronaImage from './images/image.png';

const App = () => {
  const [ data, setData ] = useState<any>({});
  const [ country, setCountry ] = useState<string>('');

  const handleCountryChange = async (country: string) => {
    fetchData(country).then(data => {
      setData(data);
      setCountry(country);
    });
  };

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19"/>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
