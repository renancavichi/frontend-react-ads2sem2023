'use client'

import { useState, useEffect } from "react"
import CardUser from "@/components/cards/CardUser"
import Modal from "@/components/utils/Modal"

const ListMembers = () => {
    const [users, setUsers] = useState([])
    const [modalSignInIsOpen, setModalSignInIsOpen] = useState(false)

    useEffect(() => {
        const getMembers = async () => {
            const response = await fetch('http://localhost:3300/user/list', {cache: 'no-store'})
            const data = await response.json()
            setUsers(data)
        }
        getMembers()
    } , [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            pass: event.target.pass.value,
            photo: event.target.photo.value,
        }
        const response = await fetch('http://localhost:3300/user',
        {
            cache: 'no-store',
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        }
        )
        if(response.ok){
            const result = await response.json()
            if(result?.success){
                setUsers([...users, result.user])
            }
        }

    }

    return (
    <>
        <h1>Membros</h1>
        <button style={{margin: '0 0 15px 0'}} onClick={() => setModalSignInIsOpen(true)}>Cadastrar</button>
        {
        users.map((user) => {
            return (
            <CardUser key={user.id} user={user} />
            )
        })
        }
        <Modal isOpen={modalSignInIsOpen} changeOpen={setModalSignInIsOpen}>
            <h1>Cadastra-se</h1>
            <form onSubmit={handleSubmit}>
                Nome: <input type="text" name="name" /><br />
                Email: <input type="text" name="email" /><br />
                Pass: <input type="text" name="pass" /><br />
                Photo: <input type="text" name="photo" /><br />
                <br />
                <input type="submit" value="Cadastrar" />
            </form>
        </Modal>
    </>
  )
}

export default ListMembers