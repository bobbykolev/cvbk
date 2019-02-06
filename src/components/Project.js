import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-image-lightbox';

class Project extends Component  {
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
				if (img.url.indexOf('swf') > -1) {
					result.push(<li className="swf" key={'imgpr' + index}>
									<a className="ovelay-link" href={that.getUrl(img.url)} target="_blank">
									</a>
									<object type="application/x-shockwave-flash" data={that.getUrl(img.url)} 
										    width="80" height="50">
										    <param name="movie" value={that.getUrl(img.url)} />
										    <param name="quality" value="high" />
									</object>
        						</li>);
				} else {
					//result.push(<li key={'imgpr' + index}><a href={that.getUrl(img.url)} target="_blank"> <img src={that.getUrl(img.url)} /></a></li>);
					result.push(<li key={'imgpr' + index}><a onClick={that.imgClick.bind(that, index)}> <img src={that.getUrl(img.url)} /></a></li>);
				}
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
        	photoIndex: (this.state.photoIndex + this.props.data.images.length - 1) % this.props.data.images.length
    	});
	}

	onMoveNextRequest () { 
		this.setState({
	        photoIndex: (this.state.photoIndex + 1) % this.props.data.images.length
	    });
	}

	render() {
		const {
            photoIndex,
        } = this.state;

		return (
			<article>
				<div className="links">
					<ul>
						<li>{this.props.data.links.demo && <a target="_blank" href={this.props.data.links.demo}>Demo</a>}</li>
						<li>{this.props.data.links.code &&  <a target="_blank" href={this.props.data.links.code}>Code</a>}</li>
					</ul>
				</div>
				<div className="tech">
					{ this.props.data.technologies.join(', ') }	
				</div>
				<div className="roles">
					{ this.props.data.role }
				</div>
				<div className="desc">
					{this.props.data.description}
				</div>
				<div className="desc">
					<ul className={this.props.data.more && this.props.data.more.length ? '' : 'hide'}>
						{this.getMoreDescription(this.props.data.more)}
					</ul>
				</div>
				<div className="thumbs">
				{ this.props.data.images && <ul>{this.renderImages(this.props.data.images)}</ul> }
				</div>

				{this.state.isOpen &&
                    <Lightbox
                        mainSrc={this.getUrl(this.props.data.images[photoIndex].url)}
                        nextSrc={this.getUrl(this.props.data.images[(photoIndex + 1) % this.props.data.images.length].url)}
                        prevSrc={this.getUrl(this.props.data.images[(photoIndex + this.props.data.images.length - 1) % this.props.data.images.length].url)}

                        onCloseRequest={this.onCloseRequest}
                        onMovePrevRequest={this.onMovePrevRequest}
                        onMoveNextRequest={this.onMoveNextRequest}
                    />
                }
			</article>
		);
	}
}

Project.propTypes = {
	data: PropTypes.object.isRequired
};

export default Project;