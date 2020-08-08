import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CardSkeleton = (props: {}) => {
  return (
    <Paper style={{ maxWidth: 345, height: 248, maxHeight: 248 }} elevation={3}>
      <div className="card-skeleton card-skeleton__container">
        <Grid container className="card-skeleton card-skeleton__header">
          <Grid item>
            <Skeleton variant="circle" width={40} height={40} className="card-skeleton card-skeleton__avatar" />
          </Grid>
          <Grid item style={{ width: '82%' }}>
            <Skeleton variant="text" className="card-skeleton card-skeleton__title" />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item style={{ width: '82%' }}>
            <Skeleton variant="rect" className="card-skeleton card-skeleton__body" />
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default CardSkeleton;
