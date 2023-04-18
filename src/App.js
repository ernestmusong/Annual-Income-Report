import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'components/Home';
import StatementDetailPage from 'components/StatementDetailPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/statement/:id" element={<StatementDetailPage />} />
    </Route>
  </Routes>
);
export default App;
