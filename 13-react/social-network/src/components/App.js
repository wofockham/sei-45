import Clock from './Clock';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <h1>Social Network</h1>

      <Clock />

      <Profile name="Groucho Marx" age="45" motto="No gods no monster" pic="http://www.fillmurray.com/500/500" />
      <Profile name="Harpo Marx" age="44" pic="http://www.fillmurray.com/501/500" />
      <Profile name="Chico Marx" age="46" motto="No gods no monster" pic="http://www.fillmurray.com/499/500" />
    </div>
  );
}

export default App;
