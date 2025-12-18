import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form.css"

const stepOneValidationSchema = Yup.object({
	first_name: Yup.string().required().label("First name"),
	last_name: Yup.string().required().label("Last name"),
});

const Details = (props) => {
	const handleSubmit = (values) => {
		props.next(values);
	};
	return (
		<Formik
			validationSchema={stepOneValidationSchema}
			initialValues={props.data}
			onSubmit={handleSubmit}
		>
			{() => (
				<Form>
					<div className="block">
						<p>First Name </p>
						<Field name="first_name" />
						<div className="message">
							<ErrorMessage name="first_name" />
						</div>
					</div>
					<div className="block">
						<p>Last Name</p>
						<Field name="last_name" />
						<div className="message">
							<ErrorMessage name="last_name" />
						</div>
					</div>
					<div className="btnbox">
						<button type="submit">Next</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default Details;
