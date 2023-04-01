function scuberGreetingForFeet(rideheight){
  // Write your code here!
  let greeting
  if (rideheight <= 400) {
    greeting = 'This one is on me!'
    return greeting
  }
  else if (rideheight >= 400 && rideheight <= 2000) {
    greeting = 'That will be twenty bucks.'
    return greeting
  }
  else if (rideheight >= 2000 && rideheight <= 2500) {
    greeting = 'I will gladly take your thirty bucks.'
    return greeting
  }
  else if (rideheight > 2500) {
    greeting = 'No can do.'
    return greeting
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'?'Ok, sounds good.' : `No go.`
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}