'use client'
import { useState } from 'react'
import Editor from 'react-simple-wysiwyg'
import AdminSidebar from '@/components/AdminSidebar'
import { toast } from 'react-toastify'

const AddDoc = () => {

        const [ theme, setTheme ] = useState('')
        const [ pageText, setPageText ] = useState('')

        const [wasSubmitted, setWasSubmitted] = useState(false)

        const handleSubmit = async (e) => {
            e.preventDefault()

            const data = {
                theme,
                pageText
            }

            try {
                const res = await fetch('/api/documentation', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  })

                if(res.status === 200 ){
                    toast.success('Theme saved')
                    setWasSubmitted(true)
                }else{
                    toast.error('Error saving documenation')
                }
            } catch (error) {
                console.log('Error saving documenation')
            } finally {
                setTheme('')
                setPageText('')
            }
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
                        Add Documentation
                    </div>
                    <div className='card-body'>
                    <form 
                    onSubmit={handleSubmit}
                    >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Theme Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="theme"
                            placeholder="Theme Name" 
                            required
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            />
                        </div>
                            <Editor 
                            id="pageText"
                            value={pageText}
                            onChange={(e) => setPageText(e.target.value)}
                            />
                            <div className="mt-3 float-end">
                                <button 
                                className='btn btn-outline-danger'
                                type='submit'
                                >Submit</button>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddDoc