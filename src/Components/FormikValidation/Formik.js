import React from "react";
import {FormikConsumer, useFormik} from 'formik'
import * as yup from 'yup'
import "./formil.css"

// const validate =values => {
//     const errors={};
//     if(!values.name){
//         errors.name="Name is required"
//     }
//     else if(values.name.length>15){
//         errors.name="Maximum 15 characters only"
//      }
//      else if(values.name.length<3){
//          errors.name="Minimum 3 characters Required "
//      }
//     return errors;

// }
const App = () =>{
    const formik = useFormik({
        initialValues : {
            name:'',
            email:'',
            list:'',
            password:'',
            confirmpassword:'',
        },
        validationSchema:yup.object({
            name:yup.string()
            .required("Name is Required")
            .strict()
            .trim()
            .uppercase()
            .min(5, "Minimum 5 Characters Required")
            .max(15, "Maximum 15 Characters Required"),


            email:yup.string()
            .email()
            .required("Email is Required"),
            list:yup.string()
            .required("List is Required"),
            password:yup.string()
            .required("Password is Required"),
            confirmpassword:yup.string()
            .required("Confirm password is Required")
            

        }),
        onSubmit:(userInputData) =>{
            console.log(userInputData);
        }
    })
  
    return(
        <div className="container">
          <div className="jumbotron">
              <div className="sub_container">
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                <label>Name:</label>
                <input  className="form-control" type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                {formik.errors.name ? <div className="text-danger">{formik.errors.name}</div>: null}
                </div>

                <div className="form-group">
                <label>Email:</label>
                <input  className="form-control" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div>: null}
                </div>

                <div className="form-group">
                    <label for="sel1">Select list:</label>
                    <select name="list" onChange={formik.handleChange} value={formik.values.list} className="form-control" id="sel1">
                    <option value="">---Select one---</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>
                    {formik.errors.list ? <div className="text-danger">{formik.errors.list}</div>: null}
                </div>

                <div className="form-group">
                <label>Password:</label>
                <input  className="form-control" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
                {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div>: null}
                </div>
                <div className="form-group">
                <label>Confirm Password:</label>
                <input  className="form-control" type="text" name="confirmpassword" onChange={formik.handleChange} value={formik.values.confirmpassword}/>
                {formik.errors.confirmpassword ? <div className="text-danger">{formik.errors.confirmpassword}</div>: null}
                </div>


                <button className="btn btn-primary">Submit</button>
 
            </form>
            </div>
            </div>
        </div>
    )
}
export default App;