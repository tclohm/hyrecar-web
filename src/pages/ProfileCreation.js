import React, { useState, useEffect } from "react";
import Error from "../components/Error";
import useLocalStorage from "../hooks/useLocalStorage";
import { schema, firstName, lastName, license } from "../validations/ProfileSchema";
import { useHistory } from "react-router-dom";

const inputLilScreenAnimate= "bg-gray-200 rounded p-4 md:hidden focus:outline-none animate-fade-down"
const inputLilScreenNoAnimate = "bg-gray-200 rounded p-4 md:hidden focus:outline-none"

const inputBigScreenAnimate = "bg-gray-200 rounded p-4 w-1/2 focus:outline-none animate-fade-down" 
const inputBigScreenNoAnimate = "bg-gray-200 rounded p-4 w-1/2 focus:outline-none"

const textAnimate = "md:text-white font-black md:text-2xl animate-fade-down"
const textNoAnimate = "md:text-white font-black md:text-2xl"

const noForward = "rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light mr-9 cursor-not-allowed opacity-50"
const forward = "rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light mr-9"

const info = [
	{ 
		id: 0, 
		className: "md:w-1/2 md:bg-green-200 md:flex md:items-center md:justify-center md:mb-0 mb-44", 
		name: "firstName", 
		question: "What's your first name?", 
		schema: firstName 
	},
	{ 
		id: 1, 
		className: "md:w-1/2 md:bg-blue-200 md:flex md:items-center md:justify-center md:mb-0 mb-44", 
		name: "lastName", 
		question: "What's your last name?", 
		schema: lastName 
	},
	{ 
		id: 2, 
		className: "md:w-1/2 md:bg-yellow-200 md:flex md:items-center md:justify-center md:mb-0 mb-44", 
		name: "license", 
		question: "What's your Driver's License number?", 
		schema: license 
	},
	{ 
		id: 3, 
		className: "md:w-1/2 md:bg-indigo-200 md:flex md:items-center md:justify-center md:mb-0 mb-44", 
		name: "photo", 
		question: "Add a Profile Photo", 
		schema: null 
	}
]

const ProfileCreation = () => {

	const [input, setInput] = useState({ firstName: "", lastName:  "", license: "" })
	const [cursor, setCursor] = useState(0)
	const [savedInput, setSavedInput] = useLocalStorage('savedAndExitedProfile', input)
	const [savedPosition, setSavedPosition] = useLocalStorage('formPosition', cursor)

	// MARK: -- animation feedback
	const [animate, setAnimate] = useState(true)
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const history = useHistory()

	useEffect(() => {
		if (savedInput && savedInput.firstName !== "") { setInput(savedInput) }
		if (savedPosition && savedPosition !== 0) { setCursor(savedPosition) }
	}, [savedInput, savedPosition])

	// MARK: -- input change
	const onChange = (event) => {
		event.preventDefault()
		if (animate) { setAnimate(false) }
		if (error) { setError(false); setErrorMessage(''); }
		setInput({...input, [event.target.name]: event.target.value})
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
			<div className={info[cursor].className}>
				<p className={animate ? textAnimate : textNoAnimate}>{info[cursor].question}</p>
				{cursor < 3 ?
				<>
					<input
						name={info[cursor].name} 
						value={input[info[cursor].name]}
						type="text"
						className={animate ? inputLilScreenAnimate : inputLilScreenNoAnimate}
						onChange={(e) => onChange(e)} />
					{error ?
						<>
							<p className="h-8 text-red-500 absolute z-50 right-16 top-16">{errorMessage}</p>
							<Error className="h-8 w-8 text-red-500 absolute z-50 right-5 top-14" /> 
						</>
					: <></>}
				</>
				:
				<div className="md:hidden flex flex-col">
					<div className="p-8 mb-4">
						<img src="/anon-0.jpg" alt="default" />
					</div>
					<input type="file" />
				</div>
				}
			</div>
			<div className="hidden md:w-1/2 md:flex md:items-center md:justify-center">
				{cursor < 3 ?
				<>
					<input 
					name={info[cursor].name} 
					value={input[info[cursor].name]}
					type="text"
					className={animate ? inputBigScreenAnimate : inputBigScreenNoAnimate}
					onChange={(e) => onChange(e)}
					/>
					{error ? <Error className="h-8 w-8 text-red-500 absolute z-50 right-5 top-14" /> : <></>}
				</>
				:
				<div className="hidden md:flex flex-col">
					<div className="p-8 mb-4">
						<img src="/anon-0.jpg" alt="default" />
					</div>
					<input type="file" />
				</div>
				}
			</div>
			<div className="absolute right-0 bottom-5 z-40 flex justify-between md:w-1/2 w-full">
				{
					cursor === 0 ?
					<div></div>
					:
					<button className="rounded px-3 py-1 text-sm font-light ml-9"
					onClick={back}>Back</button>
				}
				{
					cursor === info.length - 1 ?
					<button className="rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light mr-9"
					onClick={submit}>Submit</button>
					:
					<button className="rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light mr-9"
					onClick={next}>Next</button>
					}
				
			</div>
		</section>
	)
}

export default ProfileCreation