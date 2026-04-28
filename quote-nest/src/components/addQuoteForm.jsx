import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddQuoteForm = ({ setQuotes }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addQuotes = async (e) => {
    e.preventDefault();

    if (!quote || !author) return;

    try {
      setLoading(true);
      const newQuote = {
        id: Date.now(),
        quote,
        author,
      };

      setQuotes((prev) => [newQuote, ...prev]);

      setQuote("");
      setAuthor("");
      navigate("/");
    } catch (error) {
      console.error("Error adding quote", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 hover:border-2">
        <h2 className="text-2xl font-semibold text-center mb-6">Add Quote</h2>

        <form onSubmit={addQuotes} className="space-y-4">
          <textarea
            placeholder="Write your quote..."
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          />

          <input
            type="text"
            placeholder="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {loading ? "Adding..." : "Add Quote"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddQuoteForm;
