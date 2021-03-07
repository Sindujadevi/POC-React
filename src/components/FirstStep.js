// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// // import List from '@material-ui/core/List';
// // import ListItem from '@material-ui/core/ListItem';
// // import ListItemIcon from '@material-ui/core/ListItemIcon';
// // import ListItemText from '@material-ui/core/ListItemText';
// // import Checkbox from '@material-ui/core/Checkbox';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import { ListManager } from "react-beautiful-dnd-grid";
// import { ListElement } from "react-beautiful-dnd-grid";
// import DragdropComponent from './DragdropComponent';
// import { ListItemText } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     margin: 'auto',
//     // float:'left'
//   },
//   paper: {
//     width: 200,
//     height: 230,
//     overflow: 'auto',
//   },
//   button: {
//     margin: theme.spacing(0.5, 0),
//   },
//   box:{
//     width:100,
//     height:100,
//     display:"inline-flex",
//     border:'1px solid red'
//   },
//   item:{
//     float: "left",
//     width: 13,
//   }
// }));

// function not(a, b) {
//   return a.filter((value) => b.indexOf(value) === -1);
// }

// function intersection(a, b) {
//   return a.filter((value) => b.indexOf(value) !== -1);
// }

// export default function TransferList() {
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState([]);
//   const [left, setLeft] = React.useState([0, 1, 2, 3]);
//   const [right, setRight] = React.useState([4, 5, 6, 7]);

//   const leftChecked = intersection(checked, left);
//   const rightChecked = intersection(checked, right);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const handleAllRight = () => {
//     setRight(right.concat(left));
//     setLeft([]);
//   };

//   const handleCheckedRight = () => {
//     setRight(right.concat(leftChecked));
//     setLeft(not(left, leftChecked));
//     setChecked(not(checked, leftChecked));
//   };

//   const handleCheckedLeft = () => {
//     setLeft(left.concat(rightChecked));
//     setRight(not(right, rightChecked));
//     setChecked(not(checked, rightChecked));
//   };

//   const handleAllLeft = () => {
//     setLeft(left.concat(right));
//     setRight([]);
//   };

//   const customList = (items) => (
    
//       <Box flexDirection="row" dense component="div" className={classes.item}>
//         {items.map((value) => {
//           const labelId = `transfer-list-item-${value}-label`;

//           return (
//             <Grid key={value} role="box" button onClick={handleToggle(value)}>
             
//               <Grid id={labelId}>{`item ${value + 1}`}</Grid>
//             </Grid>
//           );
//         })}
//       </Box>
   
//   );
//   // const customList1=(items) =>({
//   //   {items.map((value)=>{
//   //     const labelId = `transfer-list-item-${value}-label`;
//   //     return(
//   //       <Box key={value} id={labelId} button onClick={handleToggle(value)}> {`List item ${value + 1}`}</Box>
//   //     );
//   //   })}
    
//   // })

//   return (
//     <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
//       <Grid item>{customList(left)}</Grid>
//       <Grid item>
//         <Grid container direction="column" alignItems="center">
//           <Button
//             variant="outlined"
//             size="small"
//             className={classes.button}
//             onClick={handleAllRight}
//             disabled={left.length === 0}
//             aria-label="move all right"
//           >
//             ≫
//           </Button>
//           <Button
//             variant="outlined"
//             size="small"
//             className={classes.button}
//             onClick={handleCheckedRight}
//             disabled={leftChecked.length === 0}
//             aria-label="move selected right"
//           >
//             &gt;
//           </Button>
//           <Button
//             variant="outlined"
//             size="small"
//             className={classes.button}
//             onClick={handleCheckedLeft}
//             disabled={rightChecked.length === 0}
//             aria-label="move selected left"
//           >
//             &lt;
//           </Button>
//           <Button
//             variant="outlined"
//             size="small"
//             className={classes.button}
//             onClick={handleAllLeft}
//             disabled={right.length === 0}
//             aria-label="move all left"
//           >
//             ≪
//           </Button>
//         </Grid>
//       </Grid>
//      <Box>{customList(right)}</Box>
      
//     </Grid>
//   );
// }




import React, { Fragment ,useState} from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import DragdropComponent from './DragdropComponent';
import { ListManager } from "react-beautiful-dnd-grid";

import "./FirstStep.css"
const list = [
  {
    id: "0",
    order: 0,
    name:"One"
  },
  {
    id: "1",
    order: 1,
    name:"two"
  },
  {
    id: "2",
    order: 2,
    name:"three"
  },
  {
    id: "3",
    order: 3,
    name:"four"
  },
  {
    id: "4",
    order: 4,
    name:"four"
  },
 
];
// Destructuring props
const FirstStep = ({handleNext,handleChange,values:{multivalue}}) => {
  

  const [selectedList, setSelectedList] = useState([]);
  const[sortedListval,sortedList]=useState([]);
  
  sortList = () => {
          sortList(selectedList);
    }
  
  // function ListElement() {
  //   console.log("ListElement");
  //   return <div className="item"><div>Hello</div></div>;
  // }
  function sortList(list) {
    return list.slice().sort((first, second) => first.order - second.order);
  }
  
  function ListElement({ item: { order } }) {
    return <div className="item"><div>{order}</div></div>;
  }
  const reorderList = (sourceIndex, destinationIndex) => {
    if (destinationIndex === sourceIndex) {
      return;
    }
    const list1 = JSON.stringify(sortedList);
    if (destinationIndex === 0) {
      list1[sourceIndex].order = list1[0].order - 1;
      this.sortList();
      return;
    }
    if (destinationIndex === list1.length - 1) {
      list1[sourceIndex].order = list1[list1.length - 1].order + 1;
      this.sortList();
      return;
    }
    if (destinationIndex < sourceIndex) {
      list1[sourceIndex].order = (list1[destinationIndex].order + list1[destinationIndex - 1].order) / 2;
      this.sortList();
      return;
    }
    list1[sourceIndex].order = (list1[destinationIndex].order + list1[destinationIndex + 1].order) / 2;
    this.sortList();
  }
  
  const handleChange1 = e => {
    let { options } = e.target;
       
    options = Array.apply(null, options)
    const selectedList = options.filter(x => x.selected).map(x => x.value);
    console.log("selectedList:",selectedList);
    var templist=[];
    var i;
    for (i = 0; i < selectedList.length; i++) {
    var temp={
     id : i,
	 value:selectedList[i]
    }
     templist[i] = temp;
    }
   
    // console.log("selectedList:",selectedList);
    // this.setState({
    //   selectedList: selectedList

    // });

    sessionStorage.setItem("selectedList", JSON.stringify(selectedList));

  }
    

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth required margin="normal">
          <select  onChange={handleChange} id="multidrop" className="width15"  
        multiple
        name="list-box"
        onChange={handleChange1}
        >
           {list.map((co) => {
                 return  <option className="Padding10" key = {co.id} >{co.name}</option>
            })
        }
        {/* <option id="2" className="Padding10" value="Option 2">Component 2</option>
        <option id="3" className="Padding10" value="Option 3">Component 3</option>
        <option id="4" className="Padding10" value="Option 4">Component 4</option>
        <option id="5" className="Padding10" value="Option 5">Component 5</option>
        <option id="6" className="Padding10" value="Option 6">Component 6</option>
        <option id="7" className="Padding10" value="Option 7">Component 7</option>
        <option id="8" className="Padding10" value="Option 8">Component 8</option> */}
      </select>
      <br /><br />
      <b>Output:</b>
      <pre>{JSON.stringify(selectedList.name)}</pre>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8}>
        {/* <div><DragdropComponent list={list} /></div> */}
        <ListManager
        items={JSON.stringify(sortedList)}
        direction="horizontal"
        // maxItems={3}
        render={item => <ListElement item={item} />}
        onDragEnd={reorderList()}
      />
       
        </Grid>

      </Grid>

      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={handleNext }>
          Next
        </Button>
      </div>
    </Fragment>
  )
}

export default FirstStep
