import React from 'react';
import Card from './Card';

const Project = (props) => {
	function getDefaultObject () {
		return {
			"name": "",
			"description": "",
			"links": {
				"code": null,
				"demo": ""
			},
			"images": [
			],
			"technologies": [
			],
			"role": "",
			"workId": null
		};
	}

	function getUrl (url) {
		return './img/' + url;
	}

	function renderImages (images) {
		let result = [];

		images.map(function (img, index) {
			if (img.url) {
				if (img.url.indexOf('swf') > -1) {
					result.push(<li className="swf" key={'imgpr' + index}>
									<a className="ovelay-link" href={getUrl(img.url)} target="_blank">
									</a>
									<object type="application/x-shockwave-flash" data={getUrl(img.url)} 
										    width="80" height="50">
										    <param name="movie" value={getUrl(img.url)} />
										    <param name="quality" value="high" />
									</object>
        						</li>);
				} else {
					result.push(<li key={'imgpr' + index}><a href={getUrl(img.url)} target="_blank"> <img src={getUrl(img.url)} /></a></li>);
				}
			}
		});

		return result;
	}

	function getMoreDescription (data) {
		let result = [];

		if (data && data.length) {
			data.map(function (item, index) {
				result.push(<li key={'mdpr' + index}><div className="disc"></div><div>{item}</div></li>);
			});
		}

		return result;
	}

	return (
		<article>
			<div className="desc">
				{props.data.description}
			</div>
			<div className="desc">
				<ul className={props.data.more && props.data.more.length ? '' : 'hide'}>
					{getMoreDescription(props.data.more)}
				</ul>
			</div>
			<div className="thumbs">
			{ props.data.images && <ul>{renderImages(props.data.images)}</ul> }
			</div>
			<div className="tech">
				{ props.data.technologies.join(', ') }	
			</div>
			<div className="roles">
				{ props.data.role }
			</div>
			<div className="links">
				<ul>
					<li>{props.data.links.demo && <a target="_blank" href={props.data.links.demo}>Demo</a>}</li>
					<li>{props.data.links.code &&  <a target="_blank" href={props.data.links.demo}>Code</a>}</li>
				</ul>
			</div>
		</article>
	);
};

export default Project;