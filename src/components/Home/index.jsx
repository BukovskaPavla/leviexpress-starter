import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';


export const Home = ({onJourneyChange}) => {
  const [journey, setJourney] = useState(null)
  const handleJourneyChange = (journey) => {
    console.log("home", journey)
    setJourney(journey)
    
  }
  return(
  <main>
    <JourneyPicker onJourneyChange={handleJourneyChange} />
    {journey=== null ?  null: <p>Nalezeno spojení s id ${journey.journeyId}</p> }
  </main>
)};
