import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

function Box({ item, setTrash }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item,
    end: (trash, monitor) => {
      const dropResult = monitor.getDropResult();

      if (trash && dropResult && trash.typeId === dropResult.id) {
        setTrash((prev) => prev.filter((el) => el.id !== trash.id));
        alert(`You dropped ${trash.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid="box">
      {item.name}
    </div>
  );
}

export default Box;
