import React, { FC, useEffect, useState } from "react"
import {
  ImageStyle, Platform, TextStyle, View, ViewStyle,
  TouchableOpacity,
  ScrollView,
  Text as RNText,
  Dimensions
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
import { PhotoStoreModel } from "../../models/photo-store/photo-store"
import { async } from "validate.js"

const { width, height } = Dimensions.get('window')

const CONTAINER: ViewStyle = {
  flex: 1,
  marginTop: spacing[4],
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  flexDirection: 'row',
  flexWrap: 'wrap'
}

const SCROLL: ViewStyle = {
  width: width,
  height: height,
}
const CONTENT: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
}


const BOLD: TextStyle = { fontWeight: "bold" }


export const Tags: FC<StackScreenProps<NavigatorParamList, "Tags">> = observer(
  ({ navigation, route }) => {

    const [tags, setTags] = useState([])

    const { photoStore } = useStores()

    const fetchMany = async () => {
      const page = 0
      const limit = 30
      const tags_ = await photoStore.getTags(page, limit)
      setTags(tags_)
    }

    const tagPressHandle = async (tag: any) => {
      await photoStore.savePhotos(tag.photos)
      navigate('Home', {tag: tag.author})
    }

    useEffect(() => {
      fetchMany()
    }, [])

 

    return (
      <Screen testID="Tags" style={CONTAINER} isNonScrolling={false}>

        <ScrollView style={SCROLL}
          contentContainerStyle={CONTENT}
        >
          {/* <RNText> {JSON.stringify(tags)}</RNText> */}

          {
            tags.length
              ?
              tags.map((tag, index) => {
                return (
                  <View style={[s.row, s.smallBMargin]} key={index}>
                    <TouchableOpacity style={[s.tag, s.mr5, s.mb10]}
                      onPress={() => tagPressHandle(tag)}
                    >
                      <RNText style={[]}>
                        {tag?.author}
                      </RNText>
                    </TouchableOpacity>
                    <View />
                  </View>
                )
              })

              : <RNText style={[]}>{'Loading...'}</RNText>
          }
        </ScrollView>
      </Screen>
    )
  },
)
