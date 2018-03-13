import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/icon-button';


export default props => (
    <div role="form" className="row todoForm">
      <Grid cols="12 9 10">
        <input id="description" className="form-control"
          placeholder="adicione uma tarefa"
          value={props.description}
          onChange={props.handleChange}
          ></input>
      </Grid>

      <Grid cols="12 3 2">
          <IconButton style="primary" nameButton="Adicionar"
            onClick={props.handleAdd}></IconButton>
      </Grid>
    </div>
);
