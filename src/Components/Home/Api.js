import React, { useEffect } from 'react';

const Api = () => {
    useEffect(()=>{
        fetch('https://free-football-soccer-videos.p.rapidapi.com/',{
            method:"GET",
            headers: {
                'X-RapidAPI-Key': '86daa2130dmshda64f4f09cbb4c3p1019b4jsn1dd7f276a2da',
                'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
              }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Api;