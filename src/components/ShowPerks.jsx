import React, { useEffect, useState } from 'react'
import data from '../data/perksData'
import Perk from './Perk'
import '../styles/ShowPerks.css'
const ShowPerks = () => {
  const[perksList, setPerksList] = useState([])

  useEffect(() => {
    setPerksList(data)
  }, [perksList])

  return (
    <>
      <h1 className="title-1">Listado de Perks</h1>
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