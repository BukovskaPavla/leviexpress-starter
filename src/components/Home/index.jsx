import React, { useState } from 'react';
import { JourneyDetail } from '../JourneyDetail';
import { JourneyPicker } from '../JourneyPicker';
import { SelectedSeat } from '../SelectedSeat';


export const Home = ({onJourneyChange}) => {
  const [journey, setJourney] = useState(null)
  const handleJourneyChange = (journey) => {
    console.log("home", journey)
    setJourney(journey)
    
  }
  return(
  <main>
    <JourneyPicker onJourneyChange={handleJourneyChange} />
    {journey=== null 
      ?  null
      : (<JourneyDetail journey={journey} />, <SelectedSeat number={journey.autoSeat} />) }
  </main>
)};
