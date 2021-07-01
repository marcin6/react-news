import React from 'react'
import './../styles/news.sass'

export default function News({ news }) {
    return (
        <>
            {news.length && news.map((el, idx) => (
                <a key={idx} href={el.url} target="_blank">
                    <div className="newsbox" 
                        style={{
                            backgroundImage:
                                `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%),
                        url(${el.urlToImage})`
                        }}
                    >
                        <h3>{el.title}</h3>
                        <div className="newsbox-description">{el.description}</div>
                        <div className="newsbox-date">{el.publishedAt}</div>
                    </div>
                </a>


            ))}
        </>
    )
}