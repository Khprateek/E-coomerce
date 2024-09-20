import "./toggle.scss"

const Toggle = ({setOpen}) => {
  return (
    <button onClick={()=> setOpen(prev=>!prev)}>
      BUT
    </button>
  )
}

export default Toggle
