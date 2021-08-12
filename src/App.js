//import './App.scss';
import UserFeed from './components/feed/UserFeed.js';

function App() {
  return (
    <div className="App">
      <UserFeed />

      {/* Mobile nav bar rendered here */}
      {/* Fake Nav - this should be it's own component */}
      <div className='mobile-nav'>
          <img alt='home-icon'/>
          <img alt='search-icon'/>
          <img alt='notifications-icon'/>
          <img alt='messages-icon'/>
      </div>
    </div>
  );
}

export default App;
