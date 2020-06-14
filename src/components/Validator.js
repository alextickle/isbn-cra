import React, {useState, useEffect} from 'react'
import {validate10DigitIsbn, validate13DigitIsbn} from '../util/isbn';

const Validator = ({validateNow}) => {

    const [isbnType, setIsbnType] = useState(10);
    const [isbn, setIsbn] = useState('');
    const [isValid, setIsValid] = useState(null);

    const handleTypeChange = (e) => {
        setIsbnType(e.target.value);
    }

    const handleInputChange = (e) => {
        setIsValid(null);
        setIsbn(e.target.value);
    }

    if (validateNow && isValid === null){
        if (isbn !== ''){
            if (isbnType === 10){
                setIsValid(validate10DigitIsbn(isbn));
            } else {
                setIsValid(validate13DigitIsbn(isbn))
            }
        }
    }
    return (
            <div className="container">
                <select onChange={handleTypeChange}>
                    <option value="10">10 Digit ISBN</option>
                    <option value="13">13 Digit ISBN</option>
                </select>
                <input type='text' onChange={handleInputChange}/>
                <div className='results'>
                    {isValid === false && <div className="warning">Invalid ISBN</div>}
                    {isValid && <div className="valid">Valid ISBN</div>}
                </div>
            </div>
        );
}

export default Validator;