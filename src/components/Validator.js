import React, {useState, useEffect} from 'react'
import {validate10DigitIsbn, validate13DigitIsbn} from '../util/isbn';

const Validator = () => {

    const [isbnType, setIsbnType] = useState(10);
    const [isbn, setIsbn] = useState(null);
    const [isValid, setIsValid] = useState(null);

    const handleTypeChange = (e) => {
        setIsbnType(e.target.value);
    }

    const handleInputChange = (e) => {
        setIsValid(null);
        setIsbn(e.target.value);
    }

    const handleClick = () => {
        if (isbnType === 10){
            setIsValid(validate10DigitIsbn(isbn));
        } else {
            setIsValid(validate13DigitIsbn(isbn))
        }
    }
    console.log(isValid);
    return (
            <div>
                <div className="title">Enter an ISBN number</div>
                <div>
                    <select name="isbn" id="isbn">
                        <option value="10" onChange={handleTypeChange}>10 Digit ISBN</option>
                        <option value="13" onChange={handleTypeChange}>13 Digit ISBN</option>
                    </select>
                </div>
                <button onClick={handleClick}>Validate</button>
                <input type='text' onChange={handleInputChange}/>
                {isValid === false && <div className="warning">Invalid ISBN</div>}
                {isValid && <div>Valid ISBN</div>}
            </div>
        );
}

export default Validator;