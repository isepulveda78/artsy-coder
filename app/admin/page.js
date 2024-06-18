'use client'
import { useState } from 'react'
import Editor from 'react-simple-wysiwyg'
import Link from 'next/link'

const Admin = () => {

        const [html, setHtml] = useState('my <b>HTML</b>');
        
        function onChange(e) {
          setHtml(e.target.value);
        }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-12">
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: '280px', marginTop: '75px' }}>
    <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <span className="fs-4">Admin</span>
    </Link>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link href="#" className="nav-link active" aria-current="page">
          Home
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
            </div>
            <div className="col-md-8 col-sm-12" style={{ marginTop: '100px' }}>
                <div className='card'>
                    <div className='card-header'>
                        Page
                    </div>
                    <div className='card-body'>
                        <Editor value={html} onChange={onChange} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin