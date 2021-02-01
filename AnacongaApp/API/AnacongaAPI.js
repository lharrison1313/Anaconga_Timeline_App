
export function getTimeline(tid){
    return fetch("http://10.0.2.2:3001/get-timeline?id="+tid)
    .then((response) => response.json());
}

export function getEvents(num_events){
    return fetch("http://10.0.2.2:3001/get-events")
    .then((response) => response.json());
}

export function updateTimelineItem(item, tid, iid){

  let request = {
    method: 'POST',
    body: JSON.stringify({
      item: item,
      tid: tid,
      iid: iid
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }
  
  return fetch("http://10.2.2:3001/update-timeline-item", request)
  .then((response) => response.json());
}

export function addTimelineItem(item, tid){

  let request = {
    method: 'POST',
    body: JSON.stringify({
      item: item,
      tid: tid,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  return fetch("http://10.2.2:3001/add-timeline-item", request)
  .then((response) => response.json());

}

export function updateEvent(info, id){
  let request = {
    method: 'POST',
    body: JSON.stringify({
      id: id,
      info: info,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  return fetch("http://10.2.2:3001/update-event", request)
  .then((response) => response.json());

}

export function deleteTimelineItem(tid,iid){
  
  let request = {
    method: 'DELETE',
    body: JSON.stringify({
      iid: iid,
      tid: tid,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  return fetch("http://10.2.2:3001/delete-timeline-item", request)
  .then((response) => response.json());

}

export function deleteTimeline(eid,tid){
  let request = {
    method: 'DELETE',
    body: JSON.stringify({
      eid: eid,
      tid: tid,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  return fetch("http://10.2.2:3001/delete-timeline", request)
  .then((response) => response.json());


}

