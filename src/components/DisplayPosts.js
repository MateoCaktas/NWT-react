import React, { Component } from 'react';
import PostsData from "../posts/data.json";
import "./style.css";
import Favorite from "./Favorite";
import Post from "./Post";

class DisplayPosts extends Component {
  constructor(){
    super();
    this.state = {
      filterList : '',
      favoriteList: '',
      JeLiFavorite: false,
      AllMyPosts: PostsData
    }
    this.ChangeFilter = this.ChangeFilter.bind(this);
    this.MinjajFavorite = this.MinjajFavorite.bind(this);
  }

  ChangeFilter = (event) => {
    this.setState({filterList: event.target.value.substr(0,20)});
  }

  MinjajFavorite(id){
  var allMyPosts = this.state.AllMyPosts;
  allMyPosts.map(Post => Post.id === id ? Post.isFavorite = !Post.isFavorite : Post);

   this.setState({
     AllMyPosts: allMyPosts
   })

   console.log(this.state);
  }


  render() {
    function ChangeFavorite(ThePost){
        ThePost.isFavorite = !ThePost.isFavorite;
        console.log(ThePost.title + " : " + ThePost.isFavorite);
    };

    //Pitanje za profesora : zasto ne radi sa imenovanom funkcijom

    var MyPosts = PostsData.filter(Post => Post.title.indexOf(this.state.filterList) !== -1
                                        || Post.rating.indexOf(this.state.filterList) !== -1);


    var MyFavoritePosts = PostsData.filter(Post => Post.isFavorite === true);


    return (
      <div className="Page">
        <div className="Posts">
        <form className="filterForm">
          <p align="left">Filter:</p>
          <input className="filterInput" type="text" placeholder="Search" 
          name="searchText" onChange={this.ChangeFilter}/>
        </form>

          {MyPosts.map((MyPost, index) => 
          {
            return (
              <Post MinjajFavorite={this.MinjajFavorite} mojProp={MyPost} key={index}/>
            );
          })}</div>
          <Favorite Favorites={MyFavoritePosts}/>
      </div>
      
    );
  }
}

export default DisplayPosts;
