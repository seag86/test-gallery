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


const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const BOLD: TextStyle = { fontWeight: "bold" }


export const Details: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack()



    return (
      <View testID="Details" style={CONTAINER}>

          {/* <RNText> {JSON.stringify(characters)}</RNText> */}



      </View>
    )
  },
)
