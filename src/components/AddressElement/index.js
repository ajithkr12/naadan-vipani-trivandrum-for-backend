
import React, { useState } from 'react';
import "./style.css";
import Select from 'react-select';

const AddressElement = () => {

    return (
        
        <div class="container-fluid">
 <div class="row">
 <div class="addressbox col-lg-6 col-md-12 col-sm-12 col-xm-12"> 
    <div class="heading">      
        <h2>Enter your Address</h2>
      </div>
    
      <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
        <input type="text" placeholder="Name" required/>
      </div>
      
        <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
      <input type="text" placeholder="House Name" required/>

      </div>
      <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
      <input type="text" placeholder="Streat Name" required/>
 
      </div>
      <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
      <input type="text" placeholder="Land Mark" required/>

      </div>
      <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
      <input type="text" placeholder="Pincode" required/>

      </div>

      <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12 col-12"> 
      <select name="District" id="place" class="select">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  </div>

  <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12"> 
  <p>Delivery Time Slot</p>
  <div class="radio-box flex col-lg-6 col-md-6 col-sm-6 col-xm-6">
  <input type="radio" name="radio" id="radio1" value="M"/>
  <label for="radio1">Morning Section-9am to 1pm </label>
</div>
<div class="radio-box flex col-lg-6 col-md-6 col-sm-6 col-xm-6">
  <input type="radio" name="radio" id="radio2" value="A"/>
  <label for="radio2">Afternon Section-1Pm to 6pm</label>
</div>
</div>



      <button className="continue_btn">
      Continue
        </button>
    
        </div>
        <div className="price-total col-lg-12 col-md-12 col-sm-12 col-xm-12">
          <h4>Total Price : 1000/-</h4>
        </div>
        </div>
</div>

    )
}

export default AddressElement;
