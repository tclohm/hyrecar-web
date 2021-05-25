import React, { Fragment } from "react";

const AuthForm = ({ formik, title }) => {

	return (
	<section>
		  <h1>{title}</h1>
	      <form onSubmit={formik.handleSubmit}>
	        <input
	          fullWidth
	          id="email"
	          name="email"
	          label="Email"
	          value={formik.values.email}
	          onChange={formik.handleChange}
	          error={formik.touched.email && Boolean(formik.errors.email)}
	          helperText={formik.touched.email && formik.errors.email}
	        />
	        <input
	          fullWidth
	          id="password"
	          name="password"
	          label="Password"
	          type="password"
	          value={formik.values.password}
	          onChange={formik.handleChange}
	          error={formik.touched.password && Boolean(formik.errors.password)}
	          helperText={formik.touched.password && formik.errors.password}
	        />
	        <button color="primary" variant="contained" fullWidth type="submit">
	          Submit
	        </button>
	      </form>
	</section>
	)
}

export default AuthForm;