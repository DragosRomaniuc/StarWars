import React, { useState, useEffect } from 'react';
import { Container, Grid, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { Film } from 'domain/Film';
import { FilmCard } from './FilmCard'
import { BasicError } from 'domain/Global';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10
  },
  linearProgress: {
    width: '70%'
  }
}));

interface CustomListProps {
  readonly loading: boolean
  readonly selectedFilms: Film[]
  readonly setErrors: (err: BasicError[]) => void
}

export const CustomList = ({
  loading,
  selectedFilms,
  setErrors
}: CustomListProps) => {
  const classes = useStyles();

  if (loading) return (
    <Grid container justify="center" className={classes.container}>
      <LinearProgress className={classes.linearProgress} />
      <LinearProgress color="primary" className={classes.linearProgress} />
    </Grid>
  )

  return (
    <Container fixed>

      <Grid
        item
        container
        wrap="wrap"
        justify="space-around"
        alignItems="center"
        direction="row"
        // xs={12}
        style={{
          padding: 20
        }}
      >
        {selectedFilms.map((film: Film) => <FilmCard
          setErrors={setErrors}
          film={film}
        />)}
        {/* <Typography style={{ padding: 10 }} variant="h4" component="h4" color="primary">
          Selected Range
        </Typography>
        <Grid container
          justify="center"
          alignItems="center"

          item xs={12}
          direction="row">

          {selectedRange.map((date: string, index: number) =>
            <Typography key={index} style={{ padding: 10 }} variant="h6" component="h6" >
              {moment(date).format('YYYY-MMMM-DD')}
            </Typography>
          )}
        </Grid>

        {averages.map((item: AverageObject, index: number) =>
          <Typography key={index} style={{ padding: 10 }} variant="h6" component="h6" color="secondary" >
            Average for {item.name} : {item.average.toFixed(3)}
          </Typography>
        )} */}
      </Grid>



    </Container>
  )

}
