import React, {PropTypes} from 'react';
import Contact from './Contact';

class LeftColumn extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div>
          <img src="./profile.jpg" />
        </div>
        <Contact data={this.props.data}/>
      </div>
    );
  }
}

LeftColumn.propTypes = {
  data: PropTypes.object.isRequired
};

export default LeftColumn;
