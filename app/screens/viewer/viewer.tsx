import React, { FC, useEffect } from "react"
import {
  ImageStyle, Platform, TextStyle, View, ViewStyle,
  Text as RNText,
  Dimensions
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { useStores } from "../../models"
import { observer } from "mobx-react-lite"
import PhotoView from 'react-native-photo-view';

import { NavigatorParamList } from "../../navigators"
import { color, spacing, style as s } from "../../theme"

const { width, height } = Dimensions.get('window')


const CONTAINER: ViewStyle = {
  flex: 1,
}



export const Viewer: FC<StackScreenProps<NavigatorParamList, "Viewer">> = observer(
  ({ navigation, route }) => {
    const goBack = () => navigation.goBack()


    return (
      <View testID="Viewer" style={CONTAINER}>
        {/* <RNText> {JSON.stringify(route.params.photo)}</RNText> */}
        <PhotoView
          source={{ uri: route.params.photo.download_url }}
          minimumZoomScale={1}
          maximumZoomScale={5}
          androidScaleType={"centerInside"}
          //onLoad={() => console.log("Image loaded!")}
          style={{
             width: width,
             height: height,
            backgroundColor: '#555'
          }} />
      </View>
    )
  },
)
