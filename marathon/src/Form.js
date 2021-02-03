import React from 'react';
import './Form.css';

const Form = ({onSubmit, value, onChange, user, onChangeUser}) => {
    return (
        <div className="add-form">
            <p className="form-title">Add entry:</p>        
            <form onSubmit={onSubmit}>
                <br/>
                Time:
                <input value={value} onChange={onChange}/>
                <br/>
                Name:
                <input value={user} onChange={onChangeUser}/><br></br>
                <button className="button" type="submit">Add</button>      
            </form>  
        </div>
    )
  }


export default Form;