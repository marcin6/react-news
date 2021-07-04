import React, { useState, useEffect } from 'react'
import { COUNTRY_LIST } from './../components/Elements';
import { NUMBER_LIST } from './../components/Elements';

export const SearchContext = React.createContext();

export function SearchProvider(props) {
    const [countryList] = useState(COUNTRY_LIST);
    const [numberList] = useState(NUMBER_LIST);
    const [country, setCountry] = useState('pl');
    const [number, setNumber] = useState('10');
    const [error, setError] = useState(null);

    useEffect(() => {
        const chooseCountry = JSON.parse(localStorage.getItem('setCountry'))
        if (chooseCountry) setCountry(chooseCountry)
        const chooseNumber = JSON.parse(localStorage.getItem('setNumber'))
        if (chooseNumber) setNumber(chooseNumber)
    }, [])

    useEffect(() => {
        localStorage.setItem('setCountry', JSON.stringify(country))
        localStorage.setItem('setNumber', JSON.stringify(number))
    }, [country,number])

    return (
        <SearchContext.Provider 
        value={{
            countryList,
            numberList,
            country,
            setCountry,
            number,
            setNumber,
            error, 
            setError
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}