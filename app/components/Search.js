import React, { useState, useEffect, useContext } from 'react'
import { SearchContext } from './../context/SearchContext';
import Select from './Select';
import NewsList from './NewsList';
import ErrorWall from './Error';
import './../styles/search.sass'

const API_KEY = 'a3e08545384940a79558c6b9fb59c3d8';
const API = 'https://newsapi.org/v2/top-headlines?country='

export default function Search() {

    const { countryList,
        numberList,
        country,
        setCountry,
        number,
        setNumber,
        error,
        setError
    } = useContext(SearchContext);

    const [news, setNews] = useState([]);

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
            <h1>News</h1>
            <div className="search-header">
                <div className="search-country">
                    Choose a country
                    <Select name={'country'} value={country} elements={countryList} elementOnChange={e => handleSelect(e)} />
                </div>
                <div className="search-page-size">
                    Choose a number of news
                    <Select name={'number'} value={number} elements={numberList} elementOnChange={e => handleSelect(e)} />
                </div>
            </div>
            <div className="search-choose_option">
                Display {number} latest news for the country
                {countryList.filter(el => el.value === country).map((el, idx) => (
                    <span key={idx}>{el.text}</span>
                ))}
            </div>

            {error === null ?
                <div className="search-content">
                    <NewsList news={news} />
                </div>
                : <ErrorWall />}
        </div>
    )
}