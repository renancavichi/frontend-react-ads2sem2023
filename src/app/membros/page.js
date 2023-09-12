import Header from "@/components/layout/Header"
import './Membros.css'

const getMembers = async () => {
  const response = await fetch('http://localhost:3300/user/list', {cache: 'no-store'})
  return await response.json()
}

const Membros = async () => {
  const users = await getMembers()
  const nome = "Renan"

  return (
    <>
        <Header />
        <h1>Membros</h1>
        <p>Nome: {nome}</p>
        <h2>Emails:</h2>
        {
          users.map((user) => {
            return (
              <div key={user.id} className="card-user">
                <img src={user.photo} alt={user.name} width="70px" height="70px" />
                <div>
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>
              </div>
            )
          })
        }
    </>
  )
}

export default Membros