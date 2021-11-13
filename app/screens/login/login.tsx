import React, { FC, useEffect, useState } from "react"
import {
  ImageStyle, Platform, TextStyle, View, ViewStyle,
  TouchableOpacity,
  FlatList,
  TextInput,
  Text as RNText
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { useStores } from "../../models"
import { observer } from "mobx-react-lite"
import {
  Button,
  Text,
  Screen,
} from "../../components"
import { NavigatorParamList, navigate, navigateAndSimpleReset } from "../../navigators"
import { color, spacing, style as s } from "../../theme"
import { saveString, loadString } from "../../utils/storage"



export const Login: FC<StackScreenProps<NavigatorParamList, "Login">> = observer(
  () => {

    const [credentialsCorrect, setCredentialsCorrect] = useState(false)
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')

    const onLogIn = () => {
      if (login && pass) {
        saveString('login', login)
        saveString('pass', pass)
        navigateAndSimpleReset("Home")
      }
    }

    const loadCredentials = () => {
      const savedLogin = loadString('login')
      const savedPass = loadString('pass')
      console.log('savedLogin', savedLogin, savedPass)
    }

    const checkFields = () => {
      setTimeout(() => {
        if (login && pass) {
          setCredentialsCorrect(true)
        } else {
          setCredentialsCorrect(false)
        }
      }, 10)
    }

    useEffect(() => {
      loadCredentials()
    }, [])

    return (
      <Screen testID="Login" style={s.CONTAINER}>

        {/* <RNText> {JSON.stringify(photos)}</RNText> */}


        <Text style={[s.LOVE, s.mt10]} preset="header" tx="login.login" />
        <View
          style={[
            s.row,
            s.rowHCenter,
            s.mb10
          ]}
        >
          <TextInput
            onChangeText={(txt) => {
              setLogin(txt)
              checkFields()
            }}
            value={login}
            selectTextOnFocus
            style={[s.tinput, s.fill, s.ph10]}
          />
        </View>

        <Text style={[s.LOVE, s.mt10]} preset="header" tx="login.password" />
        <View
          style={[
            s.row,
            s.rowHCenter,
            s.mb10
          ]}
        >
          <TextInput
            onChangeText={(txt) => {
              setPass(txt)
              checkFields()
            }}
            value={pass}
            selectTextOnFocus
            style={[s.tinput, s.fill, s.ph10]}
          />
        </View>

        <Button
          style={[
            s.DISABLING,
            credentialsCorrect ? s.cPurple : s.cGrey
          ]}
          textStyle={s.DEMO_TEXT}
          tx="login.loginBtn"
          onPress={onLogIn}
        />


      </Screen>
    )
  },
)
