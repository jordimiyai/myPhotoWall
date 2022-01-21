import React, { Component } from "react";

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        const imageLink = e.target.elements.link.value
        const description = e.target.elements.description.value
        const newPost = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink,
        }
        if(imageLink && description){
            this.props.onAddPhoto(newPost)
        }

    }

    render(){
        return <div>
            <h1>PhotoWall</h1>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button>Post</button>
                </form>
            </div>
        </div>
    }
}
export default AddPhoto;