import React from 'react'

class NumberInputField extends React.Component {
    handleChange = e => {
        this.props.action(this.props.id, e.target.value);
    }
    
    render() {
        return (
            <input onChange={this.handleChange}></input>
        )
    }

}

export default NumberInputField;