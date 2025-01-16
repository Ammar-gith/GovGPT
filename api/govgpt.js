import axios from "axios";

const BASE_URL = "https://codeforpakistan-governmentgpt.hf.space";

export const askGovGPT = async (question) => {
  try {
    // Sending the POST request with data in the body
    const response = await axios.post(
      BASE_URL,
      { query: question }, // Send query in the body
      {
        headers: {
          "Content-Type": "application/json", // Ensure the content type is JSON
        },
      }
    );

    console.log("API Response:", response.data); // Log the response body

    // Extract the relevant field from the response
    const botResponse =
      response.data.response?.message || response.data.response;
    return botResponse; // Return the desired response field
  } catch (error) {
    console.error(
      "Error communicating with GovGPT API:",
      error.response || error.message
    );
    throw new Error("Failed to get response from GovGPT.");
  }
};
