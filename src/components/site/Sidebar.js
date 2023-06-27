import {
    Route,
    Link,
    Routes
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponents/FunctionalComponentDemo'
import ClassComponentDemo from '../concepts/ClassComponents/ClassComponentsDemo';
import JSX from '../concepts/JSX/JSX';
import State from '../concepts/State/State'
import Effects from '../concepts/Effects';
import Props from '../concepts/Props/Props'
import Hooks from '../concepts/Hooks';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import NytApp from '../apps/nyt-app/NytApp';
// import NytResults from '../apps/nyt-app/NytResults';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalComponent'>Functional Component</Link></li>
                    <li><Link to='/classComponent'>Class Component</Link></li>
                    <li><Link to='/JSX'>JSX</Link></li>
                    <li><Link to='/state'>State</Link></li>
                    <li><Link to='/effects'>Effects</Link></li>
                    <li><Link to='/props'>Props</Link></li>
                    <li><Link to='/hooks'>Hooks</Link></li>
                    <li><Link to='/timer'>TimePiecesApp</Link></li>
                    <li><Link to='/nyt'>New York Times Search</Link></li>
                    {/* <li><Link to='/results'>New York Times Results</Link></li> */}
                </ul>
            </div>
            <div className='sidebar-route'>
                <Routes>
                    <Route exact path='/home' element={<Home />}></Route>
                    <Route exact path='/resources' element={<Resources />}></Route>
                    <Route exact path='/functionalComponent' element={<FunctionalComponentDemo />}></Route>
                    <Route exact path='/classComponent' element={<ClassComponentDemo />}></Route>
                    <Route exact path='/jsx' element={<JSX />}></Route>
                    <Route exact path='/state' element={<State />}></Route>
                    <Route exact path='/effects' element={<Effects />}></Route>
                    <Route exact path='/props' element={<Props />}></Route>
                    <Route exact path='/hooks' element={<Hooks />}></Route>
                    <Route exact path='/timer' element={<TimePiecesApp />}></Route>
                    <Route exact path='/nyt' element={<NytApp />}></Route>
                    <Route exact path='/' element={<Home />}/>
                    {/* <Route exact path='/nytresults' element={<NytResults />}></Route> */}
                </Routes>
            </div>
        </div>
    )
}

export default Sidebar;