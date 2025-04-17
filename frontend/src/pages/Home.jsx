import React from 'react'

const Home = () => {
    const events = [
        { id: 1, name: 'Event 1', date: '2022-01-01', description: 'Description 1' },
        { id: 2, name: 'Event 2', date: '2022-02-01', description: 'Description 2' }]
  return (
    
        <div >
          <h2 >My Events</h2>
          <ul>
            {events.map((event, idx) => (
              <li key={idx} >
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
export default Home