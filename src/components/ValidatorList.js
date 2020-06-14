import React, {useState, useEffect} from 'react';
import Validator from './Validator';

const ValidatorList = () => {

    const [validateNow, setValidateNow] = useState(false);

    const handleClick = () => {
        setValidateNow(true);
        setTimeout(() => setValidateNow(false), 500);
    }

    const numberOfInputs = 5;
    const validators = [];
    for (let i = 1; i <= numberOfInputs; i++){
       validators.push(<Validator key={i} validateNow={validateNow}/>);
    }

    return (
            <div>
                <div className="title">Validate ISBN numbers</div>
                {validators}
                <button onClick={handleClick}>Validate</button>
            </div>
        );
}

export default ValidatorList;