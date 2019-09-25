import React from 'react'
import NumberInputField from './NumberInputField/NumberInputField'
import OutputField from './OutputField/OutputField'

class Multiplier extends React.Component {
    state = {
        input1: 0,
        input2: 0,
        product: 0
    }
    
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         input1: 0,
    //         input2: 0,
    //         product: 0
    //     }
    //     this.multiply = this.multiply.bind(this);
    // }

    multiply = (id, val) => {
        if (id === 1) {
            this.setState({
                input1: val,
                product: val * this.state.input2
            })
        } else if (id === 2) {
            this.setState({
                input2: val,
                product: val * this.state.input1
            })
        }
    }

    render() {
        return(
        <div>
            <NumberInputField id={1} name="input1" action={this.multiply}/>
            <NumberInputField id={2} name="input2" action={this.multiply}/>
            <br></br>
            
            <OutputField output={this.state.product}/>
        </div>
        )
    }
}

export default Multiplier