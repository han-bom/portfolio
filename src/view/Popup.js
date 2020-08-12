import React, { Component } from 'react';

import '../css/Popup.css';

class Popup extends Component {
    render() {
        return (
           <div className={"popup " + (this.props.show ? 'show' : 'hide')} onClick={this.props.close}>
               <div className="container">
                    <img src={this.props.contents}/>
               </div>
           </div>
        )
    }
}

export default Popup;
