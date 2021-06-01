import React from "react";

class MyFollowing extends React.Component{


    render(){
        const { followers } = this.props;
        return(
            <div>
                {followers.map(follower => <h1 key={follower.id}>{follower.login}</h1>)}
            </div>
        );
    }
}

export default MyFollowing;