
import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import * as ReactDOM from 'react-dom';

const NewPage = (props) => {
	const configuration = new Configuration({
		organization: "FILL THIS IN",
		apiKey: "FILL THIS IN"
	});
	const openai = new OpenAIApi(configuration);


	const [prompt, setPrompt] = useState("Describe Your Monster");

	const [monsterName, setMonsterName] = useState("")


	// creates list of descriptions sent to api
	const [imgURL, setImageURL] = useState([]);

	const imageSequences = ["", " at the beach, building a sand castle, wearing lei, medium shot", 
	" in Egypt, pyramid, walking like an Egyptian, wearing pharaoh hat",
" in Paris, eating croissant, wearing beret, eiffel tower",
"in bedroom, wearing pharaoh hat, eating croissant, wearing lei, happy, upbeat, friendly"]


	const apiCall = async (e, prompt, imgSqnce) => {
		// call to openai
		e.preventDefault();
		const result = await openai.createImage({
			prompt: "cute monster " + prompt + ", impressionist, pointilism, artistic, cute aesthetic," + imgSqnce,
			n: 1,
			size: "1024x1024",
		});
		const url = result.data.data[0].url;
		setImageURL([...imgURL, url])
		console.log(imgURL);
		return result;
	};

	const updatePrompt = (e) => {
		e.preventDefault();
		setPrompt(e.target.value)
	}

	const updateMonsterName = (e) => {
		e.preventDefault();
		setMonsterName(e.target.value)
	}



	return (
		<div>
			<p>Do you have a monster under your bed? What is its name?</p>
			<input name = "Name" value={monsterName} onChange={(e) => updateMonsterName(e)} />
			<br></br>
			<p>What does {monsterName} look like?</p>
			<textarea value={prompt} onChange={(e) => updatePrompt(e)} />
			<br></br>
			<button onClick={(e) => apiCall(e, prompt, imageSequences[0])}> submit </button>
			<img src={imgURL[0]}></img>

			<p> One day, {monsterName} was tired of scaring people.  {monsterName} was tired of making scary faces and scary noises.  {monsterName}  just wanted to have fun.
			So it decided to take a vacation.</p>
			
			<p> First, {monsterName} went to Hawaii and made sand castles</p>
			<button onClick={(e) => apiCall(e, prompt, imageSequences[1])}> submit </button>
			<img src={imgURL[1]}></img>


			<p> Next, {monsterName} went to Egypt and walked like an Egyptian!</p>
			<button onClick={(e) => apiCall(e, prompt, imageSequences[2])}> submit </button>
			<img src={imgURL[2]}></img>

			<p> Next, {monsterName} went to France for some joi de vivre!</p>
			<button onClick={(e) => apiCall(e, prompt, imageSequences[3])}> submit </button>
			<img src={imgURL[3]}></img>

			<p> When {monsterName} came home at last, it was very happy, and {monsterName} never scared anyone again. </p>
			<button onClick={(e) => apiCall(e, prompt, imageSequences[4])}> submit </button>
			<img src={imgURL[4]}></img>



		</div>

	);
}






export default NewPage;

