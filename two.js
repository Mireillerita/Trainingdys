const getRandEvent = () => {
    const events = ['Marathon', 'Triathlon', 'Pentathlon'];
  
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
  };
  
 
  const getTrainingDays = event => {
    let days;
  
    switch (event) {
      case 'Marathon':
        days = 50;
        break;
      case 'Triathlon':
        days = 100;
        break;
      case 'Pentathlon':
        days = 200;
        break;
      default:
        console.log('Invalid event');
    }
  
    return days;
  };

const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  // Main function
  const names = 'Nina';
  const events = getRandEvent();
  const days = getTrainingDays(events);
  
  logEvent(names, events);
  logTime(names, days);
  
  
  const event = getRandEvent();
  const daysToTrain = getTrainingDays(event);
  
  console.log(`You are training for a ${event} and you need to train for ${daysToTrain} days.`);