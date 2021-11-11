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
import { NavigatorParamList } from "../../navigators"
import { color, spacing, style as s } from "../../theme"
import { Api } from "../../services/api"
import { save } from "../../utils/storage"
//export const logoIgnite = require("./logo-ignite.png")
//export const heart = require("./heart.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const BOLD: TextStyle = { fontWeight: "bold" }


export const Home: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
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
      await photoStore.getPhotos()
    }

    useEffect(() => {
      fetchStart()
    }, [])

    const renderItem = (photoObj: Object) => {
      const { id, download_url } = photoObj.item
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={[s.previewBtn, s.center, s.mb15]}
          //onPress={() => navigate('Details', { id: id.toString() })}
        >
          <Image
            style={[s.previewImg]}
            source={{ uri: download_url }}
          />
        </TouchableOpacity>
      )
    }



    return (
      <View testID="Home" style={FULL}>
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>

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


        </Screen>
      </View>
    )
  },
)
