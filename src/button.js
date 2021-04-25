import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <div className="button">
                <p>{this.props.num}</p>
                <p id="follower">{this.props.class_name}</p>
            </div>
        );
    }
}

export default Button;