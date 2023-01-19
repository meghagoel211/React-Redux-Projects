import { useState } from "react";
import './SearchBar.css';

function SearchBar( {onSubmit}) {

    const [term, setTerm] = useState('');

    const handleFormSubmit =(event)=>{
        event.preventDefault();
        onSubmit(term);
        
    }

    const handleChange = (event)=>{
        setTerm(event.target.value.replace(/[0-9]/, ''));
    }
    

    return <div className="search-bar">
        <form onSubmit={handleFormSubmit} >
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange}/>
            {term.length<3 && <h6>Term must be longer</h6>}
            <div><h5>Confirm your Search: {term}</h5></div>
        </form>
        
    </div>
    
}

export default SearchBar;