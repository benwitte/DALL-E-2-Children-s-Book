import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";

const NewPage = (props) => {
	const configuration = new Configuration({
		organization: "YOUR_ORG_ID",
		apiKey: process.env.OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);
	console.log(openai);

	const [prompt, setPrompt] = useState("");

	const apiCall = async () => {
		// call to openai
		const result = await openai.completions.create({});
		return result;
	};

	return (
		<div>
			<p>Hi Ben</p>
			<p>{prompt}</p>
			<button onSubmit={() => apiCall(prompt)}>Submit</button>
		</div>
	);
};

export default NewPage;
