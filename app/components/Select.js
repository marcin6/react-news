import React from 'react'

export default function Select({
    name,
    elements,
    value,
    elementOnChange
}) {

    return (
        <div>
            <select name={name} value={value} onChange={elementOnChange}>
                {elements.map((el, idx) => (
                    <option key={idx} value={el.value}>{el.text}</option>
                ))}
            </select>
        </div>
    )
}