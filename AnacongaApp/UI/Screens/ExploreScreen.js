import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';
import{
  getEvents
}from '../../API/AnacongaAPI'
import Categories from '../Components/TimelineList'
import SearchBar from '../Components/SearchBar'
import TimelineList from '../Components/TimelineList'
import  {withNavigation}  from 'react-navigation';


class ExploreScreen extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    getEvents(0)
    .then( data => this.setState({data:data}))
    .catch( error => console.log(error));
  }

  render(){
    return(
      <SafeAreaView style = {{ alignItems: "center"}}>
        <TimelineList data = {this.state.data} navigation = {this.props.navigation}/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({


})

export default  withNavigation(ExploreScreen);