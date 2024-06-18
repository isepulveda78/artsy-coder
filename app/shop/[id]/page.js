import Bookmark from '@/components/Bookmark'
import Image from "next/image"
import ProductImage from "@/assets/images/productImageLarge.png"
import Link from 'next/link'
import { FaCheck } from "react-icons/fa"

const SingleShopItem = () => {
  return (
        <div className='container shop-single'>
          <Bookmark page="Theme Name" />
          <div className='row'>
              <div className='col-md-8 col-sm-12 my-2'>
                  <div className='card'>
                      <div className='card-body'>
                      <div className='lead fs-3 mb-2'>
                          Theme Name
                      </div>
                      <Image className="rounded text-center img-fluid" src={ProductImage} width={900} height={308} alt="..." />
                        <div className='mt-2'>
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
              </div>
              <div className='col-md-4 col-sm-12 my-2'>
                <div className='card'>
                    <div className='card-body'>
                      <div className="d-grid gap-2 text-center">
                        <button className="btn btn-primary" type="button">Buy</button>
                      </div>
                      <div className='text-center my-2'>
                      <Link className='text-decoration-none' href="/documentation"><small>Demo</small></Link><small>|</small> <Link className='text-decoration-none' href="/documentation"><small>Documenation</small></Link>
                      </div>
                      <div className='mt-3'>
                          <div className='fs-5'>Features</div>
                            <div className="mt-1">
                                <ul className='feature-list'>
                                    <li><small><FaCheck className='text-success me-2' /></small>SEO</li>
                                    <li><small><FaCheck className='text-success me-2' /></small>SEO</li>
                                    <li><small><FaCheck className='text-success me-2' /></small>SEO</li>
                                </ul>
                            </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  )
}

export default SingleShopItem