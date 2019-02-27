import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SinglePost from "./SinglePost";
import {NavLink} from "react-router-dom";

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            isItFavorite : this.props.mojProp.isFavorite
        }
        this.MyFunction = this.MyFunction.bind(this);
    }

    MyFunction = () => {
        this.setState({isItFavorite: !this.state.isItFavorite});
    }

   render(){
        return (
            <div className="Post" key={this.props.mojProp.id}>
                <img className="myImage" 
                src={require("../posts/"+ this.props.mojProp.image)}
                key={this.props.mojProp.index}
                alt={this.props.mojProp.title} />
                
                <div>                
                    <NavLink to={`/post/${this.props.mojProp.id}`} className="naslov">{this.props.mojProp.title}</NavLink>
                
                    <p>Tekst:{this.props.mojProp.slug}</p>
                    <p>Rating:{this.props.mojProp.rating}</p>
                    <p>Favorit:{this.props.mojProp.isFavorite ? 'Favorite' : 'Not favorite'}</p>
                    <button onClick={() => this.props.MinjajFavorite(this.props.mojProp.id)}>Make favorite</button>
                    <p>{this.props.JeLiFavorite ? "Je" : "Nije"}</p>
                </div>

            </div>
        );
         
    }
}

export default Post;