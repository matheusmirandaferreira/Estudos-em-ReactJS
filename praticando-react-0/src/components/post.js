import React from "react";
import '../main.css'
import Comment from "./comment";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
        newCommentText: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)

}

  handleSubmit(e) {
    this.setState({
        comments: [
            ...this.state.comments,
            { text: this.state.newCommentText }
        ]
    })  

    this.setState({ newCommentText: '' })

    e.preventDefault();
}

handleTextChange(e) {
    this.setState({ newCommentText: e.target.value })
}

  render() {
    return (
      <div className="field">
        <h2>{this.props.title}</h2>
        <form onSubmit={this.handleSubmit}>
            <input className="input" value={this.state.newCommentText}
            onChange={this.handleTextChange} />
            <button className="btn" type="submit">Comentar</button>
        </form>
        {this.state.comments.map((comment, index) => {
          return <Comment className="commenter" key={index} text={comment.text} />;
        })}
      </div>
    );
  }
}
