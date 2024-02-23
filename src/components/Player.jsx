import React, { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [userName, setUserName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
    setUserName(''); // Очищаем поле ввода при нажатии на "Edit"
  }

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function handleSave() {
    onChangeName(symbol, userName); // Сохраняем новое имя
    setIsEditing(false); // Завершаем режим редактирования
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" onChange={handleChange} value={userName} />
        ) : (
          <span className="player-name">{userName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </li>
  );
};

export default Player;
