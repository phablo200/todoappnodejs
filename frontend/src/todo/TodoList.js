import React from 'react';
import IconButton from '../template/icon-button';

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
          <tr key={todo._id}>
            <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
            <td>
              <IconButton style='danger' nameButton="Del" hide={todo.done} onClick={() => props.handleRemove(todo)}></IconButton>
              <IconButton style='success' nameButton="Marq" hide={todo.done} onClick={() => props.handleMarkAsDone(todo)}></IconButton>
              <IconButton style='warning' nameButton="Pendente" hide={!todo.done} onClick={() => props.handleMarkAsPading(todo)}></IconButton>
            </td>
          </tr>
        ));
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <td>{renderRows()}</td>
        </tbody>
      </table>
    )
}
