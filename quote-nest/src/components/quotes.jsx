import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quotes = ({ quotes, setQuotes }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchQuotes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes");
      setQuotes((prev) => (prev.length === 0 ? response.data.quotes : prev));
      setLoading(false);
    } catch (err) {
      setError("Data not found.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  console.log(quotes, "quotes");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Quotes</h2>

      <div className="flex flex-col justify-center gap-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <h1 className="font-semibold italic text-gray-800">
                "{quote.quote}"
              </h1>
              <p className="text-blue-500 font-semibold">{quote.author}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/add")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          + Add Quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
