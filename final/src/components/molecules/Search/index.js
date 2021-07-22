import React ,{useEffect, useState}from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import NoteCard from '../Card/NoteCard';
const useStyles = makeStyles((theme) => ({
   

    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    
  }));
  

export default function Search(){
    const classes = useStyles();
    const[searchBar,setSearchBar]=useState(false);
    const[searchTerm,setSearchTerm]=useState('');
    const onClickChange=()=>{
        setSearchBar(!searchBar)
    }
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
const books=[];   

return (
<div >
            <IconButton onClick={onClickChange}>
              <SearchIcon />
            </IconButton >
            
              {searchBar &&  
              <InputBase type="text"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(event)=>{
                setSearchTerm(event.target.value);
              }} 
              inputProps={{ 'aria-label': 'search' }}
              />
              }
             
              {
              status && status.filter((val)=>{
                if(searchTerm==""){
                return ''
                }
                 if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  books.push(val);
                  //return val
                }
                else if(val.authorName.toLowerCase().includes(searchTerm.toLowerCase())){
                  books.push(val);
                  //return val
                }
                else if(val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  books.push(val);
                  //return val
                }
              }).map((val,key)=>{
                return(
                  <div className="user" key={key}>
                    <p>{val.name}</p>
                  </div>
                )
              })
            }
              
            <NoteCard status={books} onDelete={deleteTask}/> 
              </div>
              
     )
     }