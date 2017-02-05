import React from 'react';

const Contact = (props) => {
  function renderItems () {
    let items = [];

    Object.keys(props.data.contact).map(function (item) {
      if (props.data.contact[item]) {
        if (item == 'bday') {
          items.push(<li key={item} >{new Date(props.data.contact[item]).toLocaleDateString('bg')}</li>);
        } else if (item == 'linkedIn') {
          items.push(<li className="floated" key={item} ><a target="_blank" href={props.data.contact[item]}><i className="lin"></i></a></li>);
        } else if (item == 'github') {
          items.push(<li className="floated" key={item} ><a target="_blank" href={props.data.contact[item]}><i className="github"></i></a></li>);
        } else if (item == 'phone') {
          items.push(<li key={item} ><a target="_blank" href={'tel:' + props.data.contact[item]}>{props.data.contact[item]}</a></li>);
        } else if (item == 'email') {
          items.push(<li key={item} ><a href={'mailto:' + props.data.contact[item]}>{props.data.contact[item]}</a></li>);
        } else if (item == 'website') {
          items.push(<li key={item} ><a target="_blank" href={props.data.contact[item]}>{props.data.contact[item].slice(7)}</a></li>);
        } else {
          items.push(<li key={item} >{props.data.contact[item]}</li>);
        }
      }
    });
    
    return items;
  }

  return (
    <div>
      <ul>
        {renderItems()}
      </ul>
    </div>
  );
};

export default Contact;