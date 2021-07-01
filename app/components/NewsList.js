import React from 'react'
import News from './News'
import './../styles/news-list.sass'

export default function NewsList({ news }) {
    return (
        <div className="newslist-container">
            <div className="newslist-box">
                <News news={news} />
            </div>
        </div>
    )
}