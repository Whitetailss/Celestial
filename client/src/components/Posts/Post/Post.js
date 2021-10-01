import React from 'react'
import { Card, Typography, Button, CardContent, CardActions,  } from '@material-ui/core';
import moment from 'moment';
// import DeleteIcon from '@material-ui/icons/Delete';
// import DeleteIcon from '@mui/icons-material/Delete';

import {deletePost} from '../../../actions/posts';

// import MoreHoriz from '@material-ui/icons/MoreHoriz';

import { useDispatch } from 'react-redux';
import useStyles from './styles';


const Post = ({ post, setCurrentId}) => {
    const dispatch = useDispatch(); 
    const classes = useStyles();   

    console.log('post', post);
    return (
        <Card className={classes.card}>
            
            {/* <div className= {classes.overlay}> */}
                <Typography variant="h6"> {post.creator} </Typography>
                <Typography variant="body2" color="initial">{moment(post.createdAt).fromNow()}</Typography>
            {/* </div> */}
            <div className={classes.overlay2}>
                 {/* <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}> <MoreHoriz fontSize="default"/> </Button> */}
                 <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}> post Id To be named </Button>
            </div>

             <div className={classes.details}>
                 <Typography variant="body2" color="textSecondary" component="h2"> {post.tags.map((tag) => `#${tag} `)} </Typography>
                 
                 {/* <Typography variant="body2" color="textSecondary" component="h2"> {post.tags} </Typography> */}
             </div>
                 <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
                 <CardContent>
                   <Typography variant="body2" color="textSecondary" component="p">{post.description}</Typography>
                 </CardContent>
                 <CardActions className={classes.cardActions}>
                    {/* <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button> */}
                   {/* <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>  */}
                   {/* <Button variant="text" color="primary" onClick={() => dispatch(deletePost(post._id))}> <DeleteIcon fontSize="small"/> Delete </Button> */}
                   <Button variant="text" color="primary" onClick={() => dispatch(deletePost(post._id))}>  Delete </Button>

                 </CardActions>
        </Card>   
    )

}

export default Post