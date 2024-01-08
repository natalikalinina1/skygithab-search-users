import Main from './pages/main/main.jsx';
import ErrorNotFound from './pages/errorNotFound/errorNotFound.jsx';
import * as S from './styles/style.jsx';
import React, { useState } from 'react';

export function App() {
  const [error, setError] = useState(false);
 
  return (
    <S.Wrapper>
      {error ? <ErrorNotFound /> : <Main setError={setError} />}
    </S.Wrapper>
  );
}

export default App;
