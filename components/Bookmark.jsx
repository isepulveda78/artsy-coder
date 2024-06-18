import Link from "next/link"

const Bookmark = ({page}) => {
  return (
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item inactive fw-bold"><Link className="text-decoration-none" href="/">Home</Link></li>
      <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">{page}</li>
    </ol>
  </nav>
  )
}

export default Bookmark