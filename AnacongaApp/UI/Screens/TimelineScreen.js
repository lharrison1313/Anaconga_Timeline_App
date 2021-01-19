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
    getTimeline(id,(data)=>{this.setState({timeline: data.timeline})});

  }

  addItem = () =>{
    if(this.ws.readyState == this.ws.OPEN){
      this.ws.send("add")
    }
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