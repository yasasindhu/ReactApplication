
// const BookList=({status})=>{
// return(
//     { status.map(state =>(
//         <h3>{state.value}</h3>
//     ))}
// );
// }
// export default BookList;


const BookList = ({status }) => {
    return (
      <div className="blog-list">
        {status.map(state => (
          <div >
            <h2>{ state.authorName }</h2>
            <p>Written by { state.time }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default BookList;