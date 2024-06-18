import Link from "next/link"
import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="p-4 footer shadow">
    <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-start text-dark fw-bold">Copyright  Your Website 2023</div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <Link className="btn btn-primary btn-social mx-2" href="#!" aria-label="Twitter"><FaFacebookF /></Link>
                    <Link className="btn btn-primary btn-social mx-2" href="#!" aria-label="Facebook"><FaGithub /></Link>
                    <Link className="btn btn-primary btn-social mx-2" href="#!" aria-label="LinkedIn"><FaYoutube /></Link>
                </div>
                <div className="col-lg-4 text-lg-end">
                    <Link className="text-decoration-none me-3 text-dark fw-bold" href="#!">Privacy Policy</Link>
                    <Link className="text-decoration-none text-dark fw-bold" href="#!">Terms of Use</Link>
                </div>
            </div>
    </div>
</div>
  )
}

export default Footer