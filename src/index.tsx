import Script from "./script";
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';

function Index() {
    return (
        <div className="flex items-center justify-center min-w-full h-screen dark:bg-gray-900">
            <p className="m-32 text-6xl font-bold dark:text-white">Coming soon!</p>
        </div>
    );
}

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/script" component={Script}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'));