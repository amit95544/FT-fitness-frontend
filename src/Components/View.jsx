import React, { useEffect, useState } from "react";
import axios from "axios";

const View = () => {
  const [data, setData] = useState([]);

  const fatchData = async()=>{
    const url = 'http://localhost:8000/get'
    const response = await axios.get(url);
    setData(response.data);
  }

useEffect(()=>{
  fatchData();
},[])

 
const deleteData = async(_id)=>{
  const url = `http://localhost:8000/delete/${_id}`
  const result = await axios.delete(url,{
    headers:{
      'content-type': 'application/json',
    }
  })
  fatchData()
 
}
  return (
    <>
   
    <div className="d-flex flex-wrap gap-3 p-3 bg-secondary position-sticky top-0">
      {data.map((item, index) => (
        <div className="card" style={{ width: "17rem" }} key={index}>
          <img src="gym_1.avif" className="card-img-top"  />
          <div className="card-body bg-secondary">
           
            <p className="card-text"><strong>Name:</strong> {item.name}</p>
            <p className="card-text"><strong>Email:</strong> {item.email}</p>
            <p className="card-text"><strong>Number:</strong> {item.number}</p>
            <p className="card-text"><strong>Password:</strong> {item.password}</p>
            <button className=" btn btn-danger me-2" onClick={()=> deleteData(item._id)}> Delete</button>
            <button className=" btn btn-info "> Edit </button>
          </div>
        </div>
      ))}
   
  
{/* start  slider  */}
  
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
                  <p> 1234567890 </p>
                </div>
              </div>
               </div>
              </div>
            </div>
          </div>
           </div>
 
{/*  end slider  */}

    </>
  );
};

export default View;
