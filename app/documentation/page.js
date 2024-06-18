import Bookmark from "@/components/Bookmark"
import Header from "@/components/Header"
import NavItem from "@/components/NavItem"
import Sidebar from "@/components/Sidebar"

const Documenation = () => {
  return (
    <>
        <Header title="" subtitle="Documenation" />
        <section className="documentation">
        <div className="container">
            <Bookmark page="Documentation"/>
            <div className="row">
              <Sidebar title="Navigation">
                  <NavItem page="account" navLink="" navText="Account" />
                  <NavItem page="account" navLink="" navText="Account" />
              </Sidebar>
                <div className="col-lg-10 col-md-10 col-sm-12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Velit aliquet sagittis id consectetur purus. Justo donec enim diam vulputate ut pharetra sit. 
                        In arcu cursus euismod quis viverra nibh. In cursus turpis massa tincidunt dui ut ornare lectus sit. Metus 
                        vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Tristique risus nec feugiat in fermentum 
                        posuere. Risus nec feugiat in fermentum. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. 
                        Bibendum arcu vitae elementum curabitur vitae nunc sed. Nulla pellentesque dignissim enim sit amet venenatis 
                        urna cursus eget. Sodales ut eu sem integer vitae justo. Posuere sollicitudin aliquam ultrices sagittis orci.
                         Sit amet dictum sit amet.
                    </p>
                    <p>
                        Consequat ac felis donec et. Nibh ipsum consequat nisl vel pretium lectus. 
                        Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Odio morbi 
                        quis commodo odio aenean sed adipiscing. Ipsum dolor sit amet consectetur adipiscing elit
                         pellentesque habitant morbi. Facilisi nullam vehicula ipsum a arcu cursus vitae. Est 
                         ultricies integer quis auctor elit sed. Consequat interdum varius sit amet mattis. 
                         Sit amet purus gravida quis blandit turpis. Nulla pellentesque dignissim enim sit 
                         amet venenatis. Faucibus nisl tincidunt eget nullam non nisi est. Commodo sed egestas 
                         egestas fringilla phasellus faucibus scelerisque eleifend. Lorem ipsum dolor sit amet 
                         consectetur adipiscing. Purus sit amet luctus venenatis lectus magna. Natoque penatibus 
                         et magnis dis. Tempor id eu nisl nunc.
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Documenation