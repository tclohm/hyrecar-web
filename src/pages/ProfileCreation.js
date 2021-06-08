import React, { useState, useEffect, useContext } from "react";

import Error from "../components/Error";
import BigInputText from "../components/BigInputText";
import BigInputImagePreview from "../components/BigInputImagePreview";
import SmallInputText from "../components/SmallInputText";
import SmallInputImagePreview from "../components/SmallInputImagePreview";
import BottomNavForCreation from "../components/BottomNavForCreation";


import useLocalStorage from "../hooks/useLocalStorage";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { ADD_PROFILE_IMAGE, ADD_PROFILE } from "../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";

import info from "../data/profile";

const textAnimate = "md:text-white font-black animate-fade-down"
const textNoAnimate = "md:text-white font-black"

const url = 'http://localhost:4000/'

const ProfileCreation = () => {

	const { profileCreated } = useContext(AuthContext)

	const [input, setInput] = useState({ firstName: "", lastName:  "", license: "", profileImageId: 61 })
	const placeholder = new File(['anon-0'], 'anon-0.jpg', { type: 'image/jpeg' })
	const [cursor, setCursor] = useState(0)
	const [savedInput, setSavedInput] = useLocalStorage('savedAndExitedProfile', input)
	const [savedPosition, setSavedPosition] = useLocalStorage('formPosition', cursor)

	// MARK: -- animation feedback
	const [animate, setAnimate] = useState(true)
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const [imageUploaded, setImageUploaded] = useState(false)

	const [addImage, image] = useMutation(ADD_PROFILE_IMAGE)
	const [addProfile] = useMutation(ADD_PROFILE)

	const history = useHistory()

	useEffect(() => {
		if (savedInput && savedInput.firstName !== "") { setInput(savedInput) }
		if (savedPosition && savedPosition !== 0) { setCursor(savedPosition) }
	}, [savedInput, savedPosition])

	useEffect(() => {
		if (imageUploaded && image.data) {
			setInput({...input, profileImageId: image.data.id})
		}
	}, [image, imageUploaded, input])

	// MARK: -- input change
	const onChange = (event) => {
		event.preventDefault()
		if (animate) { setAnimate(false) }
		if (error) { setError(false); setErrorMessage(''); }
		setInput({...input, [event.target.name]: event.target.value})
	}

	const changeImage = ({ target }) => {
		const file = target.files[0]
		addImage({ variables: { file } })
		setImageUploaded(true)
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
		if (error) { setError(false) }
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
		addProfile({ variables: { profile: input } })
		profileCreated()
		history.push('/')
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
					<SmallInputText info={info} cursor={cursor} input={input} animate={animate} onChange={onChange} />
					{error ?
						<>
							<p className="h-8 text-red-500 md:text-base text-xs absolute z-50 right-16 top-16">{errorMessage}</p>
							<Error className="h-8 w-8 text-red-500 absolute z-50 right-5 top-14" /> 
						</>
					: 
					<></>}
				</>
				:
				<>
					{ imageUploaded & image.data ?
						<SmallInputImagePreview image={url + image.data.uploadProfileImage.location} name={image.data.uploadProfileImage.filename} changeImage={changeImage} />
						:
						<SmallInputImagePreview image={'/' + placeholder.name} name="avatar" changeImage={changeImage} />
					}
				</>
				}
			</div>
			<div className="hidden md:w-1/2 md:flex md:items-center md:justify-center">
				{cursor < 3 ?
				<>
					<BigInputText info={info} cursor={cursor} input={input} animate={animate} onChange={onChange} />
				</>
				:
				<>
				{ imageUploaded & image.data ?
						<BigInputImagePreview image={url + image.data.uploadProfileImage.location} name={image.data.uploadProfileImage.filename} changeImage={changeImage} />
						:
						<BigInputImagePreview image={'/' + placeholder.name} name="avatar" changeImage={changeImage} />
				}
				</>
				}
			</div>
			<BottomNavForCreation info={info} cursor={cursor} back={back} next={next} submit={submit} />
		</section>
	)
}

export default ProfileCreation