import React, {Component} from "react";
import PostsData from "../posts/data.json";
import { NavLink } from "react-router-dom";
class SinglePost extends Component{
   render(){

        const { id } = this.props.match.params;
        
        var mojPost = PostsData.find(Favorites => Favorites.id === parseInt(id));
        console.log(PostsData);
        console.log(mojPost);
        return(
        <div className="Post"> 
            <img className="myImage" 
                src={require("../posts/"+ mojPost.image)}
                key={mojPost.index}
                alt={mojPost.title} />
            <div>
                <h1>{mojPost.title}</h1>
                <p>Tekst:{mojPost.slug}</p>
                <p>Rating:{mojPost.rating}</p>
                <NavLink to="/display" className="headerLink" >Back</NavLink>
            </div>
           
            
        </div>
        );
    }
}

export default SinglePost;