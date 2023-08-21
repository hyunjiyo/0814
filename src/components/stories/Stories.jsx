/** @format */

import React, { useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: 'John',
      img: 'https://images.pexels.com/photos/17652391/pexels-photo-17652391.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
    {
      id: 2,
      name: 'John',
      img: 'https://images.pexels.com/photos/16061744/pexels-photo-16061744.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
    {
      id: 3,
      name: 'John',
      img: 'https://images.pexels.com/photos/17993439/pexels-photo-17993439.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
    {
      id: 4,
      name: 'John',
      img: 'https://images.pexels.com/photos/9585588/pexels-photo-9585588.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
    {
      id: 5,
      name: 'John',
      img: 'https://images.pexels.com/photos/17992693/pexels-photo-17992693.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
  ];
  return (
    <div className='stories'>
      <div className='story'>
        <img src={currentUser.profilePic} alt='' />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className='story' key={story.id}>
          <img src={story.img} alt='' />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
