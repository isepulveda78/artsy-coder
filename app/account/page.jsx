import AccountProductCard from "@/components/AccountProductCard"
import Banner from "@/components/Banner"
import NavItem from "@/components/NavItem"
import Sidebar from "@/components/Sidebar"
import Link from "next/link"
const Account = () => {
  return (
    <>
        <div className="banner-margin">
            <Banner page="Account"  />
        </div>
        <div className="container">
            <div className="row mt-5">
            <Sidebar title="Navigation">
              <NavItem page="documentation" navLink="documentation" navText="Documentation"/>
              <NavItem page="documentation" navLink="documentation" navText="Documentation"/>
              <NavItem page="documentation" navLink="documentation" navText="Documentation"/>
            </Sidebar>
                <div className="col-lg-10 col-md-10 col-sm-12">
                    <h3 className="mb-2">Your items</h3>
                    <div className="row">
                        <AccountProductCard />
                        <AccountProductCard />
                        <AccountProductCard />
                        <AccountProductCard />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Account