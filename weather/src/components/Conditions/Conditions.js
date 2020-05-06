import React from 'react';
const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>Current Temprature : {props.responseObj.main.temp -273.15}° celcius Approx.</p>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;