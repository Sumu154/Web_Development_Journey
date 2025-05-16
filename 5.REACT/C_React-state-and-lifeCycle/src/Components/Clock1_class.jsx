           // 1. with class components

import React from 'react';

// react er state -> react er data (not props)
// state -> also a javascript object

class Clock1 extends React.Component{
    state = { date: new Date() };
    constructor(props){
        super(props);          //parent React.Components er pathaye dilam
        
    }

    tick(){
        //this.state.date = new Date(); ei kaj kora jabe na,,direct state change kora jay na
        this.setState({
            date: new Date(),
        })
    }

    //real dom e jokhne component mount hoy,,tokhne eta call hbe auto..
    componentDidMount(){
        this.clockTimer = 
        setInterval(() => {
            this.tick();   
        }, 1000);
    }

    // onno kono page e gele to ar lagtece na..so clear kore dite hbe for efficiency
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    render() {
        return (
            <h1 className="heading">
                <span className="text"> 
                    {/* this.state.date -> jokhne reacter ei state change hbe tokhne abar render call..  */}
                    {/* ekhono clock kaj korce na -> state changer jonne setState call korte hbe  */}
                    {this.state.date.toLocaleTimeString(this.props.locale)}  
                </span>    
            </h1>
        );  
    }
}

export  default Clock1;









