import axios from 'axios';

const url: string = 'https://covid19.mathdro.id/api';

export const fetchData = async (country?: string) => {
	let changeableUrl = url;

	if (country) {
		changeableUrl = `${url}/countries/${country}`
	}

	try {
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		return error;
	}
}

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);

		const modifiedData = data.map((dailyData: any) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));

		return modifiedData;
	} catch (error) {
		return error;
	}
}

export const fetchCountries = async () => {
	try {
		const { data: { countries } } = await axios.get(`${url}/countries`);
		
		return countries.map((country: any) => country.name);
	} catch (error) {
		return error;
	}
}