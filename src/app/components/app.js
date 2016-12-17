import React from 'react';
import Header from './header.js';
import {connect} from 'react-redux';
import {Col, Row, Preloader} from 'react-materialize';
import NotificationSystem from 'react-notification-system';

class App extends React.Component {

  constructor() {
    super();
    this.handleNotif = this.handleNotif.bind(this);
    this.active = false;
  }

  componentWillReceiveProps(nextProps) {
    let level = 'success';

    if (nextProps.status === 0) {
      this.active = true;
    } else {
      this.active = false;
    }

    if (nextProps.status === -1) {
      level = 'error';
    }

    if (nextProps.message.length > 0) {
      this._notificationSystem.addNotification({
        message: nextProps.message,
        level
      });
    }
  }

  handleNotif(n) {
    this._notificationSystem = n;
  }

  render() {
    return (
      <div>
        <NotificationSystem ref={this.handleNotif}/>
        <Header/>
        <Row>
          <Col s={12}>
            <Preloader size="small" color="green" active={this.active}/>
          </Col>
        </Row>
        <Row>
          <Col offset="s1 m1 l2" s={10} m={10} l={8}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
  status: React.PropTypes.number.isRequired,
  message: React.PropTypes.string
};

const mapStateToProps = state => {
  return {
    status: state.status,
    message: state.message
  };
};

export default connect(mapStateToProps)(App);

