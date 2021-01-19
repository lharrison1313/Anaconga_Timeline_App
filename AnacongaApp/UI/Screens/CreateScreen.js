import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';



function CreateScreen(){
  return (
    <>
      <SafeAreaView style = {styles.mainContainer}>

        <View style = {styles.subContainer}>
            <TouchableOpacity style = {styles.createButton}>
                <Text>Permanant Timeline</Text>
            </TouchableOpacity>
        </View>

        <View style = {styles.subContainer}>
            <TouchableOpacity style = {styles.createButton}>
                <Text>Self-Destructing Timeline</Text>
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1
  },

  subContainer: {
    flex: .5,
    justifyContent: 'center',
    alignItems: "center"
  },

  createButton: {
    width: 300,
    height: 300,
    borderRadius: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: "center"
  }
});

export default CreateScreen;
