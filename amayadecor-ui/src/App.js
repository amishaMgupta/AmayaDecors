import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AddProduct from './components/product/addproducts';


class App extends React.Component {
  render() {
    return <div>
     
          <Header></Header>
          <AddProduct></AddProduct>
          <Footer></Footer>
          
    </div>;
  }
}


export default App;
