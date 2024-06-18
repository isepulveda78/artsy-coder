'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"

const NavBar = () => {

  const [ open, setOpen ] = useState(false)

    const openAndClose = () => {
          if(open){
            setOpen(false)
          }else{
            setOpen(true)
          }
    }

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow">
        <div className="container">
            <Link className="text-decoration-none varelaRound text-primary h3 mt-1" href="/">Artsy Coder</Link>
            <button onClick={openAndClose} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                {open ? 
                ( <GrClose className="text-primary fs-3" /> )
                    :
                ( <GiHamburgerMenu className="text-primary fs-3" /> )
            }
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto py-4 py-lg-0">
                    <li className="nav-item"><Link className="nav-link fw-bold link-dark" href="/shop">Shop</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold link-dark" href="/documentation">Documenation</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold link-dark" href="/account" >Account</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold link-dark" href="/login" >Login</Link></li>
                    <li className="nav-item"><Link className="nav-link fw-bold link-dark" href="/admin" >Admin</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar