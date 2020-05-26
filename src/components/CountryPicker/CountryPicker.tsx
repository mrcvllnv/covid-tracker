import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }: any) => {
	const [ countries, setCountries] = useState([]);

	useEffect(() => {
		fetchCountries().then(data => setCountries(data));
	}, []);

	return (
    <FormControl className={styles.formControl}>
			<NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
				<option value="">Global</option>
				{countries.map((value, index) => {
					return <option key={index} value={value}>{value}</option>
				})}
			</NativeSelect>
		</FormControl>
	);
}

export default CountryPicker;