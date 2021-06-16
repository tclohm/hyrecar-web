import React, { useState } from "react";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_SELF_IMAGE } from "../graphql/queries";
import { UPDATE_PROFILE } from "../graphql/mutations";
import { useFormik } from "formik";
import { schema } from "../validations/ProfileSchema";

import Error from "../components/Error";

const EditProfile = () => {

	const { data, loading, error } = useQuery(GET_SELF_IMAGE)

	const [updateProfile] = useMutation(UPDATE_PROFILE)

	const [input, setInput] = useState({ 
		firstName: data.self.firstName || "", 
		lastName: data.self.lastName || "", 
		license: data.self.license || "" 
	})

	const [updated, setUpdated] = useState(false)
	const [err, setErr] = useState(false)

	const show = (e) => {
		const fileinput = document.getElementById('profileImageUpdate')
		const container = document.getElementById('avatarBtnContainer')
		const avatarInfo = document.getElementById('avatarInfo')
		e.target.classList.add('hidden')
		fileinput.classList.remove('hidden')
		avatarInfo.classList.remove('hidden')
		fileinput.classList.add('my-2')
		container.classList.remove('items-center')
		container.classList.add('items-start', 'flex-col-reverse')
	}

	const formik = useFormik({
		initialValues: input,
		validationSchema: schema,
		onSubmit: (values) => {
			try {
				updateProfile({ variables: { profile: values }})
				setUpdated(true)
				setTimeout(() => { setUpdated(false) }, 2000)
			} catch (e) {
				setErr(true)
				setTimeout(() => { setErr(false) }, 2000)
			}

		}
	})

	if (loading) return <p>loading</p>
	if (error) return <p>error</p>
	if (data) {


		const baseUrl = "http://localhost:4000"
		const profileImage = baseUrl + data.self.avatar.image.location

	return (
			<section>
			<form onSubmit={formik.handleSubmit} className="relative flex flex-col">
				<div className="flex justify-center items-center m-1">
					<div className="h-24 w-24 bg-cover bg-center rounded-full" style={{ backgroundImage: "url(" + profileImage + ")" }}/>
					<div id="avatarBtnContainer" className="flex items-center mx-4">
						<div className="flex items-center">
							<button 
							onClick={(e) => show(e)}
							className="bg-pink-400 focus:ring focus:ring-pink-200 focus:outline-none font-semibold text-sm text-white py-3 px-4 rounded-xl mx-2">
								Upload new picture
							</button>
							<div>
								<input id="profileImageUpdate" type="file" name="file" className="hidden" accept="image/png, image/jpeg"  />
								<p id="avatarInfo" className="text-gray-400 text-sm hidden">JPG or PNG. Max size of 800K</p>
							</div>
						</div>
						<button className="bg-gray-200 focus:ring focus:ring-gray-100 focus:outline-none font-semibold text-sm py-3 px-4 rounded-xl">
							Delete
						</button>
					</div>
				</div>
					<div className="relative flex flex-col">
						<label className="text-gray-400 text-sm">First Name <span className="text-red-600">*</span></label>
						{formik.touched.firstName && Boolean(formik.errors.firstName) ? 
							<div>
								<p className="text-red-500 text-sm absolute z-50 right-1 top-2">{formik.errors.firstName}</p>
								<Error className="h-8 w-8 text-red-500 absolute z-50 right-4 bottom-5" />
							</div>
							:
							<></>
						}
						<input 
							type="text"
							name="firstName"
							onChange={formik.handleChange} 
							value={formik.values.firstName}
							className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
						/>
					</div>
				<div className="relative flex flex-col">
					<label className="text-gray-400 text-sm">Last Name <span className="text-red-600">*</span></label>
					{formik.touched.lastName && Boolean(formik.errors.lastName) ? 
						<div>
							<p className="text-red-500 text-sm absolute z-50 right-1 top-2">{formik.errors.lastName}</p>
							<Error className="h-8 w-8 text-red-500 absolute z-50 right-4 bottom-5" />
						</div>
						:
						<></>
					}
					<input 
						type="text"
						name="lastName"
						onChange={formik.handleChange}
						value={formik.values.lastName}
						className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
					/>
				</div>
				<div className="relative flex flex-col">
					<label className="text-gray-400 text-sm">License <span className="text-red-600">*</span></label>
					{formik.touched.license && Boolean(formik.errors.license) ? 
						<div>
							<p className="text-red-500 text-sm absolute z-50 right-1 top-2">{formik.errors.license}</p>
							<Error className="h-8 w-8 text-red-500 absolute z-50 right-4 bottom-5" />
						</div>
						:
						<></>
					}
					<input 
						type="text"
						name="license"
						onChange={formik.handleChange}
						value={formik.values.license}
						className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
					/>
				</div>
				{ 
					updated ?
					<div className="flex justify-center bg-green-500 text-white font-semibold p-2 rounded">Updated!</div>
					:
					<button
						type="submit"
						onClick={formik.handleSubmit}
						className="bg-pink-400 font-semibold text-white p-2 rounded">Save Changes</button>
				}
				{
					err ?
					<div className="flex justify-center bg-green-500 text-white font-semibold p-2 rounded">Error!</div>
					:
					<></>
				}
			</form>
			</section>
		)
	}
}

export default EditProfile