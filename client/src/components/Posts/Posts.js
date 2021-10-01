import React, {useEffect, useState} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './Post/styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(state => state.posts);
  // const [loading, setLoading] = useState(false);
  const classes = useStyles();

  console.log('state',);
  console.log('posts', posts);

  return (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6} md={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
  )
};

export default Posts;