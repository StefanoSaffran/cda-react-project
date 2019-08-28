import React, { Component } from 'react';

class CustomInput extends Component {

    render() {
        return (
            <div className="row">
                <div className="input-field col s4">
                    <label className="input-field" htmlFor={this.props.id}>{this.props.label}</label>
                    <input
                        {...this.props}
                        className="validate"
                        
                    />
                </div>
            </div>
        );
    }
}

export default CustomInput