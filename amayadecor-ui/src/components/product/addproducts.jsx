import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './addproduct.css';
import{ PlusSquareFill } from 'react-bootstrap-icons';
import { addProduct} from'./product.service';
import Preview from './imagepreview';

class AddProduct extends React.Component {
     
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
           // formData : new FormData()
        }
        
    }
   // let formData = new FormData();
    handleOnChange = (e) => {
        e.preventDefault();
        let formData = this.state.formData
        let name= e.target.name;
        let value = e.target.value;
        if(name === "images"){
           // const images = [...e.target.files]
            //console.log(...e.target.files);
            const images = [...e.target.files];
            // let images = datas.map(data => {
            //      return new FormData().append('file',data);
            // })
            this.setState({
                images
            })  
              
            // formData.append(images,images);
            // this.setState({
            //     formData 
            // })
        }else{
        this.setState({
            [name]:value
        })
        // formData.append(name,value);
        // this.setState({
        //     formData 
        // })
    }
    }
    handleOnAdd =() =>{
        console.log("Add clicked");
        let counter = this.state.imagesCounter;
        this.setState({
          imagesCounter : (counter + 1)
        })   
    }
    handleSubmit =(e) => {
        e.preventDefault();
        console.log(e.target);
        
        const data = new FormData(e.target);
    //console.log(data);
       // let check = data.get('images').Files;
        //console.log(check);
        
        //data.get('productName')
       addProduct(data);
        
        
    }
    render() {
        // console.log("-----------",this.state);
        
      return  <Form className = "addproductform" encType="multipart/form-data" name ="product" onSubmit={this.handleSubmit}>
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
        <Form.Label>Product Name</Form.Label>
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
            <Form.File id="images" label="Add Images" name = "images"
                multiple
                 onChange = {this.handleOnChange} />
      <Button variant="primary" type="submit"  >
        Submit
      </Button>
    </Form>
    }
  }


export default AddProduct;


