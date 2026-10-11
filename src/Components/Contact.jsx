import React from 'react'

const Contact = () => {
  return (
   <>
  <div className="container-fluid img_3 py-5">  {/* container ya container-fluid use karo */}
  <div className="row justify-content-center  ">
    <div className="col-12 text-center ">
      <h1> Contact <span className="text-warning">Us</span> </h1>
    </div>
    <div className="col-md-5 col-sm-8 col-10 mb-4"> 
      <img 
        src="phone_1.jpg" 
        className="img-fluid rounded ms-"  /* img-fluid se width to responsive hogi */
        alt="Contact" 
        style={{ height:"auto", width:"100%" }}/> 
    </div>
    <div className="col-md-5 col-sm-8 col-10 bg-light p-4" style={{height:"445px"}}> 
      <form className='m-5'>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter your name" 
            required
          />
        </div>
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter your Email" 
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            className="form-control"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div className="">
          <button
            type="submit"
            className="btn btn-outline-danger"
          >
            Send Message
          </button>
        </div>
      </form>
      
    </div>
    <div className="row">
    <div className="col-sm-12 mx-auto bg-info ">
     <div className="row d-flex justify-content-center">
      <div className="col-sm-5 bg-danger">ll</div>
      <div className="col-sm-5 bg-dark">ll</div>
     </div>
    </div>
  </div>
  </div>
  
</div>
  
    {/*   start footer  */}
    
     <div className="row mt-1">
          <div className="col-12 text_1">
            <div className="row">
              <div className="col-11 mx-auto">
                <div className="row text-light">
                  <div className="col-12 col-md-3 bg-dark p-4">
                    <img
                      src="https://content.jdmagicbox.com/comp/kanpur/g6/0512px512.x512.170613193647.f6g6/catalogue/lifestyle-fitness-and-nutrition-store-lajpat-nagar-kanpur-exercise-bicycle-dealers-wpgudpmach.jpg?clr=660000"
                      alt=""
                      style={{ height: "80px" }}
                    />
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fugiat distinctio, aliquam itaque nemo accusantium at
                      natus nulla nihil ex ipsam.
                    </p>
                    <p>Phone : 1234567890</p>
                    <p>E-mail: info@sitename.com</p>
                    <p>Website: htt://sitename.com</p>
                  </div>
                  <div className="col-12 col-md-3 bg-dark text-light p-3">
                    <h2 className="mt-2">Services</h2>
                    <p className="mt-3">→ Home</p>
                    <p>→ About Us</p>
                    <p>→ Blog</p>
                    <p>→ Gallery</p>
                    <p>→ Contact Us</p>
                  </div>
                  <div className="col-12 col-md-3 bg-dark text-light p-3">
                    <h2 className="mt-2">Latest Posts</h2>
                    <p className="mt-3">
                      Ullamcor persed Naequesed Accumasan Dapibus Metus Centuris
                    </p>
                    <p>25, jan, 2025</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit excepturi voluptatibus necessitatibus voluptatum id
                      atque fugit debitis! Quos, officia maxime.
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Saepe quo aut eos ut beatae voluptatum minus, cupiditate
                      doloribus nulla inventore.
                    </p>
                  </div>
                  <div className="col-12 col-md-3 bg-dark text-light p-3">
                    <h2 className="mt-3">Opening Hours</h2>
                    <p>Monday - Friday : 7:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday : 5:00 - 9:00 PM</p>
                    <p>1234567890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/*  end footer */}
   {/* </div> */}
   </>
  )
}

export default Contact
