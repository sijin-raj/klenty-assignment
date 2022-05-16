import React from 'react'



const Button = ({to, classNames="", text, width="w-auto"}) => {
  return (
    <>
        <a href={to}  className={`px-3 py-3 flex items-center rounded-md justify-center text-sm  font-medium  ${width} text-white bg-primary`}>
            {text}
        </a>
    </>
  )
}

export default Button
