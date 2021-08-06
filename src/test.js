import React from 'react';


class Profile extends React.Component{
    render(){
        return(
            <div className = "profile">
                <figure>
                    <img src ="images/profilePhoto.png" alt="rodney cotton profile"/>
                    <figcaption>Rodney Cotton</figcaption>
                </figure>
                <p>Helsinki, Finland</p>
            </div>
        );
    }
}

export default Profile;