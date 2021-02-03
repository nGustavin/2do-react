import React from 'react';

import { Container, TodoList, Todo, TopBarContainer } from './styles';
import background from '../../assets/home/background.svg'
import logo from '../../assets/home/logo.svg'
import check from '../../assets/home/check.svg'

import Checkbox from '@material-ui/core/Checkbox'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



const Home: React.FC = () => {


  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  

  return (
      <Container>
          <img src={background} alt=""/>
          <TopBarContainer>
            <img src={logo} alt=""/>
            <img src={check} alt=""/>
            <button type="submit">+ Add</button>
          </TopBarContainer>
          <TodoList>
            <Todo>
              <span>Walk the dog</span>
              <div>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                style={{color: "#D95B5B"}}
              />
              <IconButton aria-label="delete" style={{color: "#D95B5B"}}>
               <DeleteIcon style={{color: "#D95B5B"}} />
              </IconButton>
              <IconButton aria-label="delete" style={{color: "#D95B5B"}}>
               <EditIcon style={{color: "#D95B5B"}} />
              </IconButton>
              </div>
            </Todo>
            
          </TodoList>
      </Container>
  );
}

export default Home;