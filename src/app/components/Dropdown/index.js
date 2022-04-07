import React, { useEffect } from 'react'

/* Item contains key, value - key might be diff from value shown to user */
/* Input is uncontrolled */

const Dropdown = ({ name, list, onItemSelected }) => {

    const all = {key: 'all', value: 'All'}

    const onSelect = (key) => {
        if (key == 'all') onItemSelected(all)

        const item = list.filter(i => i.key == key)[0]
        if (item) onItemSelected(item) 
    }

    if (list) {
        return (
            <select id={name} name={name} onChange={e => onSelect(e.target.value)}>
                {[ all, ...list].map(i => (
                     <option key={i.key} value={i.key}>{i.value}</option>
                ))}
          </select>
        )
    }

    return null
}

export default Dropdown