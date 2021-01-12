import React, { Component } from "react";
import posts from "./../../post_data.json";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  componentDidMount() {
    const {id} = this.props.match.params;
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be filtering an array of dummy data
    let post = posts.find(post => post.id === +id);
    this.setState({
      title: post.title,
      content: post.content
    });
  }
  render() {
    console.log(this.props)
    const { title, content } = this.state;
    return (
      <div className="Post">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }
}

export default Post;
