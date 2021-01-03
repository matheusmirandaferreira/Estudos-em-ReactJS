import React from 'react'
import Post from './post'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>First application with ReactJS</h1>
                <hr />
                <Post title="Aprendendo React" />
                <Post title="ReactJS é foda" />
                <Post title="em breve mais conteudo" />
            </div>
        );
    }
}