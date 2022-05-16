import React from 'react'
import Link from 'next/link'



const NavLink = ({text, to, classNames=""}) => {
  return (
    <>
        <Link href={to} className={`text-sm text-secondary font-normal  hover:text-primary capitalize cursor-pointer ${classNames}`}>
            {text}
        </Link>
    </>
  )
}

export default NavLink
