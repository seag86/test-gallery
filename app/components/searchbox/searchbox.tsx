import React from 'react'
import { View, Image, TouchableOpacity, TextInput } from 'react-native'
import { style as s } from "../../theme"
import { NavigatorParamList, navigate } from "../../navigators"


export function Searchbox() {

  const onSearch = () => {
    navigate('Login')
  }
  
  return (
    <View
      style={[
        s.row,
        s.rowHCenter,
        s.mt10,
        s.mb10
      ]}
    >
      <TextInput
        //editable={!status}
        //onChangeText={setUserId}
        //value={userId}
        selectTextOnFocus
        style={[s.tinput, s.fill, s.ph10]}
      />
      <TouchableOpacity
        style={[s.btn, s.center]}
        onPress={onSearch}
      >
        <Image
          style={[s.searchImg]}
          source={require('./search.png')}
        />
      </TouchableOpacity>
    </View>
  )
}


