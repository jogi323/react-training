import React, {useEffect, useState} from 'react';

export default function RenderElements () {
    const [time, updateTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            updateTime(new Date().toLocaleTimeString())
          }, 1000);
          return () => {
            clearInterval(interval)
          }
    })
    return (
        <div>
            Render Elements,
            The time is {time}
        </div>
    )
}