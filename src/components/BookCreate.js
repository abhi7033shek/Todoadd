import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  
  

  const handleSubmit = (event) => {
    if (event.length !== 0) {
      setTitle(true)
 }
 if(title === "") {
  
  alert(
               "ERROR",
               "Something went wrong... Please make sure you have inserted all data correctly.",
               [{
                   text: "OK",
                   style: "ok",
               }])
               
}
    
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };
  

  return (
    <div className="book-create">
      <h3>Add your list</h3>
      <form onSubmit={handleSubmit}>
        <label>Title </label>
        <input className="input" value={title} onChange={handleChange} required /><br></br><br></br>
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
