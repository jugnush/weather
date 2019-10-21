import React from 'react'

export default function Forcast(props) {
      return (
            <div>
            {props.country && props.city &&<p>Location
                  {props.country}, {props.city}</p>}
                  {props.humidity &&<p>humidity 
                  {props.humidity}</p>}
                  {props.temprature &&<p>temprature 
                  {props.temprature}</p>}
                  {props.description && <p>Conditions: {props.description}</p>}
                  {props.icon && <img src= {`http://openweathermap.org/img/w/${props.icon}.png`} alt = "weather icon"/>}
            </div>
      )
}
