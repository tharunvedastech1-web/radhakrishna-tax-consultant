const twilio = require("twilio");
const { getAIResponse } = require("../services/openaiService");

const whatsappAIReply = async (req, res) => {
  try {
    const MessagingResponse = twilio.twiml.MessagingResponse;
    const twiml = new MessagingResponse();

    const userMessage = req.body.Body || "";

    console.log("User message:", userMessage);

    const aiReply = await getAIResponse(userMessage);

    twiml.message(aiReply);

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  } catch (error) {
    console.error("WhatsApp AI Error:", error);
    res.status(500).send("Something went wrong");
  }
};

module.exports = { whatsappAIReply };