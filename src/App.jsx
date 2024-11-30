import { useState } from 'react';
import './App.css';

function App() {
  const quotes = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    'Your time is limited, don’t waste it living someone else’s life. - Steve Jobs',
    'Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis',
    'Do what you can, with what you have, where you are. - Theodore Roosevelt',
    'Don’t watch the clock; do what it does. Keep going. - Sam Levenson',
    'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
    'It does not matter how slowly you go as long as you do not stop. - Confucius',
    'Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau',
    'Don’t be afraid to give up the good to go for the great. - John D. Rockefeller',
    'I find that the harder I work, the more luck I seem to have. - Thomas Jefferson',
    'The way to get started is to quit talking and begin doing. - Walt Disney',
    'Dream big and dare to fail. - Norman Vaughan',
    'What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson',
    'You miss 100% of the shots you don’t take. - Wayne Gretzky',
    'Fall seven times and stand up eight. - Japanese Proverb',
    'Everything you’ve ever wanted is on the other side of fear. - George Addair',
    'Do one thing every day that scares you. - Eleanor Roosevelt',
    'The best way to predict the future is to invent it. - Alan Kay',
  ];
  const [quote, setQuote] = useState(
    'The only way to do great work is to love what you do. - Steve Jobs'
  );
  const generateRandomQuote = () => {
    const randomindex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomindex]);
  };
  return (
    <div className="App">
      <h2>{quote}</h2>
      <button onClick={generateRandomQuote}>Generate Quote</button>
    </div>
  );
}

export default App;
