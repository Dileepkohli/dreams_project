import React, { useState } from 'react';
import { Paper, TextField } from '@mui/material'
import GoogleIcon from './Images/google-48.png';
import AppleIcon from './Images/apple.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input';
import authServices from '../services/authServices';
import { useSnackbar } from 'notistack';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';


export default function Changepwd() {

    const [oldpwd,setOldpwd] = useState(false)
    const [newpwd,setNewpwd] = useState(false)
    const [cnfNewpwd,setCnfNewpwd] = useState(false)

    const Showoldpwd = () => setOldpwd ((show) => !show)
    const Shownewpwd = () => setNewpwd((show) => !show)
    const ShowNewpwd = () => setCnfNewpwd((show) => !show)
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        previouspwd: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .required('Old password is required'),
        newpassword: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirmnewPassword: yup
            .string()
            .oneOf([yup.ref('password'),null], 'Passwords must match')
            .required('Confirm Password is required'),
    })



    const formik = useFormik({
        initialValues: {
          previouspwd:'',  
          newpassword: '',
          confirmnewPassword: ''
        },
        validationSchema,
        onSubmit: (values) => {
          if (values.newpassword === values.confirmnewPassword) {
            var dataObj = {
              previouspwd:values.previouspwd,
              password: values.newpassword,
              confirmnewPassword: values.confirmnewPassword
            }
            console.log(dataObj);
            authServices.signIn("/borrower/resetPassword", dataObj).then(response => {
              if (response != undefined) {
                console.log(response);
                if (response.success == 1) {
                    enqueueSnackbar("password changed", {variant: "success",anchorOrigin:{ vertical: 'top',
                    horizontal: 'right'},autoHideDuration: 3000})
                  navigate('/myaccount');
                }
    
              }
            })
          } else {
            console.log(false)
          }
          // navigate('/signin')
        }
      })
    
  return (
    <div>
        <div className='row'>
         <div className='col-md-4 dream'></div>
         <div className='col-md-7  col-md-6 col-12 p-2 justify-content-end align-items-center'>

            <div align='end' style={{ marginRight: 30,marginTop:10}}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50} /></Link></div>
            <form className='p-3'  onSubmit={formik.handleSubmit}>
              <div className=' ps-5 pt-5 pb-5 '>
                <span style={{ fontSize: 24, fontWeight: 600 }}>Reset Password? </span><br /><br />
                {/* <TextField type='password' id="standard-basic" label="Enter  Previous Password" name='previouspwd' onChange={formik.handleChange}  value={formik.values.previouspwd} placeholder='Enter your Password' variant="standard" fullWidth  /><br /> */}
                    <FormControl  variant="standard" fullWidth >
                                    <InputLabel htmlFor="standard-adornment-password">Old Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={oldpwd ? 'text' : 'password'}
                                        value={formik.values.previouspwd} 
                                        onChange={formik.handleChange} 
                                        name='previouspwd'
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={Showoldpwd}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {oldpwd ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                    </FormControl>
                <p className='text-danger'>{formik.errors.previouspwd}</p><br/>

                {/* <TextField type='password' id="standard-basic" label="Enter  New Password" name='newpassword'  onChange={formik.handleChange} value={formik.values.newpassword}   placeholder='Enter your Password' variant="standard" fullWidth  /><br /> */}
                <FormControl  variant="standard" fullWidth >
                                    <InputLabel htmlFor="standard-adornment-password">New Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={newpwd ? 'text' : 'password'}
                                        value={formik.values.newpassword} 
                                        onChange={formik.handleChange} 
                                        name='newpassword'
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={Shownewpwd}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {newpwd ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                    </FormControl>
                <p  className='text-danger'>{formik.errors.newpassword}</p><br/>
                {/* <TextField type='password' id="standard-basic" label="Confirm  New Password" name='confirmnewPassword'  onChange={formik.handleChange}  value={formik.values.confirmnewPassword} placeholder='Enter your Password' variant="standard" fullWidth  /><br /> */}
                <FormControl  variant="standard" fullWidth >
                                    <InputLabel htmlFor="standard-adornment-password">New Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={cnfNewpwd ? 'text' : 'password'}
                                        value={formik.values.confirmnewPassword} 
                                        onChange={formik.handleChange} 
                                        name='confirmnewPassword'
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={ShowNewpwd}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {cnfNewpwd ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                    </FormControl>
                <p  className='text-danger'>{formik.errors.confirmnewPassword}</p>

                <div className='d-flex pt-5' >
                  <button className='btn btn-primary ms-auto' style={{ borderRadius: 20, width: 140 }} ><Link to='/myaccount' className='text-white text-decoration-none'>Cancel</Link></button>
                  <button className='btn btn-primary ms-4' style={{ borderRadius: 20, width: 140 }} type='submit' ><>Continue</> <span><BsArrowRight /></span></button>
                </div>
              </div>
              <p className='pt-5 mt-4'></p>
            </form>
          </div>
        </div>
    </div>
  )
}
