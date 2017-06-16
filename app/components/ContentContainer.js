import React, {Component} from 'react';

export default class ContentContainer extends Component{
    render(){
        return(
            <div className="list-container">
                {this.props.children}
            </div>
        )
    }
}
