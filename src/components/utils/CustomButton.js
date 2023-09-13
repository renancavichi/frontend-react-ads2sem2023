const CustomButton = ({user}) => {
  return (
    <>
        <button>{user?.name}</button>
        <p>Test: {user?.email}</p>
        <p>Test: {user?.photo}</p>
    </>
  )
}

export default CustomButton