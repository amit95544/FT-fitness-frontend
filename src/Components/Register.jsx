import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    number: yup.number().required(),
    password: yup.string().required(),
  })
  .required();

const Register = () => {
  const naviget = useNavigate()
   const { register, handleSubmit, formState :{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) =>{
    const url = 'http://localhost:8000/post'
    const response = await axios.post(url,data)
    console.log(response.data)
    Swal.fire({
  title: "Register Successfully !!",
  icon: "success",
  draggable: true
});
    // naviget('/view')
  }


  return (
    <>
      <div className="container-fluid">
        <div className="row img_2 mx-auto">
          <div className="col-12">
            <div className="row py-5 px-5">
              <div className="col-sm-12 col-md-5 mx-auto form_1 rounded p-4">
                
                <form onSubmit={handleSubmit((d) => onSubmit(d))}>
                  <input type="text" {...register('name')} className="form-control mt-4" name="name" />
                  {errors.name?.message && <p className="text-danger">{errors.name?.message}</p>}

                   <input type="email" {...register('email')} className="form-control mt-4" placeholder="Enter your email" />
                    {errors.email?.message && <p className="text-danger">{errors.email?.message}</p>}

                  <input type="number" {...register('number')} className="form-control mt-4" placeholder="Enter your number" />
                  {errors.number?.message && <p className="text-danger">{errors.number?.message}</p>}

                  <input  type="password" {...register('password')} className="form-control mt-4"  placeholder="Enter your password"/>
                  {errors.password?.message && <p className="text-danger">{errors.password?.message}</p>}

                  <button className="form-control mt-4 bg-danger border-0"> {" "}
                    Save{" "}
                  </button>
                </form>
              </div>
              {/* <div className="col-sm-12 col-md-6 mx-auto px-5" style={{ height: '450px' }}>
                <img
                  src="gym_2.avif"
                  alt=""
                  className="img-fluid rounded "
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12  ">
            <h2 className="mx-auto text-center mt-3">
              {" "}
              <span className="text-danger "> About</span> Us{" "}
            </h2>
            <div className="row mt-4">
              <div className="col-sm-4 bg-dark mx-auto">
                <img src="https://img.freepik.com/free-photo/medium-shot-woman-holding-weight_23-2149337999.jpg " alt=""  style={{width :"520px"}}/>
              </div>
              <div className="col-sm-7  mx-auto">
                <h2> FITNESS , HEALTH AND WELLNESS </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem excepturi amet rerum, fugit veritatis sequi tempore
                  animi quas illo rem quasi incidunt vitae minima voluptate,
                  Magnam eos minus laudantium sequi porro at dignissimos
                  aperiam, illo magni modi suscipit delectus eum? Sint voluptate
                  aliquam minus, molestiae voluptas rem blanditiis soluta
                  quisquam nobis, ducimus ad, ut veritatis! Unde officiis sed
                  provident rem doloribus possimus iste dolorum. Libero, ab
                  facere eligendi debitis dolores ea natus illum numquam enim
                  veniam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus mollitia consectetur voluptates recusandae 
                  numquam iste, distinctio, est quaerat dolorem esse laborum quia. Repudiandae libero cumque soluta. Error molestiae ex 
                  facere, necessitatibus ut ratione. In atque quaerat, eum fuga pariatur, quas eius sit labore soluta facere reprehenderit 
                  iusto praesentium nisi rem?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Start footer */}
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
        {/* End footer */}
      </div>
    </>
  );
};

export default Register;
