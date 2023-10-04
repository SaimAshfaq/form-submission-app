// ThankYouPage.js
import React from "react";
import { useSelector } from "react-redux";
import {
	InnerContainer,
	ThankYouContainer,
	ThankYouList,
	ThankYouListItem,
	ThankYouTitle,
} from "../../styles/formStyles";

const ThankYouPage = () => {
	// Retrieve the form data from Redux state
	const formData = useSelector((state) => state.form.formData);

	return (
		<ThankYouContainer>
			<InnerContainer>
				<ThankYouTitle data-testid="thank-you-title">Thank You!</ThankYouTitle>
				<p>Submitted Data</p>
				<ThankYouList>
					{Object.entries(formData).map(([key, value]) => (
						<ThankYouListItem key={key} data-testid={`thank-you-item-${key}`}>
							<strong>{key}:</strong> {value}
						</ThankYouListItem>
					))}
				</ThankYouList>
			</InnerContainer>
		</ThankYouContainer>
	);
};

export default ThankYouPage;
