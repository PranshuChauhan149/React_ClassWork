import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const App = () => {
  const [question, setQuestion] = useState("");
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyAA0QapnuQSat6xdjVL9FVlAIKKjxldHu4",
  });

  async function main() {
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${question}`,
    });
    setLoading(false);
    setRes(response.text);
    console.log(response.text);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <button onClick={main}>click</button>
      <br />
      <p>{loading ? "loading..." : ""}</p>
      <br />
      <pre>{res}</pre>
    </div>
  );
};

export default App;
