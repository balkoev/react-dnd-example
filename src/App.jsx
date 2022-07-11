import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from './Box';
import Dustbin from './Dustbin';

function App() {
  const [trash, setTrash] = useState([
    { id: uuidv4(), name: 'Бутылка', typeId: 11 },
    { id: uuidv4(), name: 'Салфетка', typeId: 22 },
    { id: uuidv4(), name: 'Палка', typeId: 33 },
    { id: uuidv4(), name: 'Ваза', typeId: 11 },
    { id: uuidv4(), name: 'Тетрадь', typeId: 22 },
    { id: uuidv4(), name: 'Лопата', typeId: 33 },
  ]);
  const [boxes] = useState([
    { id: 11, name: 'Стекло' },
    { id: 22, name: 'Бумага' },
    { id: 33, name: 'Дерево' },
  ]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        {trash.map((el) => <Box key={el.id} item={el} setTrash={setTrash} />)}
      </div>
      <div style={{ display: 'flex' }}>
        {boxes.map((el) => <Dustbin key={el.id} item={el} />)}
      </div>
    </>

  );
}

export default App;
