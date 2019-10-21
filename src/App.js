import React,{Component}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Headline from './components/headline'
import Form from './components/form'
import Forcast from './components/Forcast'

const api_key = "21fb0611a93fa4f9d8a99dd0267dc01a"
export default class App extends Component {
  state={
    temprature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    icon:''
  }

  getweather =async(e)=>{
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await 
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`);
    const response = await api_call.json();
    
    if (city && country){
      this.setState({
        temprature:response.main.temp,
        city:response.name,
        country:response.sys.country,
        humidity:response.main.humidity,
        description: response.weather[0].description,
        icon:response.weather[0].icon,
        error:''
      })
    }else{
      this.setState({
        error:"please fill"
      })
    }
// // using Promises ---------------------------------------//
//     fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`)
//     .then(res => res.json())
//     .then(response => {
//       this.setState({
//         temprature:response.main.temp,
//         city:response.name,
//         country:response.sys.country,
//         humidity:response.main.humidity,
//         description: response.weather[0].description,
//         icon:response.weather[0].icon,
//         error:''
//       })
//   })
//   .catch(error => {
//     console.log(error);
// })
// // end using Promises ---------------------------------
}
  render(){
    return (
      <React.Fragment> 
        <Headline/>
        <div className="container">
                        <div className="row">
                          <div className="col-xs-6">
                          <Form onloadApi={this.getweather}/>
                          </div>
                          <div className="col-xs-6">
                          <Forcast country={this.state.country} 
        city={this.state.city} 
        humidity={this.state.humidity}
        description={this.state.description}
        temprature={this.state.temprature}
        icon={this.state.icon}
        />
                          </div>
                          </div>
                          </div>
                          
        
        
        </React.Fragment>
     );
  }
}

