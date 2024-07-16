import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './form.css';

export default function Formik(){
    const formik=useFormik({
        initialValues:{
            Name: '',
            email:'',
            message:'',
        },
        validationSchema: Yup.object({
            email:Yup.string().email('Invalid email address').required('Required'),
            Name:Yup.string().required('Required'),
            message:Yup.string().required('Required'),
        
        
        }),
        onSubmit:(values)=>{
            console.log(values);

        },
    });

    return(
        <form onSubmit={formik.handleSubmit} className="container">
            <h1>Contact Form</h1>
            <label>
                Name:
                <input type="text" name="name"{...formik.getFieldProps('Name')}/>
            </label>
            {formik.touched.Name && formik.errors.Name ?(
                <div style={{color: 'red'}}>{formik.errors.Name}</div>
            ):null}

            <br/>
            <label>
                Email:
                <input type="email" name="email" {...formik.getFieldProps('email')}/>

            </label>
            {formik.touched.email && formik.errors.email ?(
                <div style={{color: 'red'}}>{formik.errors.email}</div>
            ):null}
            
            <br/>
            
          
            <label>
                Message:
                <input type="date" name="message" {...formik.getFieldProps('message')}/>

            </label>
            {formik.touched.message && formik.errors.message ?(
                <div style={{color: 'red'}}>{formik.errors.message}</div>
            ):null}

            <button type ="submit">Submit</button>
        </form>
    );
}