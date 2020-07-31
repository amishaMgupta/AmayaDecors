import React from 'react';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import Footer from './components/footer/footer';
class App extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>;
  }
}


export default App;
