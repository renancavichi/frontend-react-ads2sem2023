'use client'

import { useState, useEffect } from "react"
import CardUser from "@/components/cards/CardUser"

const ListMembers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getMembers = async () => {
            const response = await fetch('http://localhost:3300/user/list',{cache: 'no-store'})
            const data = await response.json()
            setUsers(data)
        }
        getMembers()
    } , [])


    return (
    <>
        <h1>Membros</h1>
        <button style={{margin: '0 0 15px 0'}}>Cadastrar</button>
        {
        users.map((user) => {
            return (
            <CardUser key={user.id} user={user} />
            )
        })
        }
    </>
  )
}

export default ListMembers