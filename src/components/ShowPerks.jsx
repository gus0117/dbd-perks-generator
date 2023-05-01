import React, { useEffect, useState } from 'react'
import data from '../data/perksData'
import Perk from './Perk'
import '../styles/ShowPerks.css'
import SearchInput from './SearchInput'
const ShowPerks = () => {
  const[perksList, setPerksList] = useState([])

  const compareByName = (a, b) => {
    if(a.perkName < b.perkName){
      return -1
    }
    if(a.perkName > b.perkName){
      return 1
    }
    return 0
  }

  const getFilteredList = (filteredList) => {
    setPerksList(filteredList)
  }

  useEffect(() => {
    setPerksList(data.sort(compareByName))
  }, [])

  return (
    <>
      <h1 className="title-1">Listado de Perks</h1>
      <SearchInput 
        perks={data}
        getFilteredList={getFilteredList}
      />

      <div className="perks-list">
        {
          perksList.map( (p, index) => (
            <Perk
              key= {index}
              perkName={p.perkName}
              description={p.description}
              owner={p.owner}
              url={p.url}
            />
          ))
        }
      </div>
    </>
  )
}

export default ShowPerks