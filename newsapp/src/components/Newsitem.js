import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, url, author, date } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem