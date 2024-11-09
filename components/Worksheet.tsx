import { useState } from "react";
import axios from "axios";

export default function Worksheet() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async (
    exam: string,
    topic: string,
    numQuestions: number
  ) => {
    setLoading(true);
    try {
      // Updated API endpoint
      const response = await axios.post("/api/worksheet", {
        exam,
        topic,
        questions: numQuestions,
      });

      setQuestions(response.data.questions || []);
    } catch (error) {
      const err = error as Error;
      console.error("Error fetching questions:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => fetchQuestions("GCSE", "Algebra", 5)}>
        Generate Questions
      </button>
      {loading && <div>Loading...</div>}
      <ul>
        {questions.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ul>
    </div>
  );
}
