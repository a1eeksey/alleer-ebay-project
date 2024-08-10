// Router
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/App.css'

// Pages
import HomePage from './pages/HomePage';
import FAQ from './pages/FAQPage';
import Integrations from './pages/IntegrationsPage';
import Feature from './pages/FeaturePage';
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import ForgotPass from './pages/ForgotPasswordPage';
import CreateNewPass from './pages/CreateNewPassword';
import Dashboard from './pages/Dashboard';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/faq' element={<FAQ />}/>
        <Route path='/integrations' element={<Integrations />}/>
        <Route path='/feature' element={<Feature />}/>
        <Route path='/signin' element={!user ? <SignIn /> : <Navigate to="/dashboard" />}/>
        <Route path='/signup' element={!user ? <SignUp /> : <Navigate to="/dashboard" />}/>
        <Route path='/forgot-pass' element={<ForgotPass />}/>
        <Route path='/reset-password/:userId/:token' element={<CreateNewPass />}/>
        <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/faq"/> } />
      </Routes>
    </div>
  );
}

export default App;


/* 
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/forgotpass' element={<ForgotPass />}/>
        <Route path='/createpass' element={<CreateNewPass />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
*/