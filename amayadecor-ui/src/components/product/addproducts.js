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
        } 
    }
    handleOnChange = (e) => {
        e.preventDefault();
        let name= e.target.name;
        let value = e.target.value;
        if(name === "image"){
            let reader = new FileReader();
                  let file = e.target.files[0];
                    let image = {};
                  reader.onloadend = () => {
                      image = {
                        file: file,
                        imagePreviewUrl: reader.result
                      }
                      let images = [...this.state.images,image]
                      
                    this.setState({
                        images
                    });
                  }
              
                  reader.readAsDataURL(file)
    
                //   console.log("----------",image);
                  
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
        let images=[]
        for(let counter =0;counter<=this.state.imagesCounter;counter++){
            images.push(<Form.File id="images" label="Add Image" name = "image"
                onChange = {this.handleOnChange} />)
        }
        
        
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
        <span class="align-middle">
        <PlusSquareFill className = "addIcon" color="royalblue" 
                        size={30} onClick = {this.handleOnAdd} />
        </span>
            {images}
      <Button variant="primary" type="submit" onClick = {this.handleOnClick} 
                value = {this.state.images}>
        Submit
      </Button>
    </Form>
    }
  }


export default AddProduct;


// //import axios from 'axios'; 

// import React,{Component} from 'react'; 

// class AddProduct extends Component { 

// 	state = { 

// 	// Initially, no file is selected 
// 	selectedFile: null
// 	}; 
	
// 	// On file select (from the pop up) 
// 	onFileChange = event => { 
	
// 	// Update the state 
// 	this.setState({ selectedFile: event.target.files[0] }); 
	
// 	}; 
	
// 	// On file upload (click the upload button) 
// 	onFileUpload = () => { 
	
// 	// Create an object of formData 
// 	const formData = new FormData(); 
	
// 	// Update the formData object 
// 	formData.append( 
// 		"myFile", 
// 		this.state.selectedFile, 
// 		this.state.selectedFile.name 
// 	); 
	
// 	// Details of the uploaded file 
// 	console.log(this.state.selectedFile); 
	
// 	// Request made to the backend api 
// 	// Send formData object 
// 	fetch.post("http://localhost:8080/Web/product", formData); 
// 	}; 
	
// 	// File content to be displayed after 
// 	// file upload is complete 
// 	fileData = () => { 
	
// 	if (this.state.selectedFile) { 
		
// 		return ( 
// 		<div> 
// 			<h2>File Details:</h2> 
// 			<p>File Name: {this.state.selectedFile.name}</p> 
// 			<p>File Type: {this.state.selectedFile.type}</p> 
// 			<p> 
// 			Last Modified:{" "} 
// 			{this.state.selectedFile.lastModifiedDate.toDateString()} 
// 			</p> 
// 		</div> 
// 		); 
// 	} else { 
// 		return ( 
// 		<div> 
// 			<br /> 
// 			<h4>Choose before Pressing the Upload button</h4> 
// 		</div> 
// 		); 
// 	} 
// 	}; 
	
// 	render() { 
	
// 	return ( 
// 		<div> 
// 			<h1> 
// 			GeeksforGeeks 
// 			</h1> 
// 			<h3> 
// 			File Upload using React! 
// 			</h3> 
// 			<div> 
// 				<input type="file" onChange={this.onFileChange} /> 
// 				<button onClick={this.onFileUpload}> 
// 				Upload! 
// 				</button> 
// 			</div> 
// 		{this.fileData()} 
// 		</div> 
// 	); 
// 	} 
// } 
// export default AddProduct;
// // export default import axios from 'axios'; 

// // import React,{Component} from 'react'; 

// // class App extends Component { 

// // 	state = { 

// // 	// Initially, no file is selected 
// // 	selectedFile: null
// // 	}; 
	
// // 	// On file select (from the pop up) 
// // 	onFileChange = event => { 
	
// // 	// Update the state 
// // 	this.setState({ selectedFile: event.target.files[0] }); 
	
// // 	}; 
	
// // 	// On file upload (click the upload button) 
// // 	onFileUpload = () => { 
	
// // 	// Create an object of formData 
// // 	const formData = new FormData(); 
	
// // 	// Update the formData object 
// // 	formData.append( 
// // 		"myFile", 
// // 		this.state.selectedFile, 
// // 		this.state.selectedFile.name 
// // 	); 
	
// // 	// Details of the uploaded file 
// // 	console.log(this.state.selectedFile); 
	
// // 	// Request made to the backend api 
// // 	// Send formData object 
// // 	axios.post("api/uploadfile", formData); 
// // 	}; 
	
// // 	// File content to be displayed after 
// // 	// file upload is complete 
// // 	fileData = () => { 
	
// // 	if (this.state.selectedFile) { 
		
// // 		return ( 
// // 		<div> 
// // 			<h2>File Details:</h2> 
// // 			<p>File Name: {this.state.selectedFile.name}</p> 
// // 			<p>File Type: {this.state.selectedFile.type}</p> 
// // 			<p> 
// // 			Last Modified:{" "} 
// // 			{this.state.selectedFile.lastModifiedDate.toDateString()} 
// // 			</p> 
// // 		</div> 
// // 		); 
// // 	} else { 
// // 		return ( 
// // 		<div> 
// // 			<br /> 
// // 			<h4>Choose before Pressing the Upload button</h4> 
// // 		</div> 
// // 		); 
// // 	} 
// // 	}; 
	
// // 	render() { 
	
// // 	return ( 
// // 		<div> 
// // 			<h1> 
// // 			GeeksforGeeks 
// // 			</h1> 
// // 			<h3> 
// // 			File Upload using React! 
// // 			</h3> 
// // 			<div> 
// // 				<input type="file" onChange={this.onFileChange} /> 
// // 				<button onClick={this.onFileUpload}> 
// // 				Upload! 
// // 				</button> 
// // 			</div> 
// // 		{this.fileData()} 
// // 		</div> 
// // 	); 
// // 	} 
// // } 

// // export default AddProduct; 


// class ImageUpload extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {file: '',imagePreviewUrl: ''};
//     }
  
//     _handleSubmit(e) {
//       e.preventDefault();
//       // TODO: do something with -> this.state.file
//       console.log('handle uploading-', this.state.file);
//     }
  
//     _handleImageChange(e) {
//       e.preventDefault();
  
//       let reader = new FileReader();
//       let file = e.target.files[0];
  
//       reader.onloadend = () => {
//         this.setState({
//           file: file,
//           imagePreviewUrl: reader.result
//         });
//       }
  
//       reader.readAsDataURL(file)
//     }
  
//     render() {
//       let {imagePreviewUrl} = this.state;
//       let $imagePreview = null;
//       if (imagePreviewUrl) {
//         $imagePreview = (<img src={imagePreviewUrl} />);
//       } else {
//         $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//       }
  
//       return (
//         <div className="previewComponent">
//           <form onSubmit={(e)=>this._handleSubmit(e)}>
//             <input className="fileInput" 
//               type="file" 
//               onChange={(e)=>this._handleImageChange(e)} />
//             <button className="submitButton" 
//               type="submit" 
//               onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
//           </form>
//           <div className="imgPreview">
//             {$imagePreview}
//           </div>
//         </div>
//       )
//     }
//   }
    
//   ReactDOM.render(<ImageUpload/>, document.getElementById("mainApp"));