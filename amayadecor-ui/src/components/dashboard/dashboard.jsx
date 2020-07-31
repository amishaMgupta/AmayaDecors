import React from 'react';
import Card from 'react-bootstrap/Card'
import './dashboard.css';
import CardDeck from 'react-bootstrap/CardDeck'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddProduct from '../product/addproducts';
import RemoveProduce from '../product/removeproducts';

class Dashboard extends React.Component {
    render() {
      return <Router>
      <div className = "dashboardCard">
          <CardDeck>
          <Card bg = "success" text = 'white'>
          <Card.Header>Products</Card.Header>
    <Card.Body>
      <Card.Text>
          <ul>
            <li><Link to = '/addProduct'>Add Product</Link></li>
            <li><Link to = '/removeProduct'>Remove Product</Link></li>
            <li><Link to = '/updateProduct'>Updated Product</Link></li>
            <li><Link to = '/displayProduct'>Display Product</Link></li>
          </ul>
      </Card.Text>
    </Card.Body>
          </Card>
          <Card bg = "danger" text = 'white'>
          <Card.Header>Sales</Card.Header>
    <Card.Body>
      <Card.Text>
      <ul>
        <li><Link to = '/addSales'>Add Sales</Link></li>
        <li><Link to = '/removeSales'>Remove Sales</Link></li>
        <li><Link to = '/updateSales'>Updated Sales</Link></li>
        <li><Link to = '/displaySales'>Display Sales</Link></li>
      </ul>
      </Card.Text>
    </Card.Body>
          </Card>
          <Card bg = "warning" text = 'white'>
          <Card.Header>Users</Card.Header>
    <Card.Body>
      <Card.Text>
        <ul>
            <li><Link to = '/addUsers'>Add Users</Link></li>
            <li><Link to = '/removeUsers'>Remove Users</Link></li>
            <li><Link to = '/updateUsers'>Updated Users</Link></li>
            <li><Link to = '/displayUsers'>Display Users</Link></li>
        </ul>
      </Card.Text>
    </Card.Body>
          </Card>
          <Card bg = "info" text = 'white'>
          <Card.Header>Reporting</Card.Header>
    <Card.Body>
      <Card.Text>
      <ul>
              <li><Link to = '/addUsers'>Sales</Link></li>
              <li><Link to = '/addUsers'>Customers</Link></li>
              <li><Link to = '/addUsers'>Product</Link></li>
          </ul>
      </Card.Text>
    </Card.Body>
          </Card>
        </CardDeck>
    <Switch>
          <Route exact path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route exact path="/removeProduct">
            <RemoveProduce></RemoveProduce>
          </Route>
         
        </Switch>
      </div>
      </Router>
    }
  }


export default Dashboard;