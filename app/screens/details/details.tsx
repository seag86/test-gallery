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


const CONTAINER: ViewStyle = {
  flex: 1,
  marginTop: spacing[4],
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const LOVE: TextStyle = {
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
}

const BOLD: TextStyle = { fontWeight: "bold" }


export const Details: FC<StackScreenProps<NavigatorParamList, "Details">> = observer(
  ({ navigation, route }) => {
    const goBack = () => navigation.goBack()
    const { download_url, author, id, width, height } = route.params.photo



    return (
      <Screen testID="Details" style={CONTAINER}>

        {/* <RNText> {JSON.stringify(route.params)}</RNText> */}

        <TouchableOpacity
          activeOpacity={1}
          style={[s.previewBtn, s.center, s.mb15]}
          onPress={() => navigate('Viewer', { photo: route.params.photo })}
        >
          <Image
            style={[s.previewImg]}
            source={{ uri: download_url }}
          />
        </TouchableOpacity>

        {/* details */}
        <View style={[s.row]}>
          <TouchableOpacity style={[s.detailTeg, s.smallHMargin,]}
            onPress={() => navigate('Tags', { author: author })}
          >
            <RNText style={[]}>
              <Text style={LOVE} tx="details.author" />
              {author}
            </RNText>
          </TouchableOpacity>
          <View />
        </View>

        <View style={[s.smallHPadding]}>
          <RNText style={[]}>
            <Text style={LOVE} tx="details.size" />
            {width + 'x' + height}
          </RNText>
        </View>


      </Screen>
    )
  },
)
