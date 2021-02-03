
import React from 'react';
import './Personal.css';
import FastestTime from './FastestTime';
import Form from './Form';

const Personal = ({user, onSubmit, value, onChange, myTimes, onChangeUser}) => {

    return (
    <div className="personal-dashboard">
        <h2 className="user">leader board</h2>
        <FastestTime myTimes={myTimes}></FastestTime>
        <p className="past-title">Past times:</p>
        <ol>
        {myTimes.map(time => 
            <li className="past-times" key={time.id}> {time.user} - {time.content}</li>
        ).reverse().slice(0 , 5)}
        </ol>
        <Form onSubmit={onSubmit} value={value} onChange={onChange} onChangeUser={onChangeUser} user={user}></Form>
    </div>

    )
  }


export default Personal;