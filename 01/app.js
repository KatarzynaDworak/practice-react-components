//ok 
import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        counter: 0,
    }
    constructor (props) {
        super(props);
        this.state = { counter: 0 };
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.id = setInterval(() => {
            this.setState((prevState) => ({ counter: prevState.counter + 1 }));
            console.log('Interval running');  
        }, 5000);
    }

    componentDidUpdate() {
            console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    render() {
        return <h1>{ this.state.counter }</h1>;
    }

}

root.render(<App/>);
