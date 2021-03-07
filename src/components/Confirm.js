import React, { Fragment } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));
// const classes = useStyles();

// Destructure props
const Confirm = ({ handleNext, handleBack, values }) => {
  const { name, specification, size, port} = values

  const handleSubmit = () => {
    // Do whatever with the values
    console.log(values)
    // Show last compinent or success message
    handleNext()
  }

  return (
    <Accordion className="margin20">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography >Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      <Fragment>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="Name" secondary={name} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Specification" secondary={specification}  />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Size" secondary={size} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Port" secondary={port} />
        </ListItem>

      </List>
      
    

    

      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button style={{ marginLeft: 10 }} variant="contained" color="secondary" onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </div>
    </Fragment>
    </Typography>
    </AccordionDetails>
  </Accordion>
  )
}

export default Confirm
