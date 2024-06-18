'use client'
import { useState } from 'react'
import Editor from 'react-simple-wysiwyg'
import AdminSidebar from '@/components/AdminSidebar'

const Admin = () => {

        const [html, setHtml] = useState('my <b>HTML</b>');
        
        function onChange(e) {
          setHtml(e.target.value);
        }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-12">
            <AdminSidebar />
            </div>
            <div className="col-md-9 col-sm-12" style={{ marginTop: '100px' }}>
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