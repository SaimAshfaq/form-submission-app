// Form.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../redux/formSlice";
import FormField from "./formField";
import ThankYouPage from "./thankyouPage";
import { FormContainer, SubmitButton } from "../../styles/formStyles";

const Form = ({ formData }) => {
	const dispatch = useDispatch();
	const [data, setData] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = () => {
		// Check if all required fields are filled
		const requiredFields = formData.filter((field) => field.required);
		const missingRequiredFields = requiredFields.filter(
			(field) => !data[field.id]
		);

		if (missingRequiredFields.length > 0) {
			// Display a message or handle missing required fields as needed
			alert("Please fill in all required fields.");
			return; // Prevent form submission
		}

		// Dispatch the form data to Redux using the saveFormData action
		dispatch(saveFormData(data));

		// Once submitted successfully, setSubmitted(true);
		setSubmitted(true); // Simulate a successful submission for this example
	};

	const renderFormField = (field) => {
		if (Array.isArray(field)) {
			// Render fields in a row (e.g., first name and last name)
			return (
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					{field.map((subField) => (
						<FormField
							key={subField.id}
							field={subField}
							data={data}
							setData={setData}
						/>
					))}
				</div>
			);
		} else {
			// Render single field
			return (
				<FormField key={field.id} field={field} data={data} setData={setData} />
			);
		}
	};

	return (
		<FormContainer>
			{submitted ? (
				<ThankYouPage />
			) : (
				<form>
					{formData.map((field) => (
						<div key={field.id}>{renderFormField(field)}</div>
					))}
					<SubmitButton type="button" onClick={handleSubmit}>
						Submit
					</SubmitButton>
				</form>
			)}
		</FormContainer>
	);
};

export default Form;
