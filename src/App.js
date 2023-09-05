import './scss/app.scss';

import Header from './components/Header/Header';
import CardBook from './components/CardBook/CardBook';
import LoadButton from './components/LoadButton/LoadButton';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <h3 className='result'>Found 443 results</h3>
        <div className="content">
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
        </div>
        <LoadButton/>
      </div>
    </div>
  );
}

export default App;
