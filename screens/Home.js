import React, { Component } from 'react';
import { Text, View, ImageBackground,StyleSheet,TouchableOpacity,Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View 
                style={{
                    flex:1
            }}>
            <ImageBackground source={require('../assets/assets/bg_image.png')} style={{flex:1,resizeMode:'cover'}}>
            <View
                style={{
                    flex: 0.25,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text style = {{color:'white',fontSize:25}}>ISS Tracker App</Text>
                
            </View>

            <TouchableOpacity style = {styles.button}
            onPress = {() => this.props.navigation.navigate('IssLocation')}> 
            <Image source={require('../assets/assets/iss_icon.png')} style = {styles.Icon}></Image>
                <Text style = {styles.text}>
                    ISS Location
                </Text>
                <Text style = {styles.texT}>
                    {"Know More --->"}
                </Text>
                <Text style = {styles.Digit}>
                    1
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}
            onPress = {() => this.props.navigation.navigate('Meteors')}> 
            <Image source={require('../assets/assets/meteor_icon.png')} style = {styles.Icon}></Image>
                <Text style = {styles.text}>
                    Meteors
                </Text>
                <Text style = {styles.texT}>
                    {"Know More --->"}
                </Text>
                <Text style = {styles.Digit}>
                    2
                </Text>
            </TouchableOpacity>
            </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    button:{
        flex:0.25,
        marginLeft:200,
        marginRight:200,
        borderWidth:2,
        paddingLeft:400,
        justifyContent:'center',
        backgroundColor:'white',
        marginTop:75

    },
    text:{
        color:'black',
        fontSize:30,
        fontWeight:'bold'
    },
    texT:{
        color:'red'
    },
    Digit:{
        fontSize:150,
        right:50,
        position:'absolute',
        color:'rgba(183,183,183,0.5)'
    },
    Icon:{
        width:200,
        height:200,
        top:-100,
        position:'absolute',
        right:100
    }
})