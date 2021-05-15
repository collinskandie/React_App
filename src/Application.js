import React, {Component} from 'react';
import Highscore from './Highscore';
import './css/style.css';

class Application extends Component{
    constructor (props){
        super(props);

        this.state={
            count:0, 
            overTen: false
        }
    }
    handleClick = () =>{
        this.setState({count: this.state.count +1});
    }
    resetCount=(e)=>{
        this.setState({
            count: 0,
            overTen: false
        });

    }
    componentDidUpdate(props, state){
        if(this.state.count >10 && this.state.count !== state.count && !this.state.overTen){
            console.log("Updating over 10")
            this.setState({overTen: true});
        }
    }
    render(){
        let {count}= this.state;
        let name="Joy";
        return (
            <div>
                <p>Hi {name}, how are you?</p>
                
                <p>{name}, you clicked the button {count} times</p>
                <Highscore
                overTen={this.state.overTen}
                onReset={this.resetCount}
                
                />
                <span>
                    <button onClick={(e) => this.handleClick()}>Click here</button>
                </span>
            </div>
            

            );
    }

}
export default Application;


