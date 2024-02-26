console.log('loading function');
export const handler = async(event,context) => {
  console.log('Event logged from Lambda: ', event);
  return   'Shresta  says '+  event.keyword+ '!'; // Echo back the name
};
