'use client'

import {useState} from 'react'
import './CardUser.css'

const CardUser = ({user}) => {

  const [showCard, setShowCard] = useState(true)

  const handleDelete = async (idUser) => {
    const objUser = {
      id: idUser
    }
    const response = await fetch('http://localhost:3300/user',
      {
        cache: 'no-store',
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objUser)
      }
    )
    if(response.ok){
      const result = await response.json()
      if(result?.success){
        setShowCard(false)
      }
    }
  }

  return (
    <>
      {
      showCard ?
        <div className="card-user">
          <img src={user.photo} alt={user.name} width="70px" height="70px" />
          <div>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              <p>
                <span className="delete" onClick={() => handleDelete(user.id)}>Excluir</span>
                <span>Editar</span>
              </p>
          </div>
        </div>
      : null
      }
    </>
  )
}


export default CardUser