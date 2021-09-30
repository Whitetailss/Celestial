import React, {useEffect, useState} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  // const [loading, setLoading] = useState(false);
  const classes = useStyles();

  console.log('state',);
  console.log('posts', posts);


//   let postTest = {creator: 'fghu'}
// if (loading) {
//   return <p>Data is loading...</p>;
// }

// useEffect(() => {
//   fetch('/api/data')
//     .then((res) => res.json())
//     .then((data) => {
//       setData(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);

// console.log('posts length', posts.data.length);
  return (
    setTimeout(() => {
      // !posts.length ? <CircularProgress /> : (
        // !posts.length ? <p>loading</p> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.data.map((post) => (
              // <Grid key={post._id} item xs={12} sm={6} md={6}>
              //   <Post post={post} setCurrentId={setCurrentId} />
              // </Grid>
              post
            ))}
          </Grid>
        // )
    }, 2000)
   
  )

};

export default Posts;