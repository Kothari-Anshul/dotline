import React, {Component} from 'react';
import Bullet from './Bullet';
import String from './String';
class Header extends Component{
    render(){
        const headerStyle = {
            display:'flex',
            alignItems:'center'
           
        };
        return (
            <div style = {headerStyle}>
                <Bullet  color = 'red'/>
                <String text={this.props.text} fontSize ={this.props.fontSize}/>
            </div>
        );
    }
}
export default Header;