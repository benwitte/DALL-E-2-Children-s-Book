
import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import * as ReactDOM from 'react-dom';


const NewPage = (props) => {
	const configuration = new Configuration({
		organization: "YOUR_ORG_ID",
		apiKey: process.env.OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);
	console.log(openai);

	const [prompt, setPrompt] = useState("Describe Your Monster");

	const apiCall = async () => {
		// call to openai
		const result = await openai.completions.create({});
		return result;
	};

	const updatePrompt = (e) => {
		e.preventDefault();
		setPrompt(e.target.value)
	}


	return (
		<div>
			<p>The monster under your bed. What does it look like?</p>
			<form onSubmit={() => apiCall(prompt)}>
				<textarea value={prompt} onChange={(e) => updatePrompt(e)} />
				<input type="textarea" value="Submit" />
			</form>
		</div>

	);
}






export default NewPage;



/*
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

*/
