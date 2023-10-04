// FormStyles.js
import styled from "styled-components";

export const FormContainer = styled.div`
	max-width: 400px;
	margin: 65px auto;
	padding: 50px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ContainerType = styled.div`
	/* Add your container styles here */
	background-color: #f0f0f0;
	height: 95vh;
	padding: 20px;
	border: 1px solid #ddd;
	border-radius: 5px;
`;

export const FormGroup = styled.div`
	margin-bottom: 20px;
`;

export const FormLabel = styled.label`
	display: block;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const FormInput = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 3px;
	font-size: 16px;
`;

export const SubmitButton = styled.button`
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 3px;
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background-color: #0056b3;
	}
`;

export const ErrorMessage = styled.div`
	color: #ff0000;
	font-size: 14px;
`;

export const ThankYouContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh; /* 50% of the viewport height */
`;

export const InnerContainer = styled.div`
	text-align: center;
	padding: 20px;
	background-color: #f5f5f5;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	width: 85%;
	height: 85%;
`;

export const ThankYouTitle = styled.h2`
	font-size: 24px;
	color: #333;
`;

export const ThankYouList = styled.ul`
	list-style-type: none;
	padding: 0;
	text-align: left;
	margin-top: 20px;
`;

export const ThankYouListItem = styled.li`
	font-size: 16px;
	margin-bottom: 10px;
`;
// export const ThankYouContainer = styled.div`
// 	text-align: center;
// 	padding: 20px;
// 	background-color: #f0f0f0;
// 	border-radius: 8px;
// 	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// 	max-width: 400px;
// 	margin: 0 auto;
// `;

// export const ThankYouTitle = styled.h2`
// 	color: #333;
// `;

// export const ThankYouDataContainer = styled.div`
// 	text-align: left;
// `;

// export const ThankYouDataItem = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	margin-bottom: 10px;
// `;

// export const ThankYouLabel = styled.span`
// 	font-weight: bold;
// `;

// export const ThankYouValue = styled.span`
// 	flex-grow: 1;
// 	margin-left: 10px;
// `;
