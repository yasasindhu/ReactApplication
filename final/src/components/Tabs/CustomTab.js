
import React ,{useEffect, useState}from 'react';
import{Tabs,Tab,AppBar} from '@material-ui/core'
import NoteCard from '../molecules/Card/NoteCard'
import BookList from './BookList'
import Grid from '@material-ui/core/Grid';
import NavIteam from '../Dropdown/dropDown';
import { alpha, makeStyles} from '@material-ui/core/styles';
import {theme} from '../Theme/Theme';
import { ThemeProvider } from '@material-ui/styles';

function CustomTab(){

    const[status,setStatus]=useState(null)
    const[check,setCheck]=useState(false)
    
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
        // if(status[i].buttonName==="currently reading"){
        // status[i].buttonName="finished reading";
        // status[i].buttonText="Read Once More";
        // }
        // else{
        // status[i].buttonName="currently reading";
        // status[i].buttonText="Mark As Read";
        // }
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
    const[value,setValue]=React.useState(0)
    const handleTabs=(e,val)=>{
        console.warn(val)
        setValue(val)
    }
    return(
       <div>
       <ThemeProvider theme={theme}>
           <AppBar position="static"  
           color="inherit"
           style={{backgroundcolor:"transparent",color:"black",boxShadow:"0px 0px 0px 0px"}}>
               <Tabs value={value} indicatorColor="secondary"
                textColor="secondary" onChange={handleTabs}
                aria-label="disabled tabs example"
                inkBarStyle={{background: '#22c870'}}>
                   <Tab label="Currently reading" />
                   <Tab label="Finished reading" />
               </Tabs>
           </AppBar>
           
           {
               value===0 && status && <NoteCard status={search(status,false)} onDelete={deleteTask}/>
           }
         
           {
               value ===1 && (status &&  <NoteCard status={search(status,true)} onDelete={deleteTask}/>)
           }
           {/* <NavIteam books={status}></NavIteam> */}
           </ThemeProvider>
       </div>
        
    );
 }
 function search(rows,type){
     console.log(type);
     return rows.filter((row)=>row.check===type);
 }
// function onClickUpdate(id){
//     console.log("deleting"+id);
//     fetch('http://localhost:8000/books/$(id)',{method:'DELETE',})
//         .then(res=>{
//           return res.json()
//         })
//         .then((data)=>{
//           console.log((data));
        
//       },[]);
// }



export default CustomTab



