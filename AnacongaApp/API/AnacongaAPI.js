
export function getTimeline(id,callback){
    fetch("http://10.0.2.2:3001/get-timeline?id="+id)
    .then((response) => response.json())
    .then((json) => {
      callback(json);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getEvents(num_events,callback){
    fetch("http://10.0.2.2:3001/events")
    .then((response) => response.json())
    .then((json) => {
        callback(json);
    })
    .catch((error) => {
        console.error(error);
    });
}