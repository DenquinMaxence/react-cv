import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import ThemePicker from '../ThemePicker';

const index = () => {
    return (
        <BrowserRouter>
            <ThemePicker />
            <Switch>
                <Route path="/react-cv/" exact component={Home} />
                <Redirect to="/react-cv/" />
            </Switch>
        </BrowserRouter>
    );
};

export default index;