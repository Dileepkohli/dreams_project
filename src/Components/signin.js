import { Paper, TextField } from '@mui/material'
import React from 'react';
import GoogleIcon from './Images/google-48.png';
import AppleIcon from './Images/apple.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import authServices from '../services/authServices';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useSnackbar } from 'notistack';

export default function signin() {

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [showPassword, setShowPassword] = React.useState(false);
    const [showpassword, setShowpassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowpassword = () => setShowpassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email address')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        // cnfPassword: yup
        //     .string()
        //     .oneOf([yup.ref('password'), null], 'Passwords must match')
        //     .required('Confirm Password is required'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validationSchema,


        onSubmit: (values) => {


            console.log(values)
            var dataObj = {

                email: values.email,

                password: values.password,

            }
            authServices.signIn("/borrower/signin", dataObj).then(response => {
                if (response != undefined) {
                    console.log(response);
                    if (response.data != undefined) {
                        localStorage.setItem('token', response.data.token)
                          localStorage.setItem('user_data', JSON.stringify(response.data))
                          enqueueSnackbar("Welcome to Borrowers", {variant: "success",anchorOrigin:{ vertical: 'top',
                          horizontal: 'right'},autoHideDuration: 3000})
                          navigate('/myaccount');
                    }

                }
            })
        }
    })


    return (
        <div>
            <div className='row'>
                <div className='col-md-4 dream'></div>
                <div className='col-md-7 p-4 justify-content-end align-items-center' >
                    <div align='end' style={{ marginRight: -10 }}> <Link to='/myaccount'><img src={require('./Images/home.png')} width={50} height={50} /></Link></div>
                    <form className='p-1' onSubmit={formik.handleSubmit}>
                        <div className=' ps-5 pt-4 pb-5 '>
                            <span style={{ fontSize: 24, fontWeight: 600 }}>Signin</span>
                            <p className="pt-3 pb-3 m-0 fon" style={{ color: 'gray' }}>Completely Employee-owened, we're driven with a passion</p>
                            <div className="row d-flex justify-content-center align-items-center login-btn">
                                <div className='col-md-6 mt-4 '>
                                    <button className='btn go-btn-ol w-100 d-flex justify-content-center align-items-center border-dark' style={{ height: "37px", borderRadius: 50 }} type="submit">
                                        <img src={GoogleIcon} />
                                        <p className="p1 pt-3 ms-2">Continue with Google</p>
                                    </button>
                                </div>
                                <div className='col-md-6 mt-4 btn2' >
                                    <button className='btn w-100 ap-btn2 w-100 bg-dark text-white d-flex justify-content-center align-items-center border-dark' style={{ height: "37px", borderRadius: 40 }} type="submit">
                                        <img src={AppleIcon} />
                                        <p className="p2 pt-3 ms-2">Continue with Apple</p>
                                    </button>
                                </div>
                            </div><br />
                            <p align='center' className='pt-3'>Or</p>
                            <TextField id="standard-basic " label="Enter Your Username or Email " type='email' name='email' placeholder='Enter your Username Or Email' onChange={formik.handleChange} variant="standard" fullWidth  /><br />
                            <p className='text-danger'>{formik.errors.email}</p><br/>
                            <FormControl  variant="standard" fullWidth >
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formik.values.password} 
                                        onChange={formik.handleChange} 
                                        name='password'
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                    </FormControl>
                                    <p className='text-danger'>{formik.errors.password}</p><br/>
                            <button className='btn btn-link text-decoration-none' style={{ marginLeft: -10 }}><Link to='/forgotpassword' className='text-decoration-none' >Forgot Password</Link></button>
                            <div className='d-flex pt-3' style={{ marginRight: 30 }}>
                                <button className='btn btn-link ms-auto text-decoration-none'><Link to='/' className='text-decoration-none'>Signup</Link></button>
                                <button className='btn btn-primary ms-2' style={{ borderRadius: 20, width: 140 }} type='submit'><>Continue</> <span><BsArrowRight /></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
