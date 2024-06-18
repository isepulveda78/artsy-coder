
const Sidebar = ({title, children}) => {
  return (
    <div className="col-lg-2 col-md-2 mb-5">
          <div>
            {title}
          </div>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            {children}
          </ul>
      </div>
  )
}

export default Sidebar