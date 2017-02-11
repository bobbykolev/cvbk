import React, { Component } from 'react';
import Card from './Card';
import Lightbox from 'react-image-lightbox';

class Cert extends Component  {
	constructor () {
		super();

		this.getUrl = this.getUrl.bind(this);
		this.renderImages = this.renderImages.bind(this);
		this.getMoreDescription = this.getMoreDescription.bind(this);
		this.imgClick = this.imgClick.bind(this);
		
		this.onCloseRequest = this.onCloseRequest.bind(this);
		this.onMovePrevRequest = this.onMovePrevRequest.bind(this);
		this.onMoveNextRequest = this.onMoveNextRequest.bind(this);

		this.state = {
            photoIndex: 0,
            isOpen: false
        };
	}

	getUrl (url) {
		return './img/' + url;
	}

	imgClick (index, instance, e) {
		e && e.preventDefault();

		this.setState({
			photoIndex: index,
            isOpen: true	
		});
	}

	renderImages (images) {
		let result = [],
			that = this;

		images.map(function (img, index) {
			if (img.url) {
				result.push(<li key={'imgpr' + index}><a onClick={that.imgClick.bind(that, index)}> <img src={that.getUrl(img.url)} /></a></li>);
			}
		});

		return result;
	}

	getMoreDescription (data) {
		let result = [];

		if (data && data.length) {
			data.map(function (item, index) {
				result.push(<li key={'mdpr' + index}><div className="disc"></div><div>{item}</div></li>);
			});
		}

		return result;
	}

	onCloseRequest () { 
		this.setState({ isOpen: false });
	}

	onMovePrevRequest () { 
		this.setState({
        	photoIndex: (this.state.photoIndex + this.props.data.certificates.length - 1) % this.props.data.certificates.length
    	});
	}

	onMoveNextRequest () { 
		this.setState({
	        photoIndex: (this.state.photoIndex + 1) % this.props.data.certificates.length
	    });
	}

	render () {
		const {
            photoIndex,
            isOpen,
        } = this.state;

		return (
			<div className="work cert">
				<Card title={'Certificates'} color={'orange'}>
					<ul>
						{this.renderImages(this.props.data.certificates)}
					</ul>
				</Card>
				{this.state.isOpen &&
                    <Lightbox
                        mainSrc={this.getUrl(this.props.data.certificates[photoIndex].url)}
                        nextSrc={this.getUrl(this.props.data.certificates[(photoIndex + 1) % this.props.data.certificates.length].url)}
                        prevSrc={this.getUrl(this.props.data.certificates[(photoIndex + this.props.data.certificates.length - 1) % this.props.data.certificates.length].url)}

                        onCloseRequest={this.onCloseRequest}
                        onMovePrevRequest={this.onMovePrevRequest}
                        onMoveNextRequest={this.onMoveNextRequest}
                    />
                }
			</div>
		);
	}
};

export default Cert;