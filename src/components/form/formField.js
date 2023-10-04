import React, { useState } from "react";
import {
	FormGroup,
	FormLabel,
	FormInput,
	ErrorMessage,
} from "../../styles/formStyles";

const FormField = ({ field, data, setData }) => {
	const { id, placeholder, required, type, label } = field;
	const [emailError, setEmailError] = useState("");
	const [phoneError, setPhoneError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		if (type === "email") {
			if (value.trim() === "") {
				setEmailError("");
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
				setEmailError("Invalid email address");
			} else {
				setEmailError("");
			}
		}
		if (type === "phone") {
			if (value.trim() === "") {
				// Phone field is empty, clear the error message
				setPhoneError("");
			} else if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(value)) {
				// Phone validation failed (must match the format (123)456-7890)
				setPhoneError(
					"Invalid phone number (must be in the format (123)456-7890)"
				);
			} else {
				// Phone is valid, clear the error message
				setPhoneError("");
			}
		}
	};

	// const isEmailField = type === "email";
	const isPhoneField = type === "phone";

	const validateInput = () => {
		// if (
		// 	isEmailField &&
		// 	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data[id])
		// ) {
		// 	// Email validation failed
		// 	return "Invalid email address";
		// }

		if (isPhoneField && !/^\d{10}$/.test(data[id])) {
			// Phone number validation failed (assuming exactly 10 digits)
			return "Invalid phone number (10 digits required)";
		}

		// No validation error
		return null;
	};

	const validationError = validateInput();

	return (
		<FormGroup>
			<FormLabel htmlFor={id}>
				{label}
				{required && <span style={{ color: "red" }}> *</span>}{" "}
				{/* Add asterisk if required */}
			</FormLabel>
			<FormInput
				type={type}
				id={id}
				name={id}
				placeholder={placeholder}
				required={required}
				value={data[id] || ""}
				onChange={handleChange}
				style={{ marginLeft: -10 }}
			/>
			{type === "email" && emailError && (
				<ErrorMessage>{emailError}</ErrorMessage>
			)}
			{type === "phone" && phoneError && (
				<ErrorMessage>{phoneError}</ErrorMessage>
			)}
			{/* {(validationError || emailError) && (
				<ErrorMessage>{validationError || emailError}</ErrorMessage>
			)} */}
		</FormGroup>
	);
};

export default FormField;
