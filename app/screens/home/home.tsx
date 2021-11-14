import React, { FC, useState, useEffect } from "react"
import {
  View,
  TouchableOpacity,
  FlatList,
  Text as RNText
} from "react-native"
import FastImage from 'react-native-fast-image'
import { StackScreenProps } from "@react-navigation/stack"
import { useStores } from "../../models"
import { PhotoModel } from "../../models/photo/photo"
import { observer } from "mobx-react-lite"
import {
  Searchbox,
} from "../../components"
import { NavigatorParamList, navigate } from "../../navigators"
import { color, spacing, style as s } from "../../theme"


export const Home: FC<StackScreenProps<NavigatorParamList, "Home">> = observer(
  ({ navigation, route }) => {
    const goBack = () => navigation.goBack()


    const { photoStore } = useStores()
    const { photos } = photoStore

    const fetchStart = async () => {
      //const page = Math.round(Math.random() * 10)
      const page = 3
      const limit = 20
      await photoStore.getPhotos(page, limit)
    }


    useEffect(() => {
      fetchStart()
    }, [])

    const renderItem = (photo:  typeof PhotoModel) => {
      const { id, download_url } = photo?.item

      return (
        <TouchableOpacity
          activeOpacity={1}
          style={[s.previewBtn, s.center, s.mb15]}

          onPress={() => navigate('Details', { photo: photo?.item })}
        >
          <FastImage
            style={[s.previewImg]}
            source={{
              uri: download_url,
              //headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
      )
    }



    return (
      <View testID="Home" style={s.CONTAINER}>

        {/* <RNText> {JSON.stringify(photos)}</RNText> */}

        <Searchbox tag={route.params?.tag} />

        <View style={[s.fill]}>
          <View>
            <FlatList
              data={photos}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            //ListFooterComponent={footerItem}
            />
          </View>
        </View>


      </View>
    )
  },
)
