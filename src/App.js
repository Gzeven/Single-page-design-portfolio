import { Button } from './components/Button';
import {
  Consultation,
  Intro,
  AboutMe,
  BookMe,
  Slider,
} from './components/index';

import './index.css';

function App() {
  return (
    <main className="App">
      <Consultation />

      <Intro />
      <AboutMe />

      <Slider />
      <BookMe />
      <Consultation />
    </main>
  );
}

export default App;
