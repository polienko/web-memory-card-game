import React from "react";
import img_cover from "../img/cover.png";
import './Card.css';


class Card extends React.Component{
    constructor(props){
      super(props);
      this.state = {
      }
      this.cardHandler = this.cardHandler.bind(this);
    }

    cardHandler(){
      this.props.clickHandler(this);
    }

    render(){
      return(
        <div className={this.props.class} key={this.props.index} onClick={this.cardHandler} >
          <img 
            className="card-front" 
            src={this.props.path} 
            alt="card front" 
            data-card={this.props.data} 
            draggable="false" 
          />
          <img 
            className="card-back" 
            src={this.props.DEBUG_MODE ? this.props.path : img_cover}
            alt="card back" 
            data-card={this.props.data} 
            draggable="false" 
          />
        </div>
      );
    }
  }

  export default Card;