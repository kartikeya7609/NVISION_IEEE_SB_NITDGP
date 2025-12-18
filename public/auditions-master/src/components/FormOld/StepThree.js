import React from "react";
import { Formik, Form, Field } from "formik";

const StepThree = (props) => {
	const handleSubmit = (values) => {
		props.next(values, true);
	};

	return (
		<Formik initialValues={props.data} onSubmit={handleSubmit}>
			{({ values }) => (
				<Form>
					<div className="block">
						<p className="text-light">
							{" "}
							Why are all the questions in different components ?{" "}
						</p>
						<Field name="2" />
					</div>

					<div className="btnbox">
						<button type="button" onClick={() => props.prev(values)}>
							Back
						</button>
						<button type="submit">Submit</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default StepThree;
