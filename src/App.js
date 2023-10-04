import React from "react";
import Form from "./components/form/form";
import { ContainerType } from "./styles/formStyles";

function App() {
	const formData = [
		[
			{
				id: "firstName",
				label: "First Name",
				placeholder: "First name",
				required: true,
				type: "text",
			},
			{
				id: "lastName",
				label: "Last Name",
				placeholder: "Last name",
				required: true,
				type: "text",
			},
		],
		{
			id: "email",
			label: "Email",
			placeholder: "Enter your email",
			required: true,
			type: "email",
		},
		{
			id: "address1",
			label: "Address 1",
			placeholder: "Address 1",
			placeholder: "Enter your main address",
			type: "text",
		},
		[
			{
				id: "city",
				label: "City",
				placeholder: "Enter your city",
				type: "text",
			},
			{
				id: "state",
				label: "State",
				placeholder: "Enter your state",
				type: "text",
			},
			{
				id: "zip",
				label: "Zip Code",
				placeholder: "Enter Zip code",
				type: "text",
			},
		],
		{
			id: "phone",
			label: "Phone",
			required: true,
			placeholder: "Enter your phone number",
			type: "phone",
		},
		{
			id: "jobTitle",
			label: "Job Title",
			options: [
				"Engineer - lead",
				"Engineer - mid level",
				"Engineer - junion",
				"Engineer - front end focused",
				"Engineer - backend focused",
				"Engineer - full stack",
			],
			placeholder: "Please select job title",
			type: "select",
		},
		{
			id: "reason",
			label: "Reason",
			placeholder:
				"Describe why you are a good fit for the job you are applying for.",
			type: "textarea",
		},
	];

	return (
		<div className="App">
			{/* <Counter /> */}
			<ContainerType>
				<Form formData={formData} />
			</ContainerType>
		</div>
	);
}

export default App;
