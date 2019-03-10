import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe'
import '../styles/home.scss';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      user: null
    }
  }

  componentDidMount(){
    // axios.get('https://api.tiny.markets/user/info/', { 
    //     mode: 'no-cors', withCredentials: true, headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   }}).then((response) => {
    //     this.setState({ user: response.data})
    // }).catch((error)=>{
    //     return error;
    // });
  }

  render(){
    var map = [];
    for(var j=0;j<15;j++){
      var line = [];
      
      for(var i=0;i<15;i++){
        var block = <div className='unoccupied' id='entity-${i}'></div>;
        
        if(i / 2.5 == j || i == j / 2.5 || i / 2 == j / 2.5 || i == j / 4 || i / 2.25 == j / 1.5){
          block = <div className='occupied' id='entity-${i}'></div>;
        } else if(i == 5 && j == 5){
          block = <div className='current' id='entity-${i}'></div>;
        } else {
          block = <div className='unoccupied' id='entity-${i}'></div>;
        }
        
        line.push(block); 
      }

      map.push(line);
    }

    if(!this.state.user){
      return (
        <div className="universe" id="universe">
          <div className="col1">
            <div className="starmap" id="starmap">
              <div className="title">
                Map
              </div>
              {map}
            </div>
            <div className="data">
              <div className="title">
                Data
              </div>
              <div className="current-sector">
                Sector: A
              </div>
              <div className="current-zone">
                Zone: 16
              </div>
              <div className="current-balance">
                Balance: 14,500 ¥
              </div>
              <div className="current-players">
                Other Explorers: 12,100
              </div>
            </div>
          </div>
          <div className="info">
            <div className="title">
              Inspector
            </div>        
            <div className="info-inner">
              
            </div>
          </div>
          <div className="chat">
            <div className="title">
              Chat
            </div>
          </div>
        </div>
      );
    } else {
      this.props.history.push('/dashboard');
      return (
        <div></div>
      );
    }
  }
}

Home.propTypes = {
  history: PropTypes.object,
};