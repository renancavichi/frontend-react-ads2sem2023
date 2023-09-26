import Header from "@/components/layout/Header"
import ListMembers from "@/components/utils/ListMembers"
import '@/components/utils/Modal.css'

const Membros = async () => {
  return (
    <>
        <Header />
        <ListMembers />
        <div className="modal">
          <main>
            <h1>Exemplo Modal</h1>
          </main>
        </div>
    </>
  )
}

export default Membros