//Test for classes and how they work

class Mammal {
    constructor(){
        this.isWarmBlooded = true;
        this.doesLactation = true;
    }
    feedBaby(){
        return "Feeding...";
    }
}

const swimMixin = {
    livesInWater: true,
    swim(){
        return 'Swimming...';
    }
};
 
class Whale extends Mammal {
    constructor(){
        super();
        Object.assign(this,swimMixin);
    }
}

class Fish {
    constructor(){
        Object.assign(this,swimMixin);
    }
}
//test for IG classes to use
class User {
    constructor(username){
        this.username = username;
        this.likes = [];
        this.followers = [];
        this.following = [];
        this.posts = [];
    }
    follow(user){
       this.following.push(user);
       user.followers.push(this);
       return ` Now Following ${user.username}...`;
    }
    unfollow(user) {
        this.following.splice(this.following.indexOf(user), 1);
        this.follower.splice(user.followers.indexOf(this), 1);
        return `Unfollowed ${user.username}...`;
    }
    makePost(mediaType,caption,file) {
        const post = new Post(mediaType, caption, file);
        this.posts.push(post);
        return `Successfully posted...`;
    }
    likePost(user, postNumber){
        user.posts[postNumber].likes.push(this);
        return `Photo now has ${user.posts[postNumber].getLikes()} likes.`;
        }
    }
    
    
//mixin to add methods to class
const likeableMixin = {
    likes : [],
    getLikes(){
        return this.likes.length;
    }
};

class Post {
    constructor(mediaType,caption,file){
        this.mediaType = mediaType;
        this.caption = caption;
        this.file = file;
        this.date = new Date();      
        this.comments = [];
        Object.assign(this,likeableMixin);
    }
}

class Comment {
    constructor(text){
        this.text = text;
        this.replies = [];
        Object.assign(this,likeableMixin);
    }
}