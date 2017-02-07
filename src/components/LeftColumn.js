import React, {PropTypes} from 'react';
import Contact from './Contact';
import Card from './Contact';
import Skills from './Skills';

class LeftColumn extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div> 
          <div>
            <img src="./profile.jpg" />
          </div>
          <div> 
            <Contact data={this.props.data}/>
          </div>
        </div>
        <div> 
            <Skills data={this.props.data} windowWidth={800}/>
        </div>
      </div>
    );
  }
}

LeftColumn.propTypes = {
  data: PropTypes.object.isRequired
};

export default LeftColumn;
