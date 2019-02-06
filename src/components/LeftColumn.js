import React, {PropTypes} from 'react';
import Contact from './Contact';
import Name from './Name';
import Skills from './Skills';

class LeftColumn extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div> 
          <div className="relative clear">
            <Contact data={this.props.data}/>
            <img className="main-img" src="./profile.jpg" />
          </div>
          <div> 
            <Name data={this.props.data}/>
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
