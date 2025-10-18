import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Quote from './Quote';
import Author from './Author';

const API_URL = "https://api.quotable.io/random";
const API_OPTIONS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

const QuoteBox = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchQuote = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL, API_OPTIONS);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch quote");
            }
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.error("Error fetching the quote: ", error);
            setError("Failed to fetch quote");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
    <div className="quote-box" id="quote-box">
        {loading ? (
            <p className='loading'>Loading...</p>
        ) : error ? (
            <p id="error">{error}</p>
        ) : (
            <>
                <Quote text={quote} />
                <Author name={author} />
                <button id="new-quote" className='new-quote-btn' onClick={fetchQuote}>New Quote</button>
            </>
        )}
    </div>
  )
}

export default QuoteBox
