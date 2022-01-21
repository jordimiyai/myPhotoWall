import React from "react";
import PropTypes from 'prop-types'

export default function Photo(props){
    const { post, onRemovePhoto } = props

    return <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} /> 
        <figcaption><p>{post.description}</p></figcaption>           
        <div className="button-container">
            <button className="button" value={post} onClick={() => onRemovePhoto(post)}>Remove</button>
        </div>
</figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}