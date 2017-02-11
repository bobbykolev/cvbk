import React, { PropTypes } from 'react';
import Projects from './Projects';
import Works from './Works';
import Edu from './Edu';
import Cert from './Cert';

class RightColumn extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onResize = this.onResize.bind(this);
  }

  componentWillMount () {
    window.addEventListener('resize', this.onResize);
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  onResize () {
    this.setState({
      windowWidth: window.innerWidth
    });  
  }

  render() {
    return (
      <div>
        <Projects data={this.props.data} windowWidth={this.state.windowWidth} />

        <Works data={this.props.data} windowWidth={this.state.windowWidth} />

        <Edu data={this.props.data} windowWidth={this.state.windowWidth} />

        <Cert data={this.props.data} windowWidth={this.state.windowWidth} />
      </div>
    );
  }
}

RightColumn.propTypes = {
  data: PropTypes.object.isRequired
};

export default RightColumn;
