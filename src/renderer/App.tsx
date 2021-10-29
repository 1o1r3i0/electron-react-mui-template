import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import ApplicationBar from './parts/ApplicationBar';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import AddContacts from './pages/AddContact';

const AppHeader = () => {
  return (
    <header>
      <ApplicationBar />
    </header>
  );
};

const AppFooter = () => {
  return (
    <footer>
      <div />
    </footer>
  );
};

export default function App() {
  return (
    <div>
      {/* ルーティング処理 */}
      <Router>
        {/* アプリケーションヘッダ */}
        <AppHeader />
        {/* メイン部分 */}
        <main>
          <Switch>
            <Route path="/contacts" component={Contacts} />
            <Route path="/add-new-contact" component={AddContacts} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        {/* アプリケーションフッタ */}
        <AppFooter />
      </Router>
    </div>
  );
}
