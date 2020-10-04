import React, { Component } from 'react';

import Cell from '../Cell/Cell';

class Board extends Component {
    style = {
        textAlign: 'center',
        height: `${this.props.board.length * 42}px`,
    }

    render() {
        const rows = this.props.board.map((row, i) => {
            return row.map((cell, j) => {
                return (
                    <Cell
                        key={i.toString().concat(j.toString())}
                        value={cell.value}
                        isRevealed={cell.isRevealed}
                        clicked={() => this.props.cellClicked(i, j)} />
                )
            })
        });

        const orderedRows = rows.map((r, i) => {
            return (
                <div key={i} style={{ display: 'inline-block' }}>
                    {r.map(cell => cell)}
                </div>
            )
        })

        return (
            <div style={this.style}>
                {orderedRows}
            </div>
        )
    }
};

export default Board;