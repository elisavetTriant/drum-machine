import React from 'react'

class DrumPad extends React.Component {

    //method invoked immediately after component mounted using event listener
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
        //window.focus()//set focus to the current window
    }

    //method for when component to be removed from DOM
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    //method to handle a key down event from keyboard - play HTML audio and change display
    //no need to state actual keyCode
    handleKeyDown = (event) => {
        if(event.keyCode === this.props.padLetter.charCodeAt()) {
            this.audio.play()
            this.audio.currentTime = 0 //set time audio should play at (0 seconds)
            this.props.handleDisplay(this.props.id)
        }
    }
    //method to handle a click event on any of the 8 drum pads
    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0 //set time audio should play at (0 seconds)
        this.props.handleDisplay(this.props.id)//changes value of parameter used in display function
    }

    //render letters on pads
    render() {
        const {id, src, padLetter} = this.props;
        return(
            <div className="drum-pad" id={id} onClick={this.handleClick}>
                <span>{padLetter}</span>
                <audio ref={ref => this.audio = ref} className="clip" src={src} id={padLetter}/>
            </div>
        )
    }
}

export default DrumPad