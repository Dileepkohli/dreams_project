import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './signin';
import Signup from './signup';
import Builddream from './builddream';
import Houseselect from './houseselected';
import Typesofhome from './typesofhome';
import Propertyusage from './propertyusage';
import Loandetails from './loandetails';
import Creditscore from './creditscore';
import Offersummary from './offersummary';
import Congratulations from './congratulations';
import Flightselect from './flightselect';
import Infodetails from './infodetails';
import Flightinfo from './flightinfo';
import Passengerinfo from './passangerinfo';
import Travelerinfo from './travelers';
import Confirmation from './confirmation';
import Hotelselect from './hotelselect';
import Hotelselected from './hotelselected';
import Hotelinfo from './hotelinfo';
import Confirm from './confirm';
import Myaccount from './myaccount';
import Myinfo from './myinfo';
import Dining from './dining';
import Retail from './retail';
import Testimonial from './testimonial'
import Inspire from './inspire';
import Mydreams from './mydreams';
import Forgotpassword from './forgotpwd';
import Contactlender from './contactlender';
import '../Styles/classindex.css';

export default class classindex extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/builddream' element={<Builddream/>}/>
            <Route path='/houseselect' element={<Houseselect/>}/>
            <Route path='/flightselect' element={<Flightselect/>}/>
            <Route path='/infodetails' element={<Infodetails/>}/>
            <Route path='/flightinfo' element={<Flightinfo/>}/>
            <Route path='/travelers' element={<Travelerinfo/>}/>
            <Route path='/passengerinfo' element={<Passengerinfo/>}/>
            <Route path='/confirmation' element={<Confirmation/>}/>
            <Route path='/hotelselect' element={<Hotelselect/>}/>
            <Route path='/hotelselected' element={<Hotelselected/>}/>
            <Route path='/hotelinfo' element={<Hotelinfo/>}/>
            <Route path='/confirm' element={<Confirm/>}/>
            <Route path='/typesofhome' element={<Typesofhome/>}/>
            <Route path='/propertyusage' element={<Propertyusage/>}/>
            <Route path='/loandetails' element={<Loandetails/>}/>
            <Route path='/creditscore' element={<Creditscore/>}/>
            <Route path='/congratulations' element={<Congratulations/>}/>
            <Route path='/offersummary' element={<Offersummary/>}/>
            <Route path='/myaccount' element={<Myaccount/>}/>
            <Route path='/myinfo' element={<Myinfo/>}/>
            <Route path='/dining' element={<Dining/>}/>
            <Route path='/retail' element={<Retail/>}/>
            <Route path='/retail' element={<Retail/>}/>
            <Route path='/inspire' element={<Inspire/>}/>
            <Route path='/mydreams' element={<Mydreams/>}/>
            <Route path='/forgotpassword' element={<Forgotpassword/>}/>
            <Route path='/community' element={<Testimonial/>}/>
            {/* <Route path='/community' element={<Community/>}/> */}
            <Route path='/contactlender' element={<Contactlender/>}/>
        </Routes>
      </div>
    )
  }
}
