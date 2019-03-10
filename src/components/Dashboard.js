import React from 'react';
import { NavLink } from 'react-router-dom';

import axios from 'axios';

export default class Dashboard extends React.Component {
    constructor(props){
      super(props);
      this.state = { 
        data: null,
        user : null
      }
    }

    componentDidMount(){
      // axios.get('https://api.tiny.markets/products/user/', { 
      //   mode: 'no-cors', withCredentials: true, headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   }}).then((response) => {
      //     this.setState({ data: response.data })
      // }).catch((error)=>{
      //   return error;
      // });

      // axios.get('https://api.tiny.markets/user/info/', { 
      //   mode: 'no-cors', withCredentials: true, headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   }}).then((response) => {
      //     this.setState({ user: response.data })
      // }).catch((error)=>{
      //   return error;
      // });
    }
    
    render(){
      var results = [];
      if (this.state.data && this.state.data.length > 0) {
        this.state.data.map(function(data){
          results.push(
            <div>
              <NavLink to={'/product/' + data.identifier}>
                <div className="product">
                  <img className="product-image" src={data.image ? 'https://s3-us-west-1.amazonaws.com/tiny-cdn/' + data.image : 'https://i.imgur.com/4uBKVXN.png'}/>
                  <div className="product-container">
                    <p style={{ fontFamily: 'Tiempos Text'}}  className="product-name">{data.name}</p>
                    <p className="product-desc">{data.description}</p>
                    <p style={{ color: '#e478a3'}} className="product-sales">Sales: {data.customers.length}</p>
                  </div>
                </div>
              </NavLink>
              <br/>
              <NavLink to={'/sales/' + data.identifier}><button style={{ backgroundImage: 'linear-gradient(to right,#E33D53,#DA1B60)'}}>View sales for {data.name}</button></NavLink>
              <br/><br/><br/>
            </div>
          );
        });
      } else {
        results.push(
          <NavLink to='/create'>
            <div className="product">
              <div className="product-container">
                <p className="product-name">Product name</p>
                <p className="product-desc">Product description</p>
                <p className="product-sales">Sales: 1,500</p>
              </div>
              <img className="product-image" src='https://i.imgur.com/4uBKVXN.png'/>
            </div>
          </NavLink>
        );
      }

      if(this.state.user){
        return(
          <div>
            <h2>Dashboard</h2>
            <h3>Your current balance is ${(this.state.user.balance ? this.state.user.balance / 100 : 0.00).toFixed(2)}</h3>
            <h3>Your lifetime earnings are ${(this.state.user.lifetime_balance ? this.state.user.lifetime_balance / 100 : 0.00).toFixed(2)}</h3>
            <br/>
            <NavLink to="/create"><button>Start selling a new file</button></NavLink>
            <br/><br/><br/><br/>
            <h3>{ this.state.data && this.state.data.length > 0 ? 'Your products' : 'Your products' }</h3>
            <div className="products">{results}</div>
          </div>
        );
      }
      return(
        <div></div>
      );
    }
}