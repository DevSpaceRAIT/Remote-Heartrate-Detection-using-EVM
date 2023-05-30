const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getResponse(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-003", // Replace with your desired GPT model
    prompt,
    temperature: 0.5,
    maxTokens: 60,
    n: 1,
    stop: "\n",
  });

  return response.data.choices[0].text.trim();
}

module.exports = {
  getResponse,
};
