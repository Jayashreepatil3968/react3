import React, { Component } from 'react';
import "../global.css"

class Counter extends Component {

    constructor()
    {
        super()
        this.state={counter:0}
    }
    render() {
       

      let  increment=()=>{
        this.setState({counter:this.state.counter+1});
        }
        let decrement=()=>
        {
            this.setState({counter:this.state.counter-1})
        }

        let reset=()=>
        {
            this.setState({counter:0})
        }
      
        return (
            <div className='counterClass' align="center">
                <h1>{this.state.counter}</h1>
                <button onClick={increment}>INCREMENT/+</button>
                <button onClick={decrement}>DECREMENT/-</button>
                <button onClick={reset}>RESET</button>           
            </div>
        );
    }
}

export default Counter;

