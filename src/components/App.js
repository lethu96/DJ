import React, { Component } from 'react';
import  '../assets/css/app.css';
const drumKit = [
  {
   name: 'Handsome',
   key: 'H',
   src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  
  {
    name: 'Lovely',
    key: 'L',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  
  {
    name: 'Sweet',
    key: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  
  {
    name: 'Beauty',
    key: 'B',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  
  {
    name: 'Clap' ,
    key: 'C',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  
  {
    name: 'Kind',
    key: 'K',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  
  {
    name: "Man",
    key: 'M',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  
  {
    name: 'Friendly',
    key: 'F',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  
  {
    name: 'Modest',
    key: 'M',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundName : '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = (e) => {
    this.setState({
      soundName: e.target.id
    });
    const id = e.target.innerText.trim();
    const audio = this.refs[id];
    audio.play();
  }

  handleChange = (e) => {
    const volume = e.target.value/100;
    document.querySelectorAll('audio').forEach(el => el.volume = volume);
  }


  render() {

    let drumPad = drumKit.map(item => 
    <div className="drum-pad" onClick={this.handleClick} id={item.name}>
        {item.key}
        <audio className="clip" ref={item.key} id={item.key} src={item.src}></audio>
      </div>);

    return (
      <div id="drum-machine">
        <h1>Drum Pad YL </h1>
        <div id="container">
          <div id="content">
             {drumPad}
          </div>
          <div id="display">
            { this.state.soundName }
            <div className="volume">
              <label for="volume-range">Volume</label>
              <input id="volume-range" type="range" min="0" max="100" class="volume" onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
