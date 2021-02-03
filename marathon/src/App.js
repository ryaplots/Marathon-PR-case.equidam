import { useState } from 'react';
import './App.css';
import Personal from './Personal';

function App() {
  const [newTime, setNewTime] = useState(null)
  const [times, setTimes] = useState([])
  const [user, setUser] = useState('')

const addTime = (event) => {    
  event.preventDefault()  
  const timeObject = {
    user: user,
    content: newTime,
    date: new Date().toISOString(),
    id: times.length + 1,
  }  
  setTimes(times.concat(timeObject))
  setNewTime('')
  setUser('')
}

const handleTimeChange = (event) => {    
  console.log(event.target.value)    
  setNewTime(parseInt(event.target.value, 10))  
}

const handleChangeUser = (event) => {    
  console.log(event.target.value)    
  setUser(event.target.value)
}



  return (
    <div className="App">
        <h1 className="title">
        Marathon PR
        </h1>
        <Personal value={newTime}
                  onChange={handleTimeChange} 
                  onSubmit={addTime}
                  myTimes={times}
                  onChangeUser={handleChangeUser} 
                  user={user}
                  >
        </Personal>
    </div>
  );
}

export default App;
