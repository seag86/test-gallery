import React, { FC, useEffect } from "react"
import { ImageStyle, Platform, TextStyle, View, ViewStyle, Text as RNText } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { useStores } from "../../models"
import { observer } from "mobx-react-lite"
import {
  BulletItem,
  Button,
  Header,
  Text,
  Screen,
  AutoImage as Image,
  GradientBackground,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing } from "../../theme"
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



    return (
      <View testID="Home" style={FULL}>
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>

          {/* <RNText> {JSON.stringify(characters)}</RNText> */}
          <RNText> {JSON.stringify(photoStore)}</RNText>



        </Screen>
      </View>
    )
  },
)
