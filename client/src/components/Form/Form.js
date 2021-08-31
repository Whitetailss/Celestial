import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

import { createPost } from '../../actions/posts';


const Form = ({currentId, setCurrentId}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({creator: '', title: '', description: '', tags: '', });

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', description: '', tags: ''})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } 
        
        // else {
        //     dispatch()
        // }
    }

    return (
       <Paper className={classes.paper}>
           <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> Make new memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})} /> 
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} /> 
                <TextField name="description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} /> 
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} /> 

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth> Clear </Button>          
           </form>
       </Paper>
    )
}

export default Form

