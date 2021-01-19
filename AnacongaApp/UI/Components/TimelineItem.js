import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

function renderImage(image,title,body){
    if(image != null){
        return(
            <View>
                <View style={{alignItems: "center", justifyContent: 'center'}}>
                    <Image source = {image} style = {styles.imageContainer}/>
                </View>
                <View>
                    <Text style={styles.headerText}>{title}</Text>
                    <Text style={styles.bodyText}>{body}</Text>
                </View>
            </View>
        );
    }
    else{    
        return(
            <View>
                <Text style={styles.headerText}>{title}</Text>
                <Text style={styles.bodyText}>{body}</Text>
            </View>
        )
    }
}

function TimelineItem(props){
    return(
        <View style = {styles.itemContainer}>

            <View style = {styles.timeContainer}>
                <Text style={styles.DateText}>{props.time}</Text>
            </View>

            <View style = {styles.contentContainer}>
                {renderImage(props.image,props.title,props.body)}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        padding: 10
    },

    timeContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },

    contentContainer:{
        backgroundColor: "grey",
        borderRadius: 30,
        padding: 20,
        margin: 5,
    },

    imageContainer:{
        height: 200,
        width: 300,
        marginBottom: 10
    },

    DateText:{
        fontWeight: "bold",
        fontSize: 18,
        color: "black"
    },

    headerText:{
        fontWeight: "bold",
        fontSize: 18,
        color: "black"
    },

    bodyText:{
        fontSize: 16,
        color: "black"
    }

})

export default TimelineItem