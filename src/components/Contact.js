import React from 'react';

const Contact = (props) => {
  function renderItems () {
    let items = [];

    Object.keys(props.data.contact).map(function (item) {
      if (props.data.contact[item]) {
        switch (item) {
          case 'bday':
            //items.push(<li key={item} >{new Date(props.data.contact[item]).toLocaleDateString('bg')}</li>);
            break;
          case 'linkedIn':
            items.push(<li className="floated" key={item} ><a target="_blank" href={props.data.contact[item]}><i className="lin"></i></a></li>);
            break;
          case 'github':
            items.push(<li className="floated" key={item} ><a target="_blank" href={props.data.contact[item]}><i className="github"></i></a></li>);
            break;
          case 'phone':
            items.push(<li key={item} ><a target="_blank" href={'tel:' + props.data.contact[item]}>{props.data.contact[item]}</a></li>);
            break;
          case 'email':
            items.push(<li key={item} ><a href={'mailto:' + props.data.contact[item]}>{props.data.contact[item]}</a></li>);
            break;
          case 'website':
            items.push(<li key={item} ><a target="_blank" href={props.data.contact[item]}>{props.data.contact[item].slice(7)}</a></li>);
            break;
          case 'name':
            //items.push(<li key={item} ><a target="_blank" href={props.data.contact[item]}>{props.data.contact[item].slice(7)}</a></li>);
            break;
          case 'nickname':
            //items.push(<li key={item} ><a target="_blank" href={props.data.contact[item]}>{props.data.contact[item].slice(7)}</a></li>);
            break;
          case 'description':
            //items.push(<li key={item} ><a target="_blank" href={props.data.contact[item]}>{props.data.contact[item].slice(7)}</a></li>);
            break;
          default:
              items.push(<li key={item} >{props.data.contact[item]}</li>);
            break;
        }
      }
    });
    
    return items;
  }

  return (
    <div className="contacts">
      <ul>
        {renderItems()}
      </ul>
    </div>
  );
};

export default Contact;