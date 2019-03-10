import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import '../styles/home.scss';

import axios from 'axios';

export default class Navigation extends React.Component {
    constructor(props){
      super(props);
      this.state = { 
        user: null,
        hide: false,
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

        if(window.location.href.indexOf("successful") > -1) {
            this.setState({ hide: true });
        }
        
        if(window.location.href.indexOf("product") > -1) {
            this.setState({ hide: true });
        }
    }
    
    render(){
        const activeStyle = { color: '#000', fontFamily: 'Tiempos Text', margin: 15, textDecoration: 'none'};
        const normalStyle = { color: '#000', fontFamily: 'Tiempos Text', margin: 15, textDecoration: 'none'};
        
        if(this.state.hide){
            return(
                <div style={{ textTransform: 'lowercase', marginTop: 50, marginBottom: 150, display: 'block', backgroundColor: '#fff', height: '200', border: '1px solid #FFF' }}>
                    <a href="/"><img style={{ height: 40, marginTop: -10, float: 'left' }} src="https://i.imgur.com/fpdyvdE.png"></img></a>
                </div>
            );
        }

        if(!this.state.user){
            return(
                <div className="navbar">
                    <img className="icon" src="https://cdn.glitch.com/5c38e8af-e792-4f03-a3e4-4b17c9e9139e%2Ficon%20(6).png?1552227218129" />
                    <div className="support">
                        login
                    </div>
                    <div className="link">
                        blog
                    </div>
                    <div className="link">
                        discord
                    </div>
                    <div className="link">
                        dashboard
                    </div>
                </div>
            );
        } else {
            return(
                <div className="navbar">
                    <img className="icon" src="https://cdn.glitch.com/5c38e8af-e792-4f03-a3e4-4b17c9e9139e%2Ficon%20(6).png?1552227218129" />
                    <div className="support">
                        support
                    </div>
                    <div className="link">
                        blog
                    </div>
                    <div className="link">
                        discord
                    </div>
                    <div className="link">
                        dashboard
                    </div>
                </div>
            );
        }
    }
}