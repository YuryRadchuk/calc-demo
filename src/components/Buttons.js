import React from 'react'
import buttonsBox from '../data/buttonsBox'

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            out: '0'
        }
        this.refInput = React.createRef()
    }

    butHandler(value) {
        let screenValue = this.refInput.current

        this.setState({
            out: value
        })


        if (screenValue.value === '0') { screenValue.value = '' }
        screenValue.value += value

        if (value === 'C') { screenValue.value = '0' }



        // ************** Не понимаю, почему не работает через switch?******************//

        // let a = ''
        // let b = ''
        // let oper = ''
        // let finish = false
        // const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
        // const action = ['+', '-', '*', '/']

        // if (digit.includes(value)) {
        //     if (b === '' && oper === '') {
        //         screenValue.value += value
        //         a += screenValue.value
        //         console.log(a)
        //     }
        //     else if (a !== '' && b !== '' && finish) {

        //     }
        //     else {
        //         screenValue.value += value
        //         b += screenValue.value
        //         console.log(b)
        //     }
        //     return;
        // }

        // if (action.includes(value)) {
        //     oper = value
        //     screenValue.value = oper
        //     console.table(oper)
        //     return;
        // }

        // if (value === '=') {
        //     switch (oper) {
        //         case '+':
        //             a = (+a) + (+b);
        //             break;
        //         case '-':
        //             a = a - b;
        //             break;
        //         case '*':
        //             a = a * b;
        //             break;
        //         case '/':
        //             a = a / b;
        //             break;
        //     }
        //     finish = true;
        //     screenValue.value = a;
        //     console.log(a)
        // }

    }

    equalsResult(value) {
        let screenValue = this.refInput.current
        let geval = eval
        if (value === 'CE') {
            screenValue.value = screenValue.value.substring(0, screenValue.value.length - 1)
        }
        else if (value === '=') { screenValue.value = geval(screenValue.value) }

        else if (value === '%') { screenValue.value = geval(screenValue.value / 100) }

    }

    render() {
        return (
            <>
                <input className='screen' ref={this.refInput} type="text" defaultValue={this.state.out} />
                <div className='buttonsBox'>
                    {buttonsBox.buttons.map((item, index) => <button onClick={() => { this.butHandler(item.id) }} className='buttons' key={index.toString()}>{item.id}</button>)}
                    {buttonsBox.operations.map((item, index) => <button onClick={() => { this.equalsResult(item.id) }} className='buttons' key={index.toString()}>{item.id}</button>)}
                </div>
            </>
        )
    }
}

export default Buttons
