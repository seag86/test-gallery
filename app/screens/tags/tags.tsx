import React, { FC, useEffect, useState } from "react"
import {
  ImageStyle, Platform, TextStyle, View, ViewStyle,
  TouchableOpacity,
  ScrollView,
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
import { PhotoStoreModel } from "../../models/photo-store/photo-store"


const CONTAINER: ViewStyle = {
  flex: 1,
  marginTop: spacing[4],
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  flexDirection: 'row',
  flexWrap: 'wrap'
}

const SCROLL: ViewStyle = {
  flex: 1,
  marginTop: spacing[4],
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  flexDirection: 'row',
  flexWrap: 'wrap'
}


const BOLD: TextStyle = { fontWeight: "bold" }


export const Tags: FC<StackScreenProps<NavigatorParamList, "Tags">> = observer(
  ({ navigation, route }) => {
    const goBack = () => navigation.goBack()

    const [tags, setTags] = useState([])


    const { photoStore } = useStores()
    const { photos } = photoStore

    const fetchMany = async () => {
      const page = 0
      const limit = 30
      await photoStore.getPhotos(page, limit)
    }

    const tagPressHandle = async (tag) => {
      //navigate('Home', { tag: tag })
      await photoStore.savePhotos(tag.photos)
      console.log('photos', photos)
    }

    useEffect(() => {
      fetchMany()
    }, [])

    useEffect(() => {
      photos?.length && sortAuthors(photos)
    }, [photos])

    const sortAuthors = (d: Array<any>) => {
      const authors = d.reduce((acc, element) => {
        const [key, Name] = Object.entries(element)[1];
        (acc[Name] || (acc[Name] = [])).push(element);
        return acc;
      }, {});

      const _tags: Array<any> = []
      for (const author in authors) {
        _tags.push({
          author: author,
          photos: authors[author]
        })
      }
      setTags(_tags)
    }



    return (
      <Screen testID="Tags" style={CONTAINER} isNonScrolling={false}>

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

      </Screen>
    )
  },
)
