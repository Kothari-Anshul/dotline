import React, {Component} from 'react';

class Bullet extends Component{
    render(){
        const bulletStyle = {
            backgroundColor:this.props.color,
            height:'10px',
            width:'10px',
            borderRadius:'5px'
        };
        return (
            <div style = {bulletStyle}></div>
        );
    }
}
export default Bullet;