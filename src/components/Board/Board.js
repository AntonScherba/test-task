import React from 'react';
import Tile from '../Tile/Tile';
import './Board.css';

const Board = ({colors}) => {
    const tile = colors.map((color, i) => {
        return <Tile key={i} color={color} />
    })

    return <div className="board">{tile}</div>
}

export default Board;