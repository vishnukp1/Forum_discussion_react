const InputBar = ({className, placeholder ,type}) => {
  return (
    <div>
        <input className={` ${className} `} placeholder={placeholder} type={type} />
    </div>
  )
}

export default InputBar