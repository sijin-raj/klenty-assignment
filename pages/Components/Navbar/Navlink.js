import React from 'react'
// import Link from 'next/link'



const NavLink = ({text, to, classNames=""}) => {
  return (
    <>
        <a href={to} className={`text-sm text-secondary font-normal  hover:text-primary capitalize cursor-pointer ${classNames}`}>
            {text}
        </a>
    </>
  )
}

export default NavLink
