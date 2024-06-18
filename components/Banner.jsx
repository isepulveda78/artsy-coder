import React from 'react'

const Banner = ({page}) => {
  return (
    <div className="py-3 bg-secondary">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4 className="text-white mt-1 ">{page}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner