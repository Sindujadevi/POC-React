import React from 'react';
import { render } from 'react-dom';
import { ListManager } from "react-beautiful-dnd-grid";
import './DragdropComponent.css';
// import ConnectPointsWrapper from "./ConnectorPointer";



class DragdropComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedList: sortList(props.list)
    }
  }
 
  sortList = () => {
    this.setState({
      ...this.state,
      sortedList: sortList(this.state.sortedList)
    })
  }

  reorderList = (sourceIndex, destinationIndex) => {
    if (destinationIndex === sourceIndex) {
      return;
    }
    const list1 = this.state.sortedList;
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

  render = () => (
    <div className="App">
      <ListManager
        items={this.state.sortedList}
        direction="horizontal"
        // maxItems={3}
        render={item => <ListElement item={item} />}
        onDragEnd={this.reorderList}
      />
      {/* <ConnectPointsWrapper /> */}
    </div >
  );
}

function sortList(list) {
  return list.slice().sort((first, second) => first.order - second.order);
}

function ListElement({ item: { order } }) {
  return <div className="item"><div>{order}</div></div>;
}

export default DragdropComponent;
// render(<App list={list} />, document.getElementById('root'));


