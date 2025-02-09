import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import styles from './FloorSelector.module.css';

const FloorSelector = ({ residents }) => {
  const { floor } = useParams();

  const floorResidents = residents.filter(resident => resident.floor === floor);

  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>Piso {floor}</h2>
      {floorResidents.map((resident, index) => (
        <div className={styles.depto} key={index}>
          <p className={styles.resident}>{resident.department} - {resident.name}</p>
          <Button to={`https://wa.me/${resident.phone}?text=Estas%20en%20casa?`} label="Enviar Whatsapp" />
        </div>
      ))}
    </div>
  );
};

export default FloorSelector;
