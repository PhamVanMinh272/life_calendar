import React from 'react';
import './App.css';
import Year from './components/year/index';
import EventProgressBar from './components/eventProgressBar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  generateYearList() {
    let yearElement = []
    let rowYear = []
    let count = 0
    for (let i=2021; i<2068; i++) {
      ++count
      rowYear.push(<Year key={i} yearValue={i} />)
      if (count===2) {
        count = 0
        yearElement.push(<div key={i} className="row-year">{rowYear}</div>)
        rowYear = []
      }
      
    }
    if (rowYear) {
      yearElement.push(<div key="2067" className="row-year">{rowYear}</div>)
    }
    return yearElement
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          Life Calendar
        </p>
      </header>
      <div className="content">
        <EventProgressBar />
        <div className="years-container">
          {this.generateYearList()}
        </div>
      </div>
      <footer></footer>
    </div>
    )
  }
}

export default App;
