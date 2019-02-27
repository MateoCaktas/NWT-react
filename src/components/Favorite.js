import React, { Component } from "react"
import PostsData from "../posts/data.json";
import { NavLink} from "react-router-dom";
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
                    return(<div>
                        <NavLink to={`/post/${MyPost.id}`} className="naslov">{MyPost.title}</NavLink>
                        <div key={MyPost.id}>
                        
                        <img className="myImage"
                         src={require("../posts/" + MyPost.image)}
                         alt={MyPost.title}/>
                        </div>
                        </div>
                    );
                })}
                </div>
            </div>
        );
    }
}

export default Favorite;