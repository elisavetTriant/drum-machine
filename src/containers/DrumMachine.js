import React from 'react'
import DrumPad from '../components/DrumPad';
import drumPadsInfo from '../data/data';

class DrumMachine extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            display: ''
        }
    }


    //changes state of display according to value of this.props.id in handleClick method
    handleDisplay  = (display) => this.setState({ display })

    render(){

        return(
            <div id="drum-machine">
                <div>
                    <h1>Drum Machine</h1>
                </div>
                <div id="display">
                    {this.state.display}
                </div>
                <div id="drum-pads">
                    {drumPadsInfo.map((pad, index) => (
                        <DrumPad key={index} id={pad.id} padLetter={pad.padLetter} src={pad.src} handleDisplay = {this.handleDisplay}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default DrumMachine