import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: false, buttonText: 'Subscribe'}

  onClickFun = () => {
    const {status} = this.state
    if (status === false) {
      this.setState({status: true, buttonText: 'Subscribe'})
    } else {
      this.setState({status: false, buttonText: 'Subscribed'})
    }
  }

  render() {
    const {buttonText} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" onClick={this.onClickFun} className="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
