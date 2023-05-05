import React from 'react'
import "./CompanyHistory.css"
import company from "../../Images/company-img.png"


const CompanyJourny = () => {
  return (
    <section class="troo-da-company-journey-section padding-top padding-bottom" id="troo-da-company-journey-section">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
         <div class="company-journey-col">
            <h2>Company Journey</h2>
            <p>Lorem ipsum dolort amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore and magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exe</p>
              <img src={company} alt='company' />
         </div>
      </div>
      <div class="col-md-8">
           <div class="histry-col">
            <div class="row">
            <div class="col-md-6">
               <div class="hisrt-col">
                 <span>22 December, 1985</span>
                 <h3>Title for 1985</h3>
                 <p>Lorem ipsum dolort amet, consectetur adipisicing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore and magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exe</p>
               </div>
               <div class="hisrt-col">
                <span>22 December, 1985</span>
                <h3>Title for 1985</h3>
                <p>Lorem ipsum dolort amet, consectetur adipisicing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore and magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exe</p>
              </div>
              <div class="hisrt-col">
                <span>22 December, 1985</span>
                <h3>Title for 1985</h3>
                <p>Lorem ipsum dolort amet, consectetur adipisicing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore and magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exe</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="hisrt-col">
                <span>22 December, 1985</span>
                <h3>Title for 1985</h3>
                <p>Lorem ipsum dolort amet, consectetur adipisicing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore and magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exe</p>
              </div>
              <div class="hisrt-col">
                <span>22 December, 1985</span>
                <h3>Title for 1985</h3>
                <p>Lorem ipsum dolort amet, consectetur adipisicing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore and magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exe</p>
              </div>
            </div>
          </div>
           </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default CompanyJourny