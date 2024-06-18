import Link from "next/link"

const NavItem = ({ page, navLink, navText }) => {
  return (
    <li className="nav-item">
        <Link className="nav-link link-body-emphasis text-decoration-none" href={`/${page}/${navLink}`}><small>{navText}</small></Link>
    </li>
  )
}

export default NavItem