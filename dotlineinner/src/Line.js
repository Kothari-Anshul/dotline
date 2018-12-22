import React, { Component } from 'react';

class Line extends Component{
    render(){
        // build the lineStyle as per the props;
        const lineStyle = {
            height: this.props.height,
            width: this.props.width,
            backgroundColor: this.props.color,
            left:this.props.left,
            top:this.props.top,
            position:'absolute'
        };
        return (
            <div style = {lineStyle}></div>
        );
    }
}
export default Line;