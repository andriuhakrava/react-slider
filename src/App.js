import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data/data';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
      const newIndex = this.state.property.index + 1;
      this.setState({
        property: data.properties[newIndex]
      });
  }

  prevProperty = () => {
      const newIndex = this.state.property.index - 1;
      this.setState({
        property: data.properties[newIndex]
      });
  }

  render(){
    const { properties, property } = this.state;
    return (
        <div className="App">
          <div className="btn-wrapper">
          <button onClick={() => this.prevProperty()} 
                  disabled={property.index === 0}>Prev</button>
          <button onClick={() => this.nextProperty()} 
                    disabled={property.index === data.properties.length - 1}>Next</button>
          </div>
          <div className="page">
            <h1>Image Slideshow on React</h1>
            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{ 
                      'transform': `translateX(-${property.index*( 100 / properties.length)}%)`
                }}>
                  {
                    properties.map(property => <Card key={property.id} property = {property} />)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
