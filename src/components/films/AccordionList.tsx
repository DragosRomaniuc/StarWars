import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container } from '@material-ui/core';
import { Character } from 'domain/Film';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export const accordionsTestId = 'accordionsTestId'

export const AccordionList = ({data}: {
  data: Character[]
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel: any) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root} data-testid="accordionsTestId">
     {data.map((item: Character) =>  <Accordion  onChange={handleChange(item.url)}
     style={{padding: 10}}
     >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} color="primary">{item.name}</Typography>
          {/* <Typography className={classes.secondaryHeading}>{item.gender}</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
       <Container >
       <Typography variant="body2" color="textSecondary" component="p">
         Birth Year: {item.birth_year}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Eye Color: {item.eye_color}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Skin Color: {item.skin_color}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Mass: {item.mass}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Height: {item.height}
        </Typography>
       </Container>
        </AccordionDetails>
      </Accordion>)}
    </div>
  );
}