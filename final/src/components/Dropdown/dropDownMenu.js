import React  ,{useEffect, useState}from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {ListItem,ListItemIcon} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket} from '@fortawesome/free-solid-svg-icons';
import {faLandmark } from '@fortawesome/free-solid-svg-icons';
import {faFlask } from '@fortawesome/free-solid-svg-icons';
import NoteCard from '../molecules/Card/NoteCard';
import Container from '@material-ui/core/Container';
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const[status,setStatus]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:8000/books')
        .then(res=>{
          return res.json()
        })
        .then((data)=>{
          console.log(data);
          setStatus(data)
        })
      },[]);  
      const getBooks=async ()=>{
        await fetch('http://localhost:8000/books')
        .then(res=>{
          return res.json()
        })
        .then((data)=>{
          console.log(data);
          setStatus(data)
        });
    };
    const  deleteTask=async(id,status)=>{
      console.log(id)
      let i=0;
      while(i<status.length){
          if(status[i].id==id){
              break;
          }
          i++;
      }
      status[i].check=!status[i].check;
      console.log(status[i].name)
       await fetch(`http://localhost:8000/books/`+id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(status[i]),
  
  });
 getBooks();

}


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onSelect=(searchCategory)=>{
    getBooks();
   console.log(searchCategory);
    let i=0;
        while(i<status.length){
            if(status[i].category.toLowerCase()==searchCategory.toLowerCase()){
               console.log(status[i]);
              <NoteCard status={status[i]} onDelete={deleteTask}/>
            }
            i++;
        }
}


  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        //variant="contained"
        //color="primary"
        onClick={handleClick}
      >
        Explore
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <Container>
      <Grid container spacing={3} >
      <Grid container item xs={12} sm={6} md={4}>
        <StyledMenuItem>
          <ListItem>
            <ListItemIcon><FontAwesomeIcon icon={faRocket}/></ListItemIcon>
          <Button name="Enterpreneurship" onClick={()=>onSelect("politics")}>Enterpreneurship</Button>
          </ListItem>
        </StyledMenuItem>
        </Grid>
        <Grid container item xs={12} sm={6} md={4}>
        <StyledMenuItem>
        <ListItem>
            <ListItemIcon><FontAwesomeIcon icon={faLandmark}/></ListItemIcon>
          <ListItemText primary="Politics" />
          </ListItem>
        </StyledMenuItem>
        </Grid>
        <Grid container item xs={12} sm={6} md={4}>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Marketing & Sales" />
        </StyledMenuItem>
        </Grid>
        <Grid container item xs={12} sm={6} md={4}>
        <StyledMenuItem>
        <ListItem>
            <ListItemIcon><FontAwesomeIcon icon={faFlask}/></ListItemIcon>
          <ListItemText primary="Science" />
          </ListItem>
        </StyledMenuItem>
        </Grid>
        <Grid container item xs={12} sm={6} md={4}>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Health & Nutrition" />
        </StyledMenuItem>
        </Grid>
        <Grid container item xs={12} sm={6} md={4}>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Personal Development" />
        </StyledMenuItem>
        </Grid>
        </Grid>
        </Container>
      </StyledMenu>
    </div>
  );
}
