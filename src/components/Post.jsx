import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';



const PostDiv = styled.div`
  background-color: #FFF;
  border-radius: 5px;
  width: 95vw;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #e6e6e6;
`;

const User = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px;
  font-family: sans-serif;
  img{
    height: 35px;
    width: 35px;
    border-radius: 100%;
  }
  span{
    padding-left: 10px;
    font-weight: 700;
  }
`;

const PostContent = styled.div`
  img{
    max-width: 600px;
    margin: 0 auto;
  }
`;

const PostInfo = styled.div`
  padding: 5px 16px;
`;

const PostActions = styled.div`
  svg{
    padding: 5px;
  }
`

class Post extends Component{

  render(){
    const { post } = this.props;

    const likes = post.likes.reduce((prev, curr, index) => {
      if (index === 0){
        return `${curr.username}`;
      } else if (index === post.likes.length -1){
        return `${prev} and ${curr.username}`;
      } else {
        return `${prev}, ${curr.username}`;
      }
    },"");
    return(
      <PostDiv>
        <User>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <span>{post.user.username}</span>
        </User>
        <PostContent>
          <img src={post.image.url} />
        </PostContent>
        <PostInfo>
          <p>{post.caption}</p>
          <PostActions>
            <FaHeartO size={35} />
            <FaCommentO size={35} />
          </PostActions>
          <p><strong>{likes}</strong> like this</p>
          {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
        </PostInfo>
      </PostDiv>
    )
  }
}




// class Post extends Component{





//   render(){
//     const { post } = this.props;
//     return(
//       <div>
//         <div>
//           <img src={post.user.profile_pic} alt={post.user.username} />
//           <p>{post.user.username}</p>
//         </div>
//         <div>
//           <img src={post.image.url} alt="" />
//           <p>{post.caption}</p>
//         </div>
//         <div>
//           <FaHeartO />
//           <FaCommentO />
//         </div>
//         <p>{post.likes.length} likes</p>
//         {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
//       </div>
//     )
//   }
// }

export default Post;