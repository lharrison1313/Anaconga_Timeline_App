
export function getTimeline(id){
    return fetch("http://10.0.2.2:3001/get-timeline?id="+id)
    .then((response) => response.json())
}

export function getEvents(num_events){
    return fetch("http://10.0.2.2:3001/get-events")
    .then((response) => response.json())
}

export function updateTimelineItems(item, id){
  return fetch("http://10.2.2:3001/upadte-timeline-items")
  .then((response) => response.json())
}