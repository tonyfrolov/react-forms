import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import UserCard from '../Cards/UserCard';
import { APP_AUTH } from '../../api/Constants';
import { getVariable, updateVariable } from '../SelectionControls/SelectionControls';

const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  borderRadius: '4px',
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  // background: isDragging ? 'lightgreen' : '#fff',
  border: isDragging ? '1px solid #002882' : '1px solid #ced4da',
  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  borderRadius: '4px',
  // background: isDraggingOver ? 'lightblue' : 'lightgrey',
  border: isDraggingOver ? '1px solid #002882' : '1px solid #ced4da',
  padding: grid,
  width: 250,
});

export default class DndAssigment extends Component {
  static propTypes = {
    users: PropTypes.array,
  };

  state = {
    items: [],
    selected: [],
  };

  id2List = {
    droppable: 'items',
    droppable2: 'selected',
  };

  constructor(props, context) {
    super(props, context);
    this.storeApprovers.bind(this);
  }

  componentDidMount() {
    const {
      task: { processInstanceId },
      users,
    } = this.props;
    Promise.resolve()
      .then(() => getVariable(processInstanceId, 'approvers'))
      .then(resp => resp.json())
      .then(({ value }) => {
        const approvers = (value || '').split(',');
        console.log('users.filter(u => value.includes(u)', value, users);
        this.setState({
          items: users.filter(u => !approvers.includes(u.id)),
          selected: users.filter(u => approvers.includes(u.id)),
        });
      });
  }

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(this.getList(source.droppableId), source.index, destination.index);

      let state = { items };

      if (source.droppableId === 'droppable2') {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination,
      );

      this.setState(
        {
          items: result.droppable,
          selected: result.droppable2,
        },
        this.storeApprovers,
      );
    }
  };

  storeApprovers() {
    const {
      task: { processInstanceId },
    } = this.props;
    const approversStr = this.state.selected.map(user => user.id).join();
    console.log('this.state.selected.', this.state.selected);
    console.log('approversStr', approversStr);
    Promise.resolve()
      .then(() => getVariable(processInstanceId, 'approvers'))
      .then(resp => resp.json())
      .then(({ approvers }) =>
        updateVariable(
          approvers || approvers !== '' ? 'PUT' : 'POST',
          processInstanceId,
          'approvers',
          approversStr,
        ),
      );
  }

  render() {
    console.log('state', this.state);
    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                {this.state.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <UserCard userName={`${item.firstName} ${item.lastName}`} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                {this.state.selected.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <UserCard userName={`${item.firstName} ${item.lastName}`} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    );
  }
}
