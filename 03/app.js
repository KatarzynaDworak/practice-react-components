import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
    }
    
    render() {
        const {title, body} = this.props;
        console.log(this.state.comments);
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const newValue = e.target[0].value;
                        this.setState({
                            comments: [...this.state.comments, newValue]
                            });
                        e.target[0].value = '';
                        console.log(newValue);
                    }}>
                        <div>
                            <label>
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {
                            this.state.comments.map(newComment => {
                                return (
                                    <li key={newComment}>{newComment}</li>
                                )
                            })
                        }
                    </ul>
                </section>
            </article>
        )
    }
}

root.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
