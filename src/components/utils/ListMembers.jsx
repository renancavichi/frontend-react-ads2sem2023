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
            <form>
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