// ThankYouPage.test.js
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ThankYouPage from "./thankyouPage";

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
	form: {
		formData: {
			firstName: "John",
			email: "john@example.com",
		},
	},
});

describe("ThankYouPage Component", () => {
	it("renders the ThankYouPage component with submitted data", () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<ThankYouPage />
			</Provider>
		);

		// Assert that the "Thank You!" title is displayed
		expect(getByTestId("thank-you-title")).toBeInTheDocument();

		// Assert that submitted data is displayed
		expect(getByTestId("thank-you-item-firstName")).toBeInTheDocument();
		expect(getByTestId("thank-you-item-email")).toBeInTheDocument();
	});
});
