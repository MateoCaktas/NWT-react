import React, {Component} from "react";
import PostsData from "../posts/data.json";
class SinglePost extends Component{
   render(){

        const { id } = this.props.match.params;
        
        var mojPost = PostsData.find(Favorites => Favorites.id === parseInt(id));
        console.log(PostsData);
        console.log(mojPost);
        return(
        <> 
            <p>{mojPost.title}</p>
        </>
        );
    }
}

export default SinglePost;