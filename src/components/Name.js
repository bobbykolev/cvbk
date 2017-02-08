import React from 'react';

const Name = (props) => {
  function renderItems () {
    let items = [];

    Object.keys(props.data.contact).map(function (item) {
      if (props.data.contact[item]) {
        switch (item) {
          case 'name':
          case 'nickname':
          case 'description':
            items.push(<li key={item} >{props.data.contact[item]}</li>);
            break;
          default:
            break;
        }
      }
    });
    
    return items;
  }

  return (
    <div className="contact-name">
      <ul>
        {renderItems()}
      </ul>
    </div>
  );
};

export default Name;