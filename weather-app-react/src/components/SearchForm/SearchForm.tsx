// Code for SearchForm.tsx component to search for a city in the weather app
import React, { useState } from 'react';
import styles from "./SearchForm.module.css"


// Props interface for SearchForm component to accept onSearch function as a prop
interface Props {
  onSearch: (city: string) => void;
}
// SearchForm component to search for a city in the weather app using onSearch function as a prop
const SearchForm = ({ onSearch }: Props) => {
  const [city, setCity] = useState('');

  // Function to handle form submission and call onSearch function with city name as an argument
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };
  
  // Form to input city name and submit to search for the city in the weather app using onSearch function
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.searchbar}
        type="text"
        value={city}
        // Update city state on input change event to input city name in the form field
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit" className={styles.searchButton}
      >🔎</button>
    </form>
  );
};

export default SearchForm;
