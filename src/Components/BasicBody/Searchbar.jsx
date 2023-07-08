import React from 'react'

const Searchbar = () => {
  return (
    <div>
      <input type="text" list='option' />
      <datalist id='option'>
        <option value="Home"></option>
        <option value="Project"></option>
        <option value="Research"></option>
        <option value="Education"></option>
        <option value="Contact"></option>
        <option value="Experience"></option>
      </datalist>
    </div>
  )
}

export default Searchbar
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Searchbar = () => {

//     const [inputValue, setInputValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (event) => {
//     const newInputValue = event.target.value;
//     setInputValue(newInputValue);

//     // Simulate fetching suggestions from the database based on the input value
//     const fetchedSuggestions = fetchSuggestionsFromDatabase(newInputValue);
//     setSuggestions(fetchedSuggestions);
//   };

//   const handleOptionClick = (option) => {
//     setInputValue(option.label);
//     setSuggestions([]);
//   };

//   const fetchSuggestionsFromDatabase = (inputValue) => {
//     // Simulated logic to fetch suggestions from the database based on the input value
//     const fetchedSuggestions = [
//       { value: 'apple', label: 'Apple' },
//       { value: 'banana', label: 'Banana' },
//       { value: 'cherry', label: 'Cherry' },
//       { value: 'grape', label: 'Grape' },
//     ];

//     return fetchedSuggestions.filter((suggestion) =>
//       suggestion.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Type to search..."
//       />
//       <ul>
//         {suggestions.map((option) => (
//           <li key={option.value} onClick={() => handleOptionClick(option)}>
//             {option.label}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Searchbar