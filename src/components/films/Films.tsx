import React, { useState, useEffect } from 'react';

import { Chip, Container, Grid, IconButton, makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';
import ApiFactory from '../../services/swapi-api';
import { BasicError } from 'domain/Global'
import { useGlobalContext } from 'context/global/GlobalContext';
import { addFilmsAction } from 'context/global/films/films_actions';
import logo from '../../assets/lightsaber.png'
import { CustomList } from './CustomList';
import { Film } from 'domain/Film';
import Alert from '@material-ui/lab/Alert/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    marginTop: 10
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 20,
    zIndex: -2,
    width: 300
  },
  img: {
    flex: 1,
    padding: 5,
    maxWidth: '25%'
  },
  linearProgress: {
    width: '70%'
  }
}));

export const Films = () => {
  const classes = useStyles();

  // const [films, setFilms] = useState<Film[]>([]);
  const [errors, setErrors] = useState<BasicError[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedFilms, setSelectedFilms] = useState<Film[]>()

  const {
    film: {
      films
    },
    dispatch
  } = useGlobalContext();

  const getFilmsAsync = async () => {
    try {
      setLoading(true)
      let films = await ApiFactory.getFilms();
      dispatch(addFilmsAction(films.results))
      setLoading(false)
    } catch (err) {
      setErrors([{
        message: 'Something went wrong, please try again'
      }])
    }
  }

  useEffect(() => {
    getFilmsAsync();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  // const handleTextInput = async (ev: any) => {
  //   try {
  //     ev.preventDefault();
  //     if (!ev.target[0].value) return;

  //     let query = ev.target[0].value
  //     let {
  //       bestMatches
  //     }: {
  //       bestMatches: BestMatches[]
  //     } = await ApiFactory.searchSymbols(query);

  //     setSearchedCompany(bestMatches);
  //   } catch (err) {
  //     setErrors([{
  //       message: 'Something went wrong, please try again'
  //     }])
  //   }
  // }

  const handleAutoComplete = (newValue: Film[]) => {
    setSelectedFilms(newValue)
    // dispatch(addFilmsAction(newValue))
  }

  console.log('filllms', films)
  return (
    <div>
      <Container >
        <Grid
          container
          justify="space-around"
          item sm
          xs={12}
          alignContent="center"
          alignItems="center"
        >
          <img src={logo} className={classes.img} alt="logo" />
          <Autocomplete
            multiple
            id="fixed-tags-demo"
            // value={films || []}
            onChange={(event, newValue) => handleAutoComplete(newValue)}
            options={films}
            getOptionLabel={(option: Film) => option['title']!}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  label={option['title']}
                  {...getTagProps({ index })}
                />
              ))
            }
            style={{ minWidth: '50vw' }}
            renderInput={(params) => (
              <form 
              // onSubmit={handleTextInput}
              
              >
                <TextField
                  {...params}
                  id="filled-basic"
                  label="Search for a Star Wars movie"
                  variant="outlined"
                  placeholder={`Search for a Star Wars movie`} />
              </form>
            )}
          />
        </Grid>

        <Grid
          container
          justify="center"
          item sm
          xs={12}
          alignContent="center"
          alignItems="center"
        >
          <div>
            {errors && errors.map((item: BasicError) => (
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setErrors([...errors.filter((err: BasicError) => item.message !== err.message)]);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                severity="error">{item.message} </Alert>
            ))}
          </div>
        </Grid>

        <CustomList
          loading={loading}
          selectedFilms={selectedFilms || []}
          setErrors={(errors: BasicError[]) => setErrors(errors)}
        />
      </Container>
    </div>
  );
}
