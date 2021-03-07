import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DragdropComponent from "./DragdropComponent"
const list = [
  {
    id: "0",
    order: 0
  },
  {
    id: "1",
    order: 1
  },
  {
    id: "2",
    order: 2
  },
  {
    id: "3",
    order: 3
  },
  {
    id: "4",
    order: 4
  },
 
];
// Destructuring props
const SecondStep = ({ handleNext, handleBack, handleChange  }) => {
  // Check if all values are not empty or if there are some error
  // const isValid = city.length > 0 && !formErrors.city && date.length > 0 && phone.length > 0 && !formErrors.phone

  return (
    <>
    <div><DragdropComponent list={list} /></div>
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

export default SecondStep
// JSON.parse(sessionStorage.getItem("selectedList")