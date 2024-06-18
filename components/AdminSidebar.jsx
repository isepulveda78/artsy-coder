import Link from 'next/link'

const AdminSidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: '280px', marginTop: '75px' }}>
    <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <span className="fs-4">Admin</span>
    </Link>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link href="/documentation/add" className="nav-link active" aria-current="page">
          Add Document
        </Link>
      </li>
      <li>
        <Link href="#" className="nav-link link-body-emphasis">
          Dashboard
        </Link>
      </li>
      <li>
        <Link href="#" className="nav-link link-body-emphasis">
          Orders
        </Link>
      </li>
      <li>
        <Link href="#" className="nav-link link-body-emphasis">
          Products
        </Link>
      </li>
      <li>
        <Link href="#" className="nav-link link-body-emphasis">
          Customers
        </Link>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <Link href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    
        <strong>mdo</strong>
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li><Link className="dropdown-item" href="#">New project...</Link></li>
        <li><Link className="dropdown-item" href="#">Settings</Link></li>
        <li><Link className="dropdown-item" href="#">Profile</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" href="#">Sign out</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default AdminSidebar