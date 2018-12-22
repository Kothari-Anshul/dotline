import React, {Component} from 'react';

class String extends Component{
    render(){
        return (
            <div style ={{padding:'15px', fontSize:this.props.fontSize}}>{this.props.text}</div>
        );
    }
}
export default String;