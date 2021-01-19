import React from 'react';
import {
  FlatList,
} from 'react-native';
import Categories from "./Categories"
import TimelineListItem from "./TimelineListItem"


function TimelineList(props){

  const renderItem = ({item}) =>{
    image = { uri: item.image};
    return(<TimelineListItem title = {item.title} image = {image} navigation = {props.navigation} timeline_id = {item.timeline_id}/>)
    console.log(item)
  }

  return(
    <>
      <FlatList 
      //ListHeaderComponent = {Categories}
      renderItem = {renderItem}
      numColumns = {2}
      data = {props.data}
      keyExtractor = {item => item.key}
      />
    </>
  )
}

export default TimelineList
