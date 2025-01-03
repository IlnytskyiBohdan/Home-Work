import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import TodoList from './components/TodoList/TodoList';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import NotFound from './components/NotFound/NotFound';
import { ThemeContext, themes } from './themeContext';

function App() {
  const theme = useState(themes.orange);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <ErrorBoundary>
          <div className='content' style={{ background: theme[0].background }}>
            <Header />
            <main>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path='/' element={<Main />} />
                <Route path='/todo-list' element={<TodoList />} />
                <Route path='/contacts' element={<Contacts />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
