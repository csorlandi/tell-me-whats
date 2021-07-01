import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import GlobalStyles from './styles/global';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <>
          <GlobalStyles />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
