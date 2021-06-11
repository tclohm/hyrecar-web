import React, { useState, useEffect } from "react";

import Toggle from "../components/Toggle";
import Error from "../components/Error";
import BottomNavForCreation from "../components/BottomNavForCreation";

import useLocalStorage from "../hooks/useLocalStorage";
import info from "../data/cars";
import { types, transform } from "../data/types";
import years from "../data/years";
import amenities from "../data/amenities";

import { useHistory } from "react-router-dom";

const CarCreation = () => {

	const [input, setInput] = useState({ 
		make: "", 
		model: "",
		type: "", 
		year: 0, 
		vin: "", 
		ratePerDay: 55, 
		maxMilesPerDay: 100, 
		airConditioning: false,
		automaticEmergencyBrakes: false,
		forwardCollisionWarning: false,
		blindSpotWarning: false,
		automaticHighBeams: false,
		carPlay: false,
		rearCamera: false,
		USBCharging: false,
		keylessEntry: false,
		headupDisplay: false,
		heatedSeats: false,
		wifiHotSpot: false
	})

	// MARK: -- makes and models are being taken from public government data
	const [makes, setMakes] = useState([])
	const [models, setModels] = useState([])
	const [image, setImage] = useState('/carImage-0.jpg')
	const [cursor, setCursor] = useState(0)
	const [savedInput, setSavedInput] = useLocalStorage('savedAndExitedCar', input)
	const [savedPosition, setSavedPosition] = useLocalStorage('carFormPosition', cursor)

	// MARK: -- animation feedback
	const [animate, setAnimate] = useState(true)
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const history = useHistory()

	useEffect(() => {
		if (savedInput && savedInput.firstName !== "") { setInput(savedInput) }
		if (savedPosition && savedPosition !== 0) { setCursor(savedPosition) }
	}, [savedInput, savedPosition])

	useEffect(() => {
		const options = { method: 'get' }
		if (makes.length === 0) {
			const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
			fetch(url, options)
				.then(response => {
					return response.json()
				})
				.then(data => {
					if (data && data.Results) {
						const name = data.Results.map(obj => {
							return obj.MakeName.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
						})
						setMakes(name)
					}
				})
				.catch(err => {
					console.log(err)
				})
		}
	})

	useEffect(() => {
		const options = { method: 'get' }
		console.log("fire set model")
		if(input.make !== "") {
			const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${input.make}?format=json`
			fetch(url, options)
				.then(response => {
					return response.json()
				})
				.then(data => {
					if (data && data.Results) {
						const names = data.Results.map(obj => obj.Model_Name)
						setModels(names)
					}
				})
				.catch(err => {
					console.log(err)
				})
		}
		console.log(input)
	}, [input])

	// MARK:

	// MARK: -- input change
	const onChange = (event) => {
		event.preventDefault()
		if (animate) { setAnimate(false) }
		if (error) { setError(false); setErrorMessage(''); }
		setInput({...input, [event.target.name]: event.target.value})
	}

	const pick = (event) => {
		setInput({...input, [event.target.name]: event.target.value })
	}

	const toggle = (name, active) => {
		setInput({...input, [name]: !active})
	}

	const changeImage = ({ target }) => {
		const reader = new FileReader()
		reader.onload = function() {
			setImage(reader.result)
		}
		reader.readAsDataURL(target.files[0])
	}

	// MARK: -- navigate questions
	const next = async () => {
		const obj = info[cursor]
		if (obj.name  !== "photo" && obj.name !== "amenities") {
			const valid = await obj.schema.validate({ [obj.name]: input[obj.name] })
			.then(res => res)
			.catch(err => err)
			if (valid.name === undefined) {
				if (input[info[cursor + 1].name] === "") { setAnimate(true) }
				if (cursor < info.length - 1) { setCursor(cursor + 1) }
				if (error === true) { setError(false) }
			} else {
				console.log("error", valid.errors[0])
				setErrorMessage(valid.errors[0])
				setError(true)
			}
		}
		else {
			if (input[info[cursor + 1].name] === "") { setAnimate(true) }
			if (cursor < info.length - 1) { setCursor(cursor + 1) }
			if (error === true) { setError(false) }
		}
	}

	const back = () => {
		if (cursor > 0) setCursor(cursor - 1)
		if (animate) { setAnimate(false) }
	}

	// MARK: -- exit
	const saveAndExit = () => {
		setSavedInput(input)
		setSavedPosition(cursor)
		history.push('/')
	}

	// MARK: -- clear storate and send data to the server
	const submit = () => {
		window.localStorage.removeItem('savedAndExitedProfile')
		window.localStorage.removeItem('formPosition')
	}

	const increase = () => {
		const el = document.getElementById('number')
		el.value = String(Number(el.value) + 5)
		setInput({...input, [el.name]: Number(el.value)})
	}

	const decrease = () => {
		const el = document.getElementById('number')
		el.value = String(Number(el.value) - 5)
		setInput({...input, [el.name]: Number(el.value)})
	}

	const renderSwitchQuestion = (name) => {
		switch (name) {
			case "year":
				return <p className="md:text-white">{info[cursor].question} {input.make} {input.model}?</p>
			case "model":
				return <p className="md:text-white">{info[cursor].question} {input.make}?</p>
			default:
				return <p className="md:text-white">{info[cursor].question}</p>
		}
	}

	const renderSwitchAnswer = (name) => {
		switch (name) {
			case "make":
				return <div className="flex flex-col md:h-full h-96 md:w-full w-96 overflow-y-scroll">
						{makes.map((make, index) => (
							<button 
								key={index} 
								name="make"
								value={make}
								onClick={(e) => pick(e)}
								className="border rounded my-1 py-2 md:mx-20 focus:outline-none focus:border-black">
							{make}
							</button>
						))}
					</div>			
			case "model":
				return <div className="flex flex-col md:h-full h-96 md:w-full w-96 overflow-y-scroll">
						{models.map((model, index) => (
							<button 
								key={index} 
								name="model"
								value={model}
								onClick={(e) => pick(e)}
								className="border rounded my-1 py-2 md:mx-20 focus:outline-none focus:border-black">
							{model}
							</button>
						))}
					</div>
			case "type":
				return <div className="flex flex-col md:h-full h-96 md:w-full w-96 overflow-y-scroll">
						{types.map((type, index) => (
							<button 
								key={index} 
								name="type"
								value={type}
								onClick={(e) => pick(e)}
								className="border rounded my-1 py-2 md:mx-20 focus:outline-none focus:border-black">
							{transform(type)}
							</button>
						))}
					</div>
			case "year":
				return <div className="flex flex-col md:h-full h-96 md:w-full w-96 overflow-y-scroll">
						{years.map((year, index) => (
							<button 
								key={index} 
								name="year"
								value={year}
								onClick={(e) => pick(e)}
								className="border rounded my-1 py-2 md:mx-20 focus:outline-none focus:border-black">
							{year}
							</button>
						))}
					</div>
			case "ratePerDay":
				return <div className="flex justify-center items-center md:mt-0 mt-4">
						<button 
						onClick={decrease}
						className="border rounded-full h-8 w-8 mx-2">-</button>
						<input 
							id="number"
							name={info[cursor].name} 
							value={input[info[cursor].name]}
							type="text"
							className="bg-gray-200 rounded p-4 md:w-1/2 focus:outline-none active:ring focus:ring focus:ring-gray-300"
							onChange={(e) => onChange(e)} />
						<button 
						onClick={increase}
						className="border rounded-full h-8 w-8 mx-2">+</button>
					</div>
			case "maxMilesPerDay":
				return <div className="flex justify-center items-center md:mt-0 mt-4">
						<button 
						onClick={decrease}
						className="border rounded-full h-8 w-8 mx-2">-</button>
						<input 
							id="number"
							name={info[cursor].name} 
							value={input[info[cursor].name]}
							type="text"
							className="bg-gray-200 rounded p-4 md:w-1/2 focus:outline-none active:ring focus:ring focus:ring-gray-300"
							onChange={(e) => onChange(e)} />
						<button 
						onClick={increase}
						className="border rounded-full h-8 w-8 mx-2">+</button>
					</div>
			case "amenities":
				return <div className="grid grid-cols-2 md:h-full h-96 md:w-full w-96 overflow-y-scroll focus:outline-none focus:border-black" name="amenities" multiple>
						{amenities.map((object, index) => (
							<Toggle 
								key={index} 
								name={Object.values(object)[0]}
								toggle={toggle}
							>
							{Object.keys(object)[0]}
							</Toggle>
						))}
					</div>
			case "photo":
				return <div className="flex flex-col">
						<div className="p-8 mb-4">
							<img 
								className="md:h-48 md:w-48 h-40 w-40"
								src={image} 
								alt={name} />
						</div>
						<input 
							type="file" 
							name={name} 
							accept="image/png, image/jpeg" 
							onChange={(event) => changeImage(event)} />
						</div>
			default:
				return <input
						name={info[cursor].name} 
						value={input[info[cursor].name]}
						type="text"
						className="bg-gray-200 rounded p-4 md:mt-0 mt-4 md:w-1/2 focus:outline-none active:ring focus:ring focus:ring-gray-300"
						onChange={(e) => onChange(e)} />
		}
	}

	return (
		<section className="relative w-full h-screen md:flex-row md:items-stretch md:justify-start flex flex-col items-center justify-center">
			<div className="absolute right-10 top-5 z-40 flex justify-between w-48">
				<button className="rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light">Help</button>
				<button className="rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light" 
				onClick={saveAndExit}>Save and exit</button>	
			</div>
			{error ?
				<>
					<p className="h-8 text-red-500 md:text-base text-xs absolute z-50 right-16 top-16">{errorMessage}</p>
					<Error className="h-8 w-8 text-red-500 absolute z-50 right-5 top-14" /> 
				</>
			: 
			<></>}
			<div id="questions" className={info[cursor].className}>
				{renderSwitchQuestion(info[cursor].name)}
			</div>
			<div id="answers" className="md:w-1/2 flex justify-center items-center md:my-20">
				{renderSwitchAnswer(info[cursor].name)}
			</div>
			<BottomNavForCreation info={info} cursor={cursor} back={back} next={next} submit={submit} />
		</section>
	)
}

export default CarCreation