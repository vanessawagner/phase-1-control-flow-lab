function scuberGreetingForFeet(someValue){
  let result
   if (someValue < 400) {
     result = 'This one is on me!'
  } else if (someValue > 2500) {
      result = 'No can do.'  
  } else if (someValue > 2000) {
      result = 'I will gladly take your thirty bucks.'
  } else if (someValue > 400) {
    result = 'That will be twenty bucks.'
  }

  return result
}

function ternaryCheckCity(city){
if (city==='NYC'){
  return 'Ok, sounds good.'
} else {
  return 'No go.'
}
}

function switchOnCharmFromTip(tip){
  if(tip =='generous'){
    return 'Thank you so much.'
  }
  else if (tip == 'not as generous'){
    return 'Thank you.'
  }
  else {
    return 'Bye.'
  }
}