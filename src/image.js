import React from 'react';

class Image extends React.Component{
    render(){
        return(
            <div className='container'>
                <img src ='images/photo1.png' alt="flower plant" className ="photo_1"/>
                <img src ='images/photo2.png' alt ="sofa" className ="photo_2"/>
                <img src ='images/photo3.png' alt ="bath tube" className ="photo_3"/>
                <img src ='images/photo4.png' alt ='lamp stand' className ="photo_4"/>
                <img src ='images/photo5.png' alt="plant" className ="photo_5"/>
                <img src ='images/photo6.png' alt="basket" className ="photo_6"/>
            </div>
        );
    }
}
export default Image;