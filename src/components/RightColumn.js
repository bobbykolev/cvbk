import React, {PropTypes} from 'react';
import Card from './Card';
import Skills from './Skills';
import Projects from './Projects';

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
        
        {/*<Skills data={this.props.data} windowWidth={this.state.windowWidth}/>*/}
        <Projects data={this.props.data} />
        
        <Card title={'Work'} color={''}>
          
        </Card> 
        <Card title={'Education'} color={''}>
          
        </Card>
      </div>
    );
  }
}

RightColumn.propTypes = {
  data: PropTypes.object.isRequired
};

export default RightColumn;
