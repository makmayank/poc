import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions'
const Forecast = () => {

	let [city, setCity] = useState('');
	let [unit, setUnit] = useState('imperial')
	let [responseObj, setResponseObj] = useState({});
	const uriEncodeCity = encodeURIComponent(city);

// Fetching from the Server
	function callServer(evt){
		evt.preventDefault();
		fetch("http://localhost:4000/")
		.then(res => res.text())
		.then(res => {
			 setResponseObj(res)
		})
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		});
	}

// Fetching from weather Froecast API
	function getForecast(evt) {
      // weather data fetch function will go here
      evt.preventDefault();
      fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodeCity}`, {
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
					"x-rapidapi-key": "ed74966a43msh26fa987f09d56f7p154111jsn8c04147c5bf3"
				}
			})
			.then(response => response.json())
			.then(response => {
			   setResponseObj(response)
			})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
		});
   }
   return (
       // JSX code will go here
       	<div>
			<h2>Weather Conditions</h2>
			<div>
				<Conditions responseObj={responseObj}/>
			</div>

			<form onSubmit={getForecast}>
				{/*
				<select id ="city" name="city" onChange={(e) => }>
					<option value="delhi">Delhi</option>
					<option value="mumbai">Mumbai</option>
					<option value="chennai">Chennai</option>
					<option value="kolkata">Kolkata</option>
				</select>
				*/
				}

				<input
					type="text"
					placeholder="Enter City"
					maxLength="50"
					value={city}
					id="citystr"
					name="citystr"
					onChange={(e) => setCity(e.target.value)}
				/>
				{/*
					<label>
						<input
							type="radio"
							name="units"
							checked = {unit==="imperial"}
							value = "imperial"
							onChange = {(e) => setUnit(e.target.value)}
						/>
						Fahrenheit
					</label>

				<label>
					<input
						type="radio"
						name="units"
						checked = {unit==="metric"}
						value = "metric"
						onChange = {(e) => setUnit(e.target.value)}
					/>
					Celcius
				</label>
						*/
				}
				<button type="submit">Get Forecast</button>

			</form>
			<div>
				<button onClick = {callServer}>Check Server !</button>
			</div>
       </div>
   )
}
export default Forecast;
