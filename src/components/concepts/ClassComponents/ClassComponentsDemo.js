import React from 'react';

class ClassComponentDemo extends React.Component {
    render(){
        return (
            <div className='main'>
                <div className='mainDiv'>
                <dl>
                    <h1>Class Components</h1>
                    <p>Class components are the bread and butter of most React applications. While more verbose than functional components, they offer more control in the form of of state management and life-cycle methods.</p>

                    <dt>Must extend React.Component</dt>
                    <dd>The <i>extends React.Component</i> statement creates an inheritance to <i>React.Components</i>, and gives your component access to <i>React.Component(s)</i> functions and methods. Without extending from <i>React.Components</i>, your class will just be a plain ol' JavaScript class with no access to any React-specific functionality. </dd>

                    <dt>Requires a <i>render()</i> method</dt>
                    <dd>Unlike functional components that require a return, class componenta utilize both the <i>render()</i> method, as well as the <i>return</i> keyword. A class component MUST utilize the <i>render()</i> method, or it will throw out an error.</dd>

                    <dt>State Management</dt>
                    <dd>The state of an instance of a React class component that can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.</dd>

                    <dt>Life-cycle methods</dt>
                    <dd>You can think of the React life-cycle as a series of events that happen starting with the birth of a React Component, all the way to its death. Every component in React goes through a life-cycle of events, which we can access to perform certain tasks during a particular point in the components life-cycle. <b>E.g.:</b> when the component is created, I want to fire off a fetch request.</dd>
                </dl>
                </div>

            </div>
        )
    }
}

export default ClassComponentDemo;