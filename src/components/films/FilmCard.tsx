import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MovieFilter from '@material-ui/icons/MovieFilter';
import FaceIcon from '@material-ui/icons/Face';
import { Character, Film } from './../../domain/Film'
import lightSaber from 'assets/lightsaber_2.png'
import glow from 'assets/glow.png'
import ApiFactory from 'services/swapi-api';
import { LinearProgress } from '@material-ui/core';
import { AccordionList } from 'components/common/AccordionList'
import { BasicError } from 'domain/Global';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: 20,
    marginTop: 25,
    border: '1px solid #70B8FF',
    borderRadius: 20
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(10deg)',
  }
}));

interface FilmCardProps {
  readonly film: Film,
  readonly setErrors: (err: BasicError[]) => void
}

export const FilmCard = ({film, setErrors}: FilmCardProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [people, setPeople] = React.useState<Character[]>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleExpandClick = async () => {
    setExpanded(!expanded);
    try {
      if (!people) {
        setLoading(true)
        let characters = film.characters.map((item: any) => item.split('/')[5]);
        let promises = characters.map((character: any) => ApiFactory.getPeople(character))
        characters = await Promise.all(promises)
        setLoading(false)
        setPeople(characters!)
        console.log(characters)
        // characters = characters
        // let people = await ApiFactory.getPeople()
      }
    } catch (err) {
      setLoading(false)
      setErrors([{
        message: "Something went wrong, please try again"
      }])
    }
  };




  if (!film) return <></>

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={lightSaber} />
        }
        action={
          <IconButton aria-label="settings">
            <MovieFilter />
          </IconButton>
        }
        title={`Movie title: ${film.title}`}
        subheader={`Release Date: ${film.release_date}`}
      />
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={glow} />
        }
        action={
          <IconButton aria-label="settings">
            <FaceIcon />
          </IconButton>
        }
        title={`Director: ${film.director}`}
        subheader={`Producer: ${film.producer}`}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {film.opening_crawl}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography>
            Details about characters
          </Typography>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {loading ? <LinearProgress color="primary" /> : <div>
          <Typography paragraph>Method:</Typography>
          <AccordionList data={people || []} />
          {/* <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
          </div>}
          
        </CardContent>
      </Collapse>
    </Card>
  );
}