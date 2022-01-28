import { render } from '@testing-library/react'
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
    }
  }
  increment = () => {
    this.setState({ number: this.state.number + 1 })
  }
  decrement = () => {
    this.setState({ number: this.state.number - 1 })
  }
  neutral = () => {
    this.setState({ number: 0 })
  }
  render() {
    return (
      <div
        className='row '
        style={{ justifyContent: 'center', marginTop: '200px' }}
      >
        <div className='col-md-6 shadow-lg p-3 mb-5 bg-white rounded'>
          <h1>React counter</h1>
          <h1>{this.state.number}</h1>
          <button className='btn btn-primary' onClick={this.increment}>
            Increment
          </button>
          <button className='btn btn-info' onClick={this.decrement}>
            Decrement
          </button>
          <button className='btn btn-secondary' onClick={this.neutral}>
            Neutral
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
