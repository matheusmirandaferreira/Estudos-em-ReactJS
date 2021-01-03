import React from 'react';
import '../main.css'
export default class Comment extends React.Component {
    render() {
        return (
        <p className="commenter">{ this.props.text }</p>
        )
    }
}