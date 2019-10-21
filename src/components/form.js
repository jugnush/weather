// import React from 'react'

// export default function form(props) {
//       return (
//             <div>
//               <form onSubmit={props.onloadApi}>
//                     <input type="text" name="city" placeholder="change city"/>
//                     <input type="text" name="country" placeholder="change country"/>
// <button>get weather</button>
//                     </form>    
//             </div>
//       )
// }
import React from 'react';

const Form = (props) =>{
  return (
    <form onSubmit = {props.onloadApi}>
      <input type="text" name="city" placeholder="Choose a City"/>
      <input type="text" name="country" placeholder="Choose a Country"></input>
      <button>Get Weather</button>
    </form>
  )
}
export default Form;