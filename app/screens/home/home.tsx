import React, { FC, useEffect } from "react"
import {
  ImageStyle, Platform, TextStyle, View, ViewStyle,
  TouchableOpacity,
  FlatList,
  Text as RNText
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { useStores } from "../../models"
import { observer } from "mobx-react-lite"
import {
  BulletItem,
  Button,
  Header,
  Text,
  Screen,
  Searchbox,
  AutoImage as Image,
  GradientBackground,
} from "../../components"
import { NavigatorParamList, navigate } from "../../navigators"
import { color, spacing, style as s } from "../../theme"
import { Api } from "../../services/api"
import { save } from "../../utils/storage"


const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const BOLD: TextStyle = { fontWeight: "bold" }


export const Home: FC<StackScreenProps<NavigatorParamList, "Home">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack()

    // const { characterStore } = useStores()
    // const { characters } = characterStore

    // const fetchStart = async () => {
    //   await characterStore.getCharacters()
    // }

    const { photoStore } = useStores()
    const { photos } = photoStore

    const fetchStart = async () => {
      let page = Math.round(Math.random() * 10)
      // page = 0
      await photoStore.getPhotos(page)
    }

    useEffect(() => {
      fetchStart()
    }, [])

    const renderItem = (photo: Object) => {
      const { id, download_url } = photo.item

      return (
        <TouchableOpacity
          activeOpacity={1}
          style={[s.previewBtn, s.center, s.mb15]}
          
          onPress={() => navigate('Details', { photo: photo.item })}
        >
          <Image
            style={[s.previewImg]}
            source={{ uri: download_url }}
          />
        </TouchableOpacity>
      )
    }



    return (
      <View testID="Home" style={CONTAINER}>

          {/* <RNText> {JSON.stringify(characters)}</RNText> */}
          {/* <RNText> {JSON.stringify(photos)}</RNText> */}

          <Searchbox />

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
