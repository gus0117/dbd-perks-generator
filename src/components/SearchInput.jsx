import React, { useState, useEffect } from 'react'

const SearchInput = ({ perks, getFilteredList }) => {
    const [filter, setFilter] = useState("")

    const filterList = () => (
        perks.filter( p => (
            p.perkName.toLowerCase().includes(filter.toLowerCase())
        ))
    )

    useEffect(()=>{
        getFilteredList(filterList())
    },[filter])

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

  return (
    <div className='search'>
        <label>Search</label>
        <input className='input-search' type="text" name="verb" value={filter} onChange={handleFilter} />
        <button className='btn-search' onClick={() => setFilter("")}>Clear</button>
    </div>
  )
}

export default SearchInput