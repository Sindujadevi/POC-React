import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className="margin20">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form>
              <div className="row">
              <div className="marginbtm20">
                <div className="margin10">Name:</div>
                <input
                type="text"
                />
                </div>
                <div className="marginbtm20">
                <div className="margin10">Specification</div>
                <input
                type="text"
                />
                </div>
                </div>
                <div className="row">
                <div className="marginbtm20">
                <div className="margin10">Size</div>
                <input
                type="text"
                />
                </div>
                <div className="marginbtm20">
                <div className="margin10">Port</div>
                <input
                type="text"
                />
                </div>
                </div>
        </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
}
