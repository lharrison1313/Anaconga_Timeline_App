import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import{
  getTimeline
}from '../../API/AnacongaAPI'
import Timeline from '../Components/Timeline'

class TimelineScreen extends React.Component{

  constructor(props){
    super(props)
    this.state = {timeline:[]}
  }
    
  componentDidMount(){
    
    let id = this.props.route.params.timeline_id;
    getTimeline(id)
    .then( data => this.setState({timeline: data.timeline}) )
    .catch( error => console.log(error));

  }

  render(){
      return(
          <SafeAreaView style = {styles.screen}>
              <Timeline data={this.state.timeline}/>
          </SafeAreaView>
      )
  }

}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
})

export default TimelineScreen