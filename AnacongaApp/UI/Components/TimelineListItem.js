import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';



function TimelineListItem(props){
  return(
    <>
      <TouchableOpacity style = {styles.timelineListItem} onPress={() => props.navigation.navigate("Timeline",{timeline_id: props.timeline_id})}>
          <ImageBackground source = {props.image} imageStyle = {styles.imageStyle} style = {styles.imageContainer}>
                <Text style = {styles.titleText}>{props.title}</Text>
          </ImageBackground>
      </TouchableOpacity>
    </>
  )
}


const styles = StyleSheet.create({
    imageContainer:{
        flexDirection: "column-reverse",
        flex: 1,
        borderRadius: 40,
        padding: 15,
        alignItems: 'center'
    },

    imageStyle:{
        borderRadius: 40,
    },

    timelineListItem: {
        width: 175,
        height: 200,
        backgroundColor: "grey",
        borderRadius: 40,
        margin: 5
    },

    titleText:{
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    }

})

export default TimelineListItem;