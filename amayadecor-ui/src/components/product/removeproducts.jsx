import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './addproduct.css';
import{ PlusSquareFill } from 'react-bootstrap-icons';
import { addProduct} from'./product.service';
import Preview from './imagepreview';

class RemoveProduce extends React.Component {
    constructor(){
        super();
        this.state ={
            productCatagory:"",
            productName:"",
            productDesc:"",
            productSize:"",
            productPrice:"",
            productQu:"",
            images:[{}],
            imagesCounter : 0,
        } 
    }
    handleOnChange = (e) => {
        e.preventDefault();
        let name= e.target.name;
        let value = e.target.value;
        if(name === "images"){
            console.log(e.target.files);
            this.setState({
                images: [...e.target.files]
            })    
        }else{
        this.setState({
            [name]:value
        })
    }
    }
    handleOnAdd =() =>{
        console.log("Add clicked");
        let counter = this.state.imagesCounter;
        this.setState({
          imagesCounter : (counter + 1)
        })   
    }
    handleOnClick =(e) => {
        e.preventDefault();
        
        addProduct(this.state)
        
        
    }
    render() {
      return  <Form className = "addproductform">
        <Form.Label>Product Catagory</Form.Label>
        <Form.Control as="select" 
            defaultValue="catagory" 
            value = {this.state.productCatagory}
            name = "productCatagory"
            onChange = {this.handleOnChange}>
                <option>Choose..</option>
            <option>Home Decor</option>
            <option>Platters</option>
            <option>TLight</option>
        </Form.Control>
        {/* <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Product Name" 
                        value = {this.state.productName} 
                        name = "productName"
                        onChange = {this.handleOnChange}/>
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" rows="2" value = {this.state.productDesc} 
                    name = "productDesc"
                    onChange = {this.handleOnChange}/>
        <Form.Label>Product Size</Form.Label>
        <Form.Control type="text" placeholder="Product Size" 
                        value = {this.state.productSize} 
                        name = "productSize"
                        onChange = {this.handleOnChange}/>
        <Form.Label>Product price(Cost Price+shipping+GSt)</Form.Label>
        <Form.Control type="text" placeholder="Product Price" 
                        value = {this.state.productPrice} 
                        name = "productPrice"
                        onChange = {this.handleOnChange}/>
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control type="text" placeholder="Product Quantity" 
                        value = {this.state.productQu} 
                        name = "productQu"
                        onChange = {this.handleOnChange} />
        <span class="align-middle">
        <PlusSquareFill className = "addIcon" color="royalblue" 
                        size={30} onClick = {this.handleOnAdd} />
        </span>
            {/* {images}
            <Form.File id="images" label="Add Image" name = "images"
                multiple
                 onChange = {this.handleOnChange} /> */}
      <Button variant="primary" type="submit" onClick = {this.handleOnClick} 
                value = {this.state.images}>
        Submit
      </Button>
                 

    </Form>
    }
  }


export default RemoveProduce;