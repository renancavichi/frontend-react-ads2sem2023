import Header from "@/components/layout/Header"
import CustomButton from "@/components/utils/CustomButton"

const user = {name: "Renan", email: "email@gmail.com", photo: "urldafoto"}

const Contato = () => {
  return (
    <>
        <Header />
        <h1>Contato</h1>
        <CustomButton titulo="Login"/> 
        <CustomButton user={user}/>
    </>
  )
}

export default Contato