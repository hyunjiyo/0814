/** @format */
import Post from '../post/Post';
import './posts.scss';

import React from 'react';

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: 'John Doe',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/16179987/pexels-photo-16179987.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      img: 'https://images.pexels.com/photos/18014429/pexels-photo-18014429.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
    {
      id: 2,
      name: 'Jane Doe',
      userId: 2,
      profilePic: 'https://images.pexels.com/photos/16179987/pexels-photo-16179987.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      desc: 'Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.',
    },
  ];

  return (
    <div className='posts'>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
