import React, {Component} from 'react';

class Highscore extends Component{
    

    //render method
    render(){
        if(this.props.overTen){
            return(
                <div>
                <p>Beat high score of 10!</p>
                <button onClick={this.props.onReset}>Reset</button>
                </div>
                
            )

        }else
        {
            return null;
        }
       
    }
}
export default Highscore;