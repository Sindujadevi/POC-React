import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DragdropComponent from "./DragdropComponent"
import SimpleAccordion from './Accordion';
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

// Destructuring props
const ThirdStep = ({ handleNext, handleBack, handleChange ,values: { name, specification, size, port }, }) => {
  // Check if all values are not empty or if there are some error
  // const isValid = city.length > 0 && !formErrors.city && date.length > 0 && phone.length > 0 && !formErrors.phone
  const classes = useStyles();

  return (
    
    <>
     {/* <div><SimpleAccordion /></div> */}
     <div>
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
                name="name"
                value={name}
                onChange={handleChange}
                />
                </div>
                <div className="marginbtm20">
                <div className="margin10">Specification</div>
                <input
                type="text"
                name="specification"
                value={specification}
                onChange={handleChange}
                />
                </div>
                </div>
                <div className="row">
                <div className="marginbtm20">
                <div className="margin10">Size</div>
                <input
                type="text"
                name="size"
                value={size}
                onChange={handleChange}
                />
                </div>
                <div className="marginbtm20">
                <div className="margin10">Port</div>
                <input
                type="text"
                name="port"
                value={port}
                onChange={handleChange}
                />
                </div>
                </div>
        </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
     </div>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
       
        <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant="contained"  color="primary" onClick={handleNext }>
          Next
        </Button>
      </div>
    </>
  )
}

export default ThirdStep
// JSON.parse(sessionStorage.getItem("selectedList")