import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './App.css';
import BasicGridPage from './Pages/BasicGridPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [active, setActive] = useState(1);

  return (
    <div className="App">
      <Tabs activeKey={active}>
        <Tab eventKey={1} title="Basic Grid" onClick={setActive}>
          <BasicGridPage />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
