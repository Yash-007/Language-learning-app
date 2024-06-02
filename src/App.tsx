import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';

const Home = lazy(()=> import('./components/Home'));
const Quiz = lazy(()=> import('./components/Quiz'));
const Result = lazy(()=> import('./components/Result'));
const Learning = lazy(()=> import('./components/Learning'));
const Loader = lazy(()=> import('./components/Loader'));


function App() {
  return (
   <>
   <Router>
    <Header/>
     <Suspense fallback={<Loader/>}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/learn' element={<Learning/>}/>
    </Routes>
     </Suspense>
   </Router>
   </>
  )
}

export default App