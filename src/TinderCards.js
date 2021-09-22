import { SwipeableDrawer } from '@material-ui/core'
import React, {useState , useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import axios from './axios';

const TinderCards = () => {

    // storing raw input by usestate
    const[people,setPeople] = useState([]);
    

    // hookin up backend with frontend
useEffect(() => {
    async function fetchData(){
        // using axios
        const req = await axios.get('/tinder/card');

        setPeople(req.data);
    }

    fetchData();
}, [])

    const Swiped = (direction) => {
        console.log('You swiped: ' + direction);
      }
    const outFrame = (name) => {
        console.log(name + ' left the screen')
      }
      
    
    return (
        <div className='tinderCard'>
           
         {
             people.map(person => (
                <TinderCard className='swipe' key={person.name} onSwipe={(dir) => Swiped(dir, person.name)} onCardLeftScreen={() => outFrame(person.name)} preventSwipe={['up', 'down']}>
                <div className='card' style={{backgroundImage:'url('+person.img +')'}}>
                    <span className='card_title'>{person.name}</span>
                </div>
            </TinderCard>
             ))
         }


          
           
        </div>
    )
}

export default TinderCards
