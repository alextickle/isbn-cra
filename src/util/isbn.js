export function validate10DigitIsbn(isbn){
    if (typeof isbn !== 'string'){
        return false;
    }
    // remove hyphens
    isbn = isbn.replace(/-/g, '');

    if (isbn.length !== 10){
        return false;
    }
    let sumOfProducts = 0;
    for (let i = 0; i < isbn.length; i++){
        sumOfProducts += (parseInt(isbn[i]) * (10 - i));
    }

    return sumOfProducts % 11 === 0;
}

export function validate13DigitIsbn(isbn){
    if (typeof isbn !== 'string'){
        return false;
    }
    // remove hyphens
    isbn = isbn.replace(/-/g, '');

    if (isbn.length !== 13){
        return false;
    }
    let sumOfProducts = 0;
    for (let i = 0; i < isbn.length; i++){
        sumOfProducts += (parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3));
    }

    return sumOfProducts % 10 === 0;
}