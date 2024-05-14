import React, { Component } from 'react'
import loading from "../assets/ZKZg.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <img src={loading} alt="" className="text-center" />
      </div>
    )
  }
}
