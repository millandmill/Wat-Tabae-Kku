//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Dimensions, Linking, TouchableOpacity, Image,Text,ScrollView} from 'react-native';
//import all the components we are going to use.

import EStyleSheet from 'react-native-extended-stylesheet';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'Ozone Villa Phuket',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View> 
      <ScrollView>
      <View style={styles.container}>


          <Image
                style={eStyles.Image}
                source={require('../img/header.jpg')}
          />

          <Text style={{textAlign: 'center',fontSize: RFPercentage(3)}}>{"\n"}Ozone Luxury Pool Villas in Phuket{"\n"}</Text>
          <Text style={{textAlign: 'center',fontSize: RFPercentage(1.5)}}>
          Experience a new atmosphere of living in a home that is much more than just a “home”.{"\n"}
          
          Its sophisticated design is centered around relaxation for the entire family giving you peaceful views of natural greens and your very own private swimming pool for each house.
          {"\n"}
          </Text>


        <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity style={{ backgroundColor: "transparent" }} onPress={() => Linking.openURL('https://www.google.com/maps/dir//8.015872,98.391991/@8.015872,98.391991,16z?hl=en-US')}>
        <Image
                        style={eStyles.Image2}
                        source={require('../img/maps.jpg')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "transparent" }} onPress={() =>navigate('SecondPage')}>
        <Image
                        style={eStyles.Image3}
                        source={require('../img/tour.jpg')}
        />
        </TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center',fontSize: RFPercentage(1.5)}}>{"\n"}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity style={{ backgroundColor: "transparent" }} onPress={() => Linking.openURL('https://www.facebook.com/Ozonevillaphuket/')}>
        <Image
                        style={eStyles.Image2}
                        source={require('../img/facebook.jpg')}
        />
        </TouchableOpacity>
        
        <TouchableOpacity style={{ backgroundColor: "transparent" }} onPress={() => Linking.openURL('mailto:info@ozonevilla.com')}>
        <Image
                        style={eStyles.Image3}
                        source={require('../img/email.jpg')}
        />
        </TouchableOpacity>
        </View>       
        <Text style={{textAlign: 'center',fontSize: RFPercentage(1.5)}}>{"\n"}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity style={{ backgroundColor: "transparent" }} onPress={() => Linking.openURL('tel:+66910358046')}>
        <Image
                        style={eStyles.Image2}
                        source={require('../img/tel.jpg')}
        />
        </TouchableOpacity>
        
        <TouchableOpacity style={{ backgroundColor: "transparent" }}  onPress={() =>navigate('ThPage')}>

          
        <Image
                        style={eStyles.Image3}
                        source={require('../img/ceo.jpg')}
        />
        </TouchableOpacity>
        </View>   
        <Text style={{textAlign: 'center',fontSize: RFPercentage(1.5)}}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>

      </View>
      
      </ScrollView>
    </View> 
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5eeda'

  },

});



const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const eStyles = EStyleSheet.create({
  Image:{
    width: '380rem' , 
    height: '300rem'
  },
  Image2:{
    width: '160rem' , 
    height: '160rem',
    marginRight: '20rem'
  },
  Image3:{
    width: '160rem' , 
    height: '160rem',
  },
  text:{
     height: '30rem', 
     left: '30rem' ,
     top: '50rem'
  },
  text2:{
        height: '30rem', 
        left: '100rem' ,
        top: '50rem'
     }
});

