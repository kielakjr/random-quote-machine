import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const API_URL = "https://api.quotable.io/random";
const API_OPTIONS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

const QuoteBox = () => {
    const [quote, setQuote] = useState("");

    const fetchQuote = async () => {
        try {
            const response = await fetch(API_URL, API_OPTIONS);
            const data = await response.json();
            setQuote(data.content);
        } catch (error) {
            console.error("Error fetching the quote: ", error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
    <div className="quote-box" id="quote-box">{quote}</div>
  )
}

export default QuoteBox
