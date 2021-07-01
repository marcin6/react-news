import React, { useState, useEffect } from 'react'
import { COUNTRY_LIST } from './Elements';
import { NUMBER_LIST } from './Elements';
import Select from './Select';
import NewsList from './NewsList';
import  './../styles/search.sass'

export default function Search() {
    const API_KEY = 'a3e08545384940a79558c6b9fb59c3d8';
    const API = 'https://newsapi.org/v2/top-headlines?country='
    const [countryList] = useState(COUNTRY_LIST);
    const [numberList] = useState(NUMBER_LIST);
    const [news, setNews] = useState([]);
    const [country, setCountry] = useState('pl');
    const [number, setNumber] = useState('10');
    const [error, setError] = useState(null);

    const getNews = async () => {
        await fetch(API + country + '&pageSize=' + number + '&apiKey=' + API_KEY)
            .then(res => res.json())
            .then(data => {
                setNews(data.articles)
            })
            .catch(() => setError(true))
    }

    useEffect(() => {
        getNews();
    }, [country, number])

    const handleSelect = e => {
        if (e.target.name === 'country') {
            setCountry(e.target.value)
        }
        if (e.target.name === 'number') {
            setNumber(e.target.value)
        }
    }

    return (
        <div className="search-container">
            <div className="search-header">
                <h1>Search Country News</h1>
                <div className="search-country">
                    Choose a country
                    <Select name={'country'} value={country} elements={countryList} elementOnChange={e => handleSelect(e)} />
                </div>
                <div className="search-page-size">
                    Choose a number of news
                    <Select name={'number'} value={number} elements={numberList} elementOnChange={e => handleSelect(e)} />
                </div>
                <div className="search-choose_option">
                    <span>Display {number} latest news for the country</span>
                    {country === 'pl' && (
                        <span>Poland</span>
                    )}
                    {country === 'de' && (
                        <span>Germany</span>
                    )}
                    {country === 'cz' && (
                        <span>Czech Republic</span>
                    )}
                </div>
            </div>
            <div className="search-content">
                <NewsList news={news} />
            </div>
        </div>
    )
}