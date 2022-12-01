import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonComp = ({
    text="DONE",
    onPress =()=>{},
    disabled=false
}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    disabled={disabled}
    style={{
        ...styles.container,
        backgroundColor: disabled ? "grey" :'pink',
        }}>
      <Text style={styles.textStyle}>{text} </Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    container:{
        height:42,
        backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:16,
        color:'white'
    }
})