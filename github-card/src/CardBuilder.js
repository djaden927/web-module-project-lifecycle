import React from 'react';

class CardBuilder extends React.Component{



    render(){
        const { details } = this.props
        
        return(
            
            <div>
                <h1>test</h1>
                <h2> {details.login}</h2>
                <h2>{details.location}</h2>
            </div>
        );
    }
}

export default CardBuilder;