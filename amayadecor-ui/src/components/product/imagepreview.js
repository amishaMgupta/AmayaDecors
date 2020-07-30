import React from 'react';
class Preview extends React.Component {
    
    render() {
        console.log("img = ",this.props);
        // if(this.props.image){
        //     console.log(this.props.image);
            
        // }
      return  <div>
      <img src = {this.props.image}></img>   
      </div>
    }
  }


export default Preview;