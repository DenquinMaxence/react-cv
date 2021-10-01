import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';

const index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default index;