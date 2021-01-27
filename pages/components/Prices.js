import React from "react";
class Prices extends React.Component{
    state = {
        currency:  "USD",
    };
    
    render(){
        return(
            <div>
                <li>Bitcoin price for {this.props.prices}: {this.props.prices}</li>
            </div>
        );
    }
};

export default Prices;