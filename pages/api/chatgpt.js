import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { companyName, location, conversationHistory } = req.body;

    // If conversationHistory exists, this is a chat conversation
    if (conversationHistory && conversationHistory.length > 0) {
      const messages = [
        {
          role: "system",
          content:
            "You are a helpful AI assistant for Modern Software, a web design and software development company in Northern Ireland. Help users with questions about web design, software development, AI consulting, and our services.",
        },
        ...conversationHistory,
      ];

      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: messages,
        temperature: 0.7,
      });

      return res.status(200).json({
        message: completion.choices[0].message.content,
      });
    }

    // Otherwise, this is a company research request
    if (!companyName || !location) {
      return res.status(400).json({ error: "Company name and location are required" });
    }

    const prompt = `I need to find out information on ${companyName} based in ${location}. What I would like you to find for me is an email address and company website. Please respond in JSON format with the following structure:
{
  "email": "email@example.com" or null if not found,
  "website": "https://example.com" or null if not found,
  "analysis": "Brief analysis of what you found or why you couldn't find the information"
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that finds company contact information. Always respond with valid JSON only, no additional text.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
    });

    const responseText = completion.choices[0].message.content.trim();

    // Try to parse JSON from the response
    let parsedResponse;
    try {
      // Remove markdown code blocks if present
      const cleanedResponse = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      parsedResponse = JSON.parse(cleanedResponse);
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0]);
      } else {
        // Fallback: create a structured response from the text
        parsedResponse = {
          email: null,
          website: null,
          analysis: responseText,
        };
      }
    }

    return res.status(200).json({
      email: parsedResponse.email || null,
      website: parsedResponse.website || null,
      analysis: parsedResponse.analysis || "No additional information found.",
    });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return res.status(500).json({
      error: "Failed to process request",
      message: error.message,
    });
  }
}
