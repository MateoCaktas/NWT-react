import React, { Component } from "react"
import PostsData from "../posts/data.json";

class Favorite extends Component{
    constructor(props){
        super(props);
    };

    render(){
        var favoriti = this.props.Favorites;
        console.log(favoriti);
        console.log("Wtf");
        return(
            <div>
                <div className="FavoriteForm">
                <h2>My Favorites</h2>
                {favoriti.map((MyPost) => {
                    return(
                        <div key={MyPost.id}>
                        <div>{MyPost.title}</div>
                        <img className="myImage"
                         src={require("../posts/" + MyPost.image)}
                         alt={MyPost.title}/>
                        </div>
                    );
                })}
                </div>
            </div>
        );
    }
}

export default Favorite;