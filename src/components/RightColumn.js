import React, {PropTypes} from 'react';
import Card from './Card';
import Skills from './Skills';

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
        
        <Skills data={this.props.data} windowWidth={this.state.windowWidth}/>
        
        <Card title={'Projects'} color={''}>

        </Card> 
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
