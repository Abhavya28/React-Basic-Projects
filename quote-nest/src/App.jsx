import Quotes from "./components/Quotes";
import AddQuoteForm from "./components/AddQuoteForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quotes quotes={quotes} setQuotes={setQuotes}/>} />
        <Route path="/add" element={<AddQuoteForm setQuotes={setQuotes}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;