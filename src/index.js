import React from "react";
import ReactDOM from 'react-dom';
import Profile from './test.js';
import Button from './button.js';
import Image from './image.js';
import './index.css';
class App extends React.Component{
    render(){
        return(
            <div>
                <div className = "profile-section">
                    <Profile/>
                    <div className = 'flex-buttons'>
                        <Button class_name='Posts' num = "100"/>
                        <Button class_name ='Follower' num = '2,242'/>
                        <Button class_name ='Following' num = '1432'/>
                    </div>
                </div>
                <Image/>
            </div>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.body
);