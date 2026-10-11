
import React from 'react'
import { RiBtcLine } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";




const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row img_1 m-0 p-0">
          <div className="col-12 text-light ps-5 d-flex justify-content-center align-items-center">
            <div className="text-center py-5">
              <h2 className='text-danger'> <i> Be Strong, Be Fit</i></h2>
              <h1>Make yourself fit and strong</h1>
              <h1>Than your Excuses</h1>
              <button className='btn btn-danger mt-3'>Get Started</button>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 text_1">
            <div className="row">
              <div className="col-md-5 mx-auto p-4">
                <img 
                  src="https://a-static.besthdwallpaper.com/muscular-handsome-man-lifting-weights-in-gym-and-showing-all-his-muscles-bodybuilder-wallpaper-3000x2000-91997_42.jpg" 
                  alt="Bodybuilder" 
                  className="img-fluid" 
                />
              </div>
              <div className="col-md-6 text-light p-4">
                <h4 className='text-danger'>About Us</h4>
                <h2>Every Day is A Chance To Become Better</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa rem, eveniet voluptatem ab
                   veniam eos illo magni quasi, commodi sunt. Delectus ab dolorum harum fuga nihil natus, dolores impedit,
                    iure, quas sint cum voluptas saepe deserunt optio quidem dolore veritatis inventore nobis nisi
                     rem maiores porro! Nihil, nam iure?</p>
                <div className="row ">
                  <div className="col-sm-5 p-2">
                    <h4 className='text-danger'> Body and Mind</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. provident 
                      .</p>
                  </div>
                  <div className="col-sm-5">
                    <h4 className='text-danger'> Healthy Life</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, unde!</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5">
                    <h4 className='text-danger'> Strategies </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, repellendus!</p>
                  </div>
                  <div className="col-sm-5">
                    <h4 className='text-danger'> WorkOut </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,   </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* start  Gallary */}
        <div className="row ">
          <div className="col-sm-12  text_1 d-flex">
            <div className="row  ">
             <div className="col-sm-10 mx-auto  p-3">
              <div className="row ">
                <div className="col-sm-4">
                  <img src="https://as1.ftcdn.net/v2/jpg/01/96/77/82/1000_F_196778284_TrdYaiIOwmaPoeaWTi2s7x5niojrcUAw.jpg" alt="" style={{height:"280px"}} />
                </div>
                <div className="col-sm-4 bg-dark text-center mx-auto p-3">
                <h1 className='text-light fs-0'> <RiBtcLine /> </h1>
                  <h3 className='text-danger'>  Gym For Men</h3>
                  <p className='text-light fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, est!</p>
                </div>
                <div className="col-sm-4">
                  <img src="https://images5.alphacoders.com/103/thumb-1920-1036943.jpg" alt="" style={{height:"280px",width:"100%"}} />
                </div>
                <div className="col-sm-4 bg-dark text-center p-3">
                <h1 className='text-light fs-0'>   <RiBtcLine /></h1>
                  <h3 className='text-danger'>  Gym For Men</h3>
                  <p className='text-light fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, est!</p>
                </div>
                <div className="col-sm-4">
                  <img src="https://wallpapercave.com/wp/wp8852211.jpg" alt="" style={{height:"280px"}} />
                </div>
                <div className="col-sm-4 bg-dark text-center p-3">
                <h1 className='text-light fs-0'> <RiBtcLine /> </h1>
                  <h3 className='text-danger'>  Gym For Men</h3>
                  <p className='text-light fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, est!</p>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
        {/*  end Gallary */}

        <div className="row ">
          <div className="col-sm-12 text_1 p-5">
            <div className="row">
              <div className="col-sm-11 mt-4 mx-auto">
                <div className="row ">
                  <div className="col-sm-4 p-3">  
                    <h4 className='text-danger'> Pricing plan</h4>
                    <p className='text-light fs-2'> Affordable Pricing Plan For Your </p>
                    <p className='text-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum quisquam officiis
                       velit at eveniet odit optio sint quaerat, fugiat consequuntur expedita voluptas rem ab
                        eaque blanditiismodi!</p>
                        
                        <p className='text-light'> <span className='text-danger fs-4'>   <FiCheck /></span> Card Experience</p>
                        <p className='text-light'> <span className='text-danger fs-4'>   <FiCheck /></span> Weight UFTing  </p>
                        <p className='text-light'> <span className='text-danger fs-4'>   <FiCheck /></span> Diet Plans  </p>
                        <p className='text-light'> <span className='text-danger fs-4'>   <FiCheck /></span> Over All Results  </p>
                        <button className='btn btn-danger '> Get Started</button>
                  </div>
                  <div className="col-sm-4 bg-dark text-center p-3"> 
                    <h2 className='text-light text-center mt-4'> Basic Plan <br /> <FiDollarSign /><span className='text-danger fs-1'>30</span>/Mo </h2>
                    <p className='text-light mt-4 fs-4'> <span className='text-danger fs-4'>   <FiCheck /></span> Personal Experience</p>
                    <p className='text-light mt-4 fs-4'> <span className='text-danger fs-4'>   <FiCheck /></span> Card Experience</p>
                        <p className='text-light  fs-4'> <span className='text-danger fs-4'>   <FiCheck /></span> Weight UFTing  </p>
                        <p className='text-light  fs-4'> <span className='text-danger fs-4'>   <FiCheck /></span> Diet Plans  </p>
                        <p className='text-light  fs-4'> <span className='text-danger fs-4'>   <FiCheck /></span> Over All Results  </p>
                        <button className='btn btn-danger'> Get Started</button>
                  </div>
                  <div className="col-sm-4 text-center p-3">
                  <h2 className='text-light text-center mt-4'> Premium  Plan <br /> <FiDollarSign /><span className='text-danger fs-1'>90</span>/Mo </h2>
                    <p className='text-light mt-4 fs-4'> <span className='text-danger fs-4'>   <FiCheck /></span> Personal Experience</p>
                    <p className='text-light mt-4 fs-4'> <span className='text-danger fs-4'>   <FiCheck /></span> Card Experience</p>
                        <p className='text-light  fs-4'> <span className='text-danger fs-4'>   <FiCheck /></span> Weight UFTing  </p>
                        <p className='text-light  fs-4'> <span className='text-danger fs-4'>   <FiCheck /></span> Diet Plans  </p>
                        <p className='text-light  fs-4'> <span className='text-danger fs-4'>   <FiCheck /></span> Over All Results  </p>
                        <button className='btn btn-danger'> Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* start  footer  */}

          <div className="row">
            <div className="col-sm-12 text_1">
              <div className="row">
               <div className="col-sm-11 mx-auto">
              <div className="row text-light ">
                <div className="col-sm-3 bg-dark p-4">
                   <img src=" https://content.jdmagicbox.com/comp/kanpur/g6/0512px512.x512.170613193647.f6g6/catalogue/lifestyle-fitness-and-nutrition-store-lajpat-nagar-kanpur-exercise-bicycle-dealers-wpgudpmach.jpg?clr=660000" alt="" style={{height:"80px"}} />
                   <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Fugiat distinctio, aliquam itaque nemo accusantium at natus nulla nihil ex ipsam.</p>
                    <p> Phone : 1234567890</p>
                    <p> E-mail: info@sitename.com</p>
                    <p> Website:htt://sitename.com</p>
                </div>
                <div className="col-sm-3 bg-dark text-light p-3"> 
                  <h2 className='mt-2'> Services </h2>
                  <p className='mt-3'> → Home </p>
                  <p> → About Us </p>
                  <p> → Blog  </p>
                  <p> → Gallery </p>
                  <p> → Contact Us  </p>
                </div>
                <div className="col-sm-3 bg-dark text-light p-3 ">
                  <h2 className='mt-2'> Latest Posts </h2>
                  <p className='mt-3'> Ullamcor persed Naequesed Accumasan Dapibus Metus Centuris  </p>
                  25, jan, 2025
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi voluptatibus
                     necessitatibus voluptatum id atque fugit debitis! Quos, officia maxime.</p>
                     <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quo aut eos ut beatae 
                      voluptatum minus, cupiditate doloribus nulla inventore.</p>
                </div>
                <div className="col-sm-3 bg-dark text-light p-3">
                  <h2 className='mt-3'> Opening Houes </h2>
                  <p> Monday - Friday : 7:00 AM - 8:00 PM </p>
                  <p> Saturday - Sunday :5:00 - 9:00 PM </p>
                  <p> +91 9554894619 </p>
                </div>
              </div>
               </div>
              </div>
            </div>
          </div>
 

        {/*  end footer */}
      </div>
    </>
  )
}

export default Home
