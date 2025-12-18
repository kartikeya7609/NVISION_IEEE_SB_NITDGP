import React from "react";
import { Formik, Form, Field } from "formik";

const StepTwo = (props) => {
	const handleSubmit = (values) => {
		props.next(values);
	};

	return (
		<Formik initialValues={props.data} onSubmit={handleSubmit}>
			{({ values }) => (
				<Form>
					<div className="block">
						<p>Why do u want to join IEEE ? </p>
						<Field name="1" />
					</div>

					<div className="btnbox">
						<button type="button" onClick={() => props.prev(values)}>
							Back
						</button>
						<button type="submit">Next</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default StepTwo;
