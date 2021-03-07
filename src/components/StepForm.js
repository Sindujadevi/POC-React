import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import FirstStep from "./FirstStep"
import SecondStep from "./SecondStep"
import ThirdStep from './ThirdStep';
import Confirm from "./Confirm"
import Success from "./Success"
import formValidation from "../Helper/formValidation"
import Example2 from './ArrowExample';

// Step titles
const labels = ["Component Selection", "Connection", "Confirmation","Review"]

const initialValues = {
  name: "",
  specification: "",
  port: "",
  size: "",
  multivalue: []
}

const fieldsValidation = {
  // multivalue:{},
  // name: {
  //   error: "",
  //   validate: "text",
  //   minLength: 2,
  //   maxLength: 20
  // },
  // lastName: {
  //   error: "",
  //   validate: "text",
  //   minLength: 2,
  //   maxLength: 20
  // },
  // email: {
  //   error: "",
  //   validate: "email"
  // },
  // gender: {},
  // date: {},
  // city: {
  //   error: "",
  //   validate: "text",
  //   minLength: 3,
  //   maxLength: 20
  // },
  // phone: {
  //   error: "",
  //   validate: "phone",
  //   maxLength: 15
  // }
  // multiselect:{
  //   error:"",
  //   validate:"",

  // }
}

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [selectedList, setSelectedList] = useState([]);


  // Proceed to next step
  const handleNext = () => setActiveStep(prev => prev + 1)
  // Go back to prev step
  const handleBack = () => setActiveStep(prev => prev - 1)

  // Handle form change
  const handleChange = e => {
    console.log(e);
    const { name, value } = e.target
    // let value1 = Array.from(e.target.selectedOptions, option => option.value1);
    // setSelectedList({values: value1});
    // console.log("value1:",value);
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }))

    let { options } = e.target;
    options = Array.apply(null, options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    console.log("selectedValues:",selectedValues);
    setSelectedList(selectedValues);

    // set errors
    // const error = formValidation(name, value, fieldsValidation) || ""

    // setFormErrors({
    //   [name]: error
    // })
  }

  const handleSteps = step => {
    switch (step) {
      case 0:
        return (
          <FirstStep handleNext={handleNext} handleChange={handleChange} values={formValues} />
        )
      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            // formErrors={formErrors}
          />
        )
        case 2:
          return (
            <ThirdStep
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange}
              values={formValues}
              // formErrors={formErrors}
            />
          )
      case 3:
        return <Confirm handleNext={handleNext} handleBack={handleBack} values={formValues} />
        // return <Example2 />

      default:
        break
    }
  }

  return (
    <>
      {activeStep === labels.length ? (
        // Last Component
        <Success values={formValues} />
      ) : (
        <>
          <Box style={{ margin: "30px 0 50px" }}>
            <Typography variant="h4" align="center">
              {/* Multi Step Form */}
            </Typography>
            <Typography variant="subtitle2" align="center" style={{ margin: "10px 0" }}>
              {/* React Material UI multi step form with basic form validation logic. */}
            </Typography>
          </Box>
          <Stepper activeStep={activeStep} style={{ margin: "30px 0 15px" }} alternativeLabel>
            {labels.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(activeStep)}
        </>
      )}
    </>
  )
}

export default StepForm
