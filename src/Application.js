import React, {Component} from 'react';

class Application extends Component{
    constructor (props){
        super(props);

        this.state={
            count:0 
        }
    }
    handleClick = () =>{
        
    }
    render(){
        let {count}= this.state;
        let name="Joy";
        return (
            <div>
                <p>Hi {name}, how are you?</p>
                <p>{name}, you clicked the button {count} times</p>
                <span>
                    <button>Click here</button>
                </span>
            </div>
            

            );
    }

}
export default Application;


