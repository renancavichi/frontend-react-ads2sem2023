import Header from "@/components/layout/Header"
import Button from "@/components/utils/Button"

const user = {name: "Renan", email: "email@gmail.com", photo: "urldafoto"}

const Contato = () => {
  return (
    <>
        <Header />
        <h1>Contato</h1>
        <Button variant="primary" title="Login"/> 
        <Button variant="secondary" title="Cadastre-se"/>
        <Button variant="ghost" title="Cancelar"/>
    </>
  )
}

export default Contato