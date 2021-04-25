import React from 'react';

class Image extends React.Component{
    render(){
        return(
            <div className='container'>
                <img src ='images/photo1.png' alt="flower plant"/>
                <img src ='images/photo2.png' alt ="sofa" className ="photo2"/>
                <img src ='images/photo3.png' alt ="bath tube" className ="photo3"/>
                <img src ='images/photo4.png' alt ='lamp stand'/>
                <img src ='images/photo5.png' alt="plant" className ="photo5"/>
                <img src ='images/photo6.png' alt="basket" className ="photo5"/>
            </div>
        );
    }
}
export default Image;