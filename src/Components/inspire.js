import React, { useState, useEffect } from 'react'
import { Paper, TextField } from '@mui/material';

import { AiOutlineSearch } from 'react-icons/ai';
import { TiMessageTyping } from 'react-icons/ti';
import { BiEdit } from 'react-icons/bi';
import { FcComments } from 'react-icons/fc';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import inspireService from '../services/inspireService';
import { Modal, Button } from 'react-bootstrap';

export default function myinformation() {
    const [blogData, setBlogdata] = useState([]);
    const [show, setShow] = useState(false);
    const [commentMessage, setcommentMessage] = useState("");
    const [isComment, setIsComment] = useState(false);

    useEffect(() => {
        getBlogs();
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleMessageChange = (event) => {
        setcommentMessage(event.target.value);
        console.log(commentMessage);
      }

    const getBlogs = () => {
            inspireService.getAll("/blog/list?pageNo=1&perPage=10").then(response => {
                if (response != undefined) {
                    console.log(response);
                    var dataArr = response.data;
                    dataArr.map((item) => {
                        item.isComment = isComment;
                    });
                    console.log(dataArr);
                    setBlogdata(response.data)

                }
            })
        } 

    const addLike = (Id) => {
        console.log(Id);
        let blog_Id = {
            blogId: Id
        }
        inspireService.postData("/blog/like", blog_Id).then(response => {
            if (response != undefined) {
                console.log(response);
                getBlogs();


            }
        })
    }

    const unLike = (Id) => {
        console.log(Id);
        let blog_Id = {
            blogId: Id
        }
        inspireService.postData("/blog/unlike", blog_Id).then(response => {
            if (response != undefined) {
                console.log(response);
                getBlogs();


            }
        })
    }

    const openComments = (id) => {
        console.log(id)
        const dataArr = [...blogData];
        let index = blogData.find((item, i) => {
            console.log(item.blogId, id);
            if (item.blogId === id) {
                console.log(i);
                //let dataArr=blogData;
                if (blogData[i].isComment == false) {
                    dataArr[i].isComment = true;
                    console.log(dataArr);
                    // setBlogdata(dataArr);
                    getComments(id, dataArr, i);
                } else {
                    dataArr[i].isComment = false;
                    console.log(dataArr);
                    setBlogdata(dataArr);
                }

            }
        });
    }
    const getComments = (id, datablog, index) => {
        inspireService.getAll("/blog/comments/" + id).then(response => {
            if (response != undefined) {
                console.log(response.data);
                datablog[index].comments = response.data;
                setBlogdata(datablog);
                console.log(blogData)
                // setCommentsdata(response.data)

            }
        })
    }

    const addMessage=(item)=>{
        let commObj={
            blogId:item.blogId,
            comment:commentMessage
        }
        inspireService.postData("/blog/addComment", commObj).then(response => {
            if (response != undefined) {
                console.log(response);
                //getBlogs();
                // if (response.data != undefined) {

                // }

            }
        })
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            blog: '',
            image: ''
        },
        onSubmit: (values) => {
            console.log(values)
            let dataObj = {
                title: values.title,
                description: values.blog,
                image: ""
            }
            inspireService.postData("/blog/add", dataObj).then(response => {
                if (response != undefined) {
                    console.log(response);
                    getBlogs();
                    // if (response.data != undefined) {

                    // }

                }
            })
        }
    })

    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light p-4">
                    <Link to='/myaccount'><img src={require('./Images/WhatsApp Image 2023-07-24 at 12.58.35.jpg')} width={250} height={40} /></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto mt-3">
                            <li class="nav-item ms-5"><Link to='/builddream' className='text-dark text-decoration-none'>BUILD A DREAM</Link> </li>
                            <li class="nav-item ms-5"><Link to='/inspire' className='text-dark text-decoration-none'>INSPIRE</Link></li>
                            <li class="nav-item ms-5"><Link to='/community' className='text-dark text-decoration-none'>COMMUNITY</Link></li>
                            <li class="nav-item ms-5"><Link to='/mydreams' className='text-dark text-decoration-none'>MY DREAMS</Link></li>
                            <li class="nav-item ms-5"><Link to='/' className='text-dark text-decoration-none' >LOGOUT</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section>
                <h3 className='text-primary p-4'>Inspire</h3>
                <p className='text-danger p-4' style={{ fontSize: 28 }}>Pending for admin's approval</p>
                <div className='p-4 d-flex flex-wrap pt-4 pending' style={{ marginLeft: -20 }}>
                    <Paper className='m-4' elevation={16} style={{ width: 565, borderRadius: 20 }}>
                        <header>
                            
                            <img src={require('./Images/shopping_428604085_1000.jpg')} width={565} height={250} />
                        </header>
                        <section className='p-4'>
                            <p className='text-primary'>John Doe.17 Mar,2023</p>
                            <h3>Title of blog</h3>
                            <p style={{ textAlign: 'justify' }}>Forms are an integral part of how users interact with our websites and web applications. Validating the data the user passes through the form is a critical aspect of our jobs as web developers. However, it doesn’t have to be a pain-staking process. In this article, we’ll learn how Formik handles the state of the form data, validates the data, and handles form submission.</p>
                        </section>
                    </Paper>

                    <Paper className='m-4' elevation={18} style={{ width: 565, borderRadius: 20 }}>
                        <header>
                            <img src={require('./Images/personal-loantravel-loan-to-fund-dream-honeymoon-717X404.avif')} width={565} height={250} />
                        </header>
                        <section className='p-4'>
                            <p className='text-primary'>John Doe.17 Mar,2023</p>
                            <h3>Title of blog</h3>
                            <p style={{ textAlign: 'justify' }}>Forms are an integral part of how users interact with our websites and web applications. Validating the data the user passes through the form is a critical aspect of our jobs as web developers. However, it doesn’t have to be a pain-staking process. In this article, we’ll learn how Formik handles the state of the form data, validates the data, and handles form submission.</p>
                        </section>
                    </Paper>
                </div>
                <div className='p-4'>
                    <h3 className='text-primary'>Blogs</h3>
                    <div className='d-flex flex-wrap pt-4' style={{ marginLeft: -20 }}>
                        {blogData.map((item, index) => {
                            return <Paper className='m-4' key={index} elevation={16} style={{ width: 565, borderRadius: 20 }}>
                                <header>
                                    <div className='d-flex p-2 pt-3' > 
                                        <BiEdit className='icon30 ms-auto'/>
                                        <RiDeleteBin5Line className='icon31 ms-3'/>
                                    </div>
                                    <img className='pt-2' src={require('./Images/shopping_428604085_1000.jpg')} width={565} height={250} />
                                </header>
                                <section className='p-4'>
                                    <p className='text-primary'>{item.author}.17 Mar,2023</p>
                                    <h3>{item.title}</h3>
                                    <p style={{ textAlign: 'justify' }}>{item.description}</p><hr />
                                </section>
                                <footer >
                                    <div className='row p-4' style={{ marginTop: -40 }}>
                                        <div className='col'>{item.views_count}Views</div>
                                        <div className='col ' >
                                            <div className='d-flex '>
                                                <div className='ms-auto' onClick={() => openComments(item.blogId)} > {item.comments_count} <TiMessageTyping className='icon28 ms-2' style={{ cursor: 'pointer' }} /></div>
                                                <div className='ms-3' onClick={() => addLike(item.blogId)}> {item.likes_count} <AiOutlineHeart className='icon29 ms-2' style={{ cursor: 'pointer' }} /> </div>
                                                <div className='ms-3' onClick={handleShow}><FcComments className='icon29 ms-2'/></div>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                                    <Modal show={show} onHide={handleClose}  size="lg" backdrop='static'>
                                        <Modal.Header >
                                           <Modal.Title>Comments</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                           <p>Comment  here.</p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="primary" onClick={handleClose}>
                                                submit
                                            </Button>
                                            <Button variant="dark" onClick={handleClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                {item.isComment &&
                                    <div>
                                        <div className='p-5'>
                                            <h3 className='text-primary'>Blog Comments</h3>
                                            <h5 className='pt-4'>Title of the Blog</h5>
                                            {item.comments.map((commItem) => {
                                                <div className='d-flex pt-4'>
                                                    <img className='border' width={70} height={70} style={{ borderRadius: 35 }} />
                                                    <div className='p-1 ms-4'>
                                                        <p>Moni Acharya, Aug 10 2023</p>
                                                        <p>Lorem ipsum dummy text wow beautiful </p>
                                                    </div>
                                                </div>


                                                {/* <div className='d-flex pt-2'>
                                                <img className='border' width={70} height={70} style={{ borderRadius: 35 }} />
                                                <div className='p-1 ms-4'>
                                                    <p>Moni Acharya, Aug 10 2023</p>
                                                    <p>Lorem ipsum dummy text wow beautiful </p>
                                                </div>
                                            </div>
                                            <div className='d-flex pt-2'>
                                                <img className='border' width={70} height={70} style={{ borderRadius: 35 }} />
                                                <div className='p-1 ms-4'>
                                                    <p>Moni Acharya, Aug 10 2023</p>
                                                    <p>Lorem ipsum dummy text wow beautiful </p>
                                                </div>
                                            </div>
                                            */}
                                             })}
                                        </div> 
                                           
                                            <div className='row p-5'>
                                                <div className='col-9'>
                                                    <TextField type='text'  label='Write Comment here' value={commentMessage} onChange={handleMessageChange}  fullWidth />
                                                </div>
                                                <div className='col-1'>
                                                    <button className='btn btn-primary' style={{ width: 100, height: 55 }} onClick={()=>{addMessage(item)}}>Post</button>
                                                </div>
                                            </div>

                                        </div>
                                }
                                    </Paper>
                                })}


                                {/* <Paper className='m-4' elevation={18} style={{ width: 565, borderRadius: 20 }}>
                            <header>
                                <img src={require('./Images/personal-loantravel-loan-to-fund-dream-honeymoon-717X404.avif')} width={565} height={250} />
                            </header>
                            <section className='p-4'>
                                <p className='text-primary'>John Doe.17 Mar,2023</p>
                                <h3>Title of blog</h3>
                                <p style={{ textAlign: 'justify' }}>Forms are an integral part of how users interact with our websites and web applications. Validating the data the user passes through the form is a critical aspect of our jobs as web developers. However, it doesn’t have to be a pain-staking process. In this article, we’ll learn how Formik handles the state of the form data, validates the data, and handles form submission.</p><hr />
                            </section>
                            <footer >
                                <div className='row p-4' style={{ marginTop: -40 }}>
                                    <div className='col'>10 Views</div>
                                    <div className='col ' >
                                        <div className='d-flex '>
                                            <div className='ms-auto'> 10 <TiMessageTyping className='icon28 ms-2' /></div>
                                            <div className='ms-3'> 10 <FcLike className='icon29 ms-2' /> </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </Paper> */}
                            </div>
                </div>
                    <div className='p-4'>
                        <h3 className='text-primary'>Write To Our Own Blog/ Inspire</h3>
                        <form className='pt-4' onSubmit={formik.handleSubmit}>
                            <Paper className='p-5 ' elevation={18}>
                                <TextField id="standard-basic" variant="standard" type='text' name='title' label='Title of the Blog' value={formik.values.title} onChange={formik.handleChange} required fullWidth /><br/><br/><br/>
                                <div><input  className='textfield p-2'  type='text' name='blog' placeholder='Write here'  value={formik.values.blog} onChange={formik.handleChange} fullWidth required   /></div><br /><br />
                                <TextField id="standard-basic" variant="standard" type='file' name='image' value={formik.values.image} onChange={formik.handleChange} fullWidth /><br /><br />
                                <p align='end '><button className='btn btn-primary mt-4' type='submit' style={{ width: 100, borderRadius: 20 }}>Submit</button></p>
                            </Paper>
                        </form>
                    </div>
            </section>
            <footer className='footer p-2'>
                <div className='p-5  text-white row '>
                    <div className='col-md-3'>
                        <h4>COMPANY</h4><br />
                        <p>About Us</p>
                        <p>careers</p>
                        <p>Patners</p>
                        <p>Contact</p>
                    </div>
                    <div className='col-md-3'>
                        <h4>RESOURCES</h4><br />
                        <p>Resouces center</p>
                        <p>Integration</p>
                        <p>Partners</p>
                        <p>Glossary</p>
                    </div>
                    <div className='col-md-3'>
                        <p>Sign up for our monthly newsletter</p><hr />
                        <div className='d-flex'>
                            <p>Email</p>
                            <button className='btn btn-primary ms-auto' style={{ borderRadius: 30 }}>Subscribe</button>
                        </div>
                    </div><br />
                    <div className='col-md-3  mt-2' >
                        <div className='d-flex '>
                            <img src={require('./Images/Download_on_the_App_Store_Badge.svg.png')} width={120} height={40} />
                            <img className='ms-2' style={{ marginTop: -5 }} src={require('./Images/play-store-logo-nisi-filters-australia-11.png')} width={120} height={50} />

                        </div><br />
                        <div className='pt-5 social-icon' style={{ marginLeft: -15 }}>
                            <img src={require('./Images/facebook.png')} width={30} height={30} />
                            <img className='ms-4' src={require('./Images/twitter (2).png')} width={30} height={30} />
                            <img className='ms-4' src={require('./Images/linkedin.png')} width={30} height={30} />
                            <img className='ms-4' src={require('./Images/instagram (1).png')} width={25} height={25} />
                            <img className='ms-3' src={require('./Images/youtube.png')} width={28} height={28} />
                        </div>
                    </div><br /><br />
                    <div className='row mt-3'>
                        <div className='col-md-3'><p >License Agreement</p></div>
                        <div className='col-md-3'><p >Privacy Policy</p></div>
                        <div className='col-md-3'><p></p></div>
                        <div className='col-md-3'><p >Copyright @ 2022 Bluelakes,Inc.All rights reserved.</p></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
