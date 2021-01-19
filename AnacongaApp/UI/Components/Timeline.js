import React from 'react';
import {
  FlatList,
} from 'react-native';
import TimelineItem from "./TimelineItem"


const renderItem = ({item}) =>{

  var image = {uri: item.image}
  return(
    <TimelineItem time={item.time} title={item.title} body={item.body} image={image}/>
  )
}

function Timeline(props){
  return(
    <>
      <FlatList 
        renderItem = {renderItem}
        data = {props.data}
        keyExtractor = {item => item.key}
      />
    </>
  )
}

export default Timeline
