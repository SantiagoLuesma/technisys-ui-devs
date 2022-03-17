import { useState } from 'react';
import Container from './components/Container/Container';

import { AppContext } from './context/appContext';


const App = () => {

  const [loader, setLoader] = useState(false);

  return (
    <AppContext.Provider value={ [loader, setLoader] }>
      <Container />
    </AppContext.Provider>
  );
};

export default App;
