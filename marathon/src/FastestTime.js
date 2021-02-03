import {useEffect} from 'react';
import {useState } from 'react';
import './FastestTime.css';

const FastestTime = ({myTimes}) => {
const [fastest, setFastest] = useState(0)

useEffect(() => {getFastest(myTimes)})

const getFastest = (time) => {
    if (time.length === 0) return;
    let min = time[0].content;
    for (let i = 1; i < time.length; i++){
        min = min > time[i].content ? time[i].content : min;
    }
    console.log(min);
    setFastest(min);
}

    return (
        <div>
            <p className="fastest">Fastest time: <span className="number">{fastest}</span></p>
        </div>
    )
}

export default FastestTime;