import React, { useState, useEffect } from "react";

import Error from "../components/Error";
import BigInputImagePreview from "../components/BigInputImagePreview";
import SmallInputImagePreview from "../components/SmallInputImagePreview";
import BottomNavForCreation from "../components/BottomNavForCreation";

import useLocalStorage from "../hooks/useLocalStorage";

import makers from "../data/makers";
import info from "../data/cars";
import { schema } from "../validations/CarSchema";

import { useHistory } from "react-router-dom";

const inputLilScreenAnimate= "bg-gray-200 rounded p-4 mt-4 md:hidden focus:outline-none animate-fade-down"
const inputLilScreenNoAnimate = "bg-gray-200 rounded p-4 mt-4 md:hidden focus:outline-none active:ring focus:ring focus:ring-gray-300"

const inputBigScreenAnimate = "bg-gray-200 rounded p-4 w-1/2 focus:outline-none animate-fade-down" 
const inputBigScreenNoAnimate = "bg-gray-200 rounded p-4 w-1/2 focus:outline-none active:ring focus:ring focus:ring-gray-300"

const textAnimate = "md:text-white font-black animate-fade-down"
const textNoAnimate = "md:text-white font-black"

const CarCreation = () => {

	const [input, setInput] = useState({ make: "", model: "", year: "", vin: "", ratePerDay: "", maxMilesPerDay: "", airConditioning: "" })
	const [image, setImage] = useState('/carImage-0.jpg')
	const [cursor, setCursor] = useState(0)
	const [forward, setForward] = useState(true)
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
		console.log(input)
	}, [input])

	// MARK: -- input change
	const onChange = (event) => {
		event.preventDefault()
		if (animate) { setAnimate(false) }
		if (error) { setError(false); setErrorMessage(''); }
		setInput({...input, [event.target.name]: event.target.value})
	}

	const pickModel = (event) => {
		setInput({...input, [event.target.name]: event.target.value })
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
		const valid = await obj.schema.validate({ [obj.name]: input[obj.name] })
		.then(res => res)
		.catch(err => err)
		if (valid.name === undefined) {
			if (input[info[cursor + 1].name] === "") { setAnimate(true) }
			if (cursor < info.length - 1) { setCursor(cursor + 1) }
		} else {
			setErrorMessage(valid.errors[0])
			setError(true)
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

	return (
		<section className="relative w-full h-screen md:flex-row md:items-stretch md:justify-start flex flex-col items-center justify-center">
			<div className="absolute right-10 top-5 z-40 flex justify-between w-48">
				<button className="rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light">Help</button>
				<button className="rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light" 
				onClick={saveAndExit}>Save and exit</button>	
			</div>
			<div id="questions" className="md:w-1/2 bg-yellow-500 flex justify-center items-center">
				<p className="text-white">{info[cursor].question}</p>
			</div>
			<div id="answers" className="md:w-1/2 flex justify-center items-center md:my-20">
				<div className="flex flex-col md:h-full h-96 md:w-full w-96 overflow-y-scroll">
				{makers.map((make, index) => (
					<button className="border rounded my-1 py-2 md:mx-20 focus:outline-none focus:border-black">{make}</button>
				))}
				</div>
			</div>
			<BottomNavForCreation info={info} cursor={cursor} back={back} next={next} submit={submit} />
		</section>
	)
}

export default CarCreation