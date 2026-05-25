const axios = require("axios");

const getAIResponse = async (message) => {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          {
            role: "system",
            content: `
You are an expert Indian Income Tax and GST assistant for Radhakrishna Tax Consultant.

Rules:
- Answer professionally
- Help with ITR filing
- GST registration
- GST returns
- TDS
- PAN services
- Tax notices
- Business registration
- Ask follow-up questions
- Keep replies short and WhatsApp friendly
- Focus only on Indian tax/business topics
            `,
          },
          {
            role: "user",
            content: message,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "OpenRouter Error:",
      error.response?.data || error.message
    );
    return "AI service temporarily unavailable.";
  }
};

module.exports = { getAIResponse };