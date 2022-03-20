const FunctionalComponentDemo = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                {/* CHALLENGE: Using dl, dt, and dd tags, refactor the FunctionalComponentDemo.js file so it shows a list of notes about Functional Components */} 
                <dl>
                    <h1>Functional Components</h1>
                    <p>Funtional Components are the primary tool used in React to build a small, modular piece of your application.</p>

                    <dt>Can access state</dt>
                    <dd>By passing props, Functional Components are capable of both rendering stat variables for display, as well as updating the value
                        of state variable(s). We'll take a deeper dive into state and props later on - so don't fret if that doesn't make sense right now.
                    </dd>

                    <dt>No <i>this</i> keyword</dt>
                    <dd>Class components (or stateful components) in React will always require the use of the <i>this</i> keyword when intializing an object using the constructor method. Functional Components (or display components), however, are instanceless - meaning they have no access to the *this keyword.</dd>

                    <dt>return()</dt>
                    <dd>Functional Components (as well as Class Components) must return a single element - but the single element returned from the function may have children elements nested inside of it.</dd>
                </dl>
            </div>
        </div>
    )
}

export default FunctionalComponentDemo