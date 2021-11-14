import React, { useState, useEffect } from 'react'
import { View, Image, TouchableOpacity, TextInput } from 'react-native'
import { style as s } from "../../theme"
import { NavigatorParamList, navigate } from "../../navigators"
import { useStores } from "../../models"

export function Searchbox(props) {

  const [searchText, setSearchText] = useState(props.tag)
  const { photoStore } = useStores()

  const fetchStart = async () => {
    const page = 3
    const limit = 20
    await photoStore.getPhotos(page, limit)
  }

  const onSearch = () => {
    navigate('Tags')
  }
  const onClearFilter = () => {
    setSearchText('')
    fetchStart()
  }

  useEffect(() => {
    //setSearchText(props.tag)
    console.log('tag', props.tag)
  }, [])


  return (
    <View
      style={[
        s.row,
        s.rowHCenter,
        s.mt10,
        s.mb10,
      ]}
    >
      <View
        style={[
          s.row,
          s.rowHCenter,
          s.vinput,
        ]}
      >
        <TextInput
          onChangeText={(txt) => setSearchText(txt)}
          value={searchText}
          selectTextOnFocus
          style={[s.tinput, s.ph10]}
        />
        {
          searchText != '' && <TouchableOpacity
            style={[s.close, s.center]}
            onPress={onClearFilter}
          >
            <Image
              style={[s.searchImg]}
              source={require('../../../assets/images/close.png')}
            />
          </TouchableOpacity>
        }
      </View>
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


