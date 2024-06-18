'use client'
import backgroundImage from '@/assets/images/background.png'
import Search from './Search'

const Header = ({ title, subtitle }) => {
  return (
    <header className="masthead background pb-5" style={{ backgroundImage: `url(${backgroundImage.src})`}}>
            <div className="container">
                    <div className="mt-5">
                        <div className="fs-3 text-dark negative-margin-title varelaRound">{ title }</div>
                        <div className="h1 fs-1 text-uppercase text-primary varelaRound">{ subtitle }</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3 mb-5">
                            <div className="my-1">
                            <Search />
                            </div>
                        </div>
                  </div>
            </div>
    </header>
  )
}

export default Header