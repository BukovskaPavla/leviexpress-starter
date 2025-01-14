import React, { useState } from 'react';
import { JourneyDetail } from '../JourneyDetail';
import { JourneyPicker } from '../JourneyPicker';
import { SelectedSeat } from '../SelectedSeat';
import { useNavigate } from "react-router-dom";





export const Home = ({onJourneyChange}) => {
  const [journey, setJourney] = useState(null)
  const navigate = useNavigate()
  const handleBuy = () => {
    fetch("https://apps.kodim.cz/daweb/leviexpress/api/reservation", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
    .then((response) => response.json())
    .then((data) => navigate(`/reservation/${data.results.reservationId}`))
  }

  const handleJourneyChange = (journey) => {
    console.log("home", journey)
    setJourney(journey)
    
  }
  return(
  <main>
    <JourneyPicker onJourneyChange={handleJourneyChange} />
    {journey === null 
      ?  null
      :  (<>
          <JourneyDetail journey={journey} />, 
          <SelectedSeat number={journey.autoSeat} />,
          <div className="controls container">
              <button className="btn btn--big" type="button" onClick={()=> handleBuy()}>Rezervovat</button>
          </div>
          </>
       ) }
  </main>
)};
