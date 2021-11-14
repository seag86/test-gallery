import React, { FC, useEffect, useState } from "react"
import {
  View, 
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
import { NavigatorParamList, navigateAndSimpleReset } from "../../navigators"
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

    const checkFields = () => {
      setTimeout(() => {
        if (login && pass) {
          setCredentialsCorrect(true)
          fetchStart()
        } else {
          setCredentialsCorrect(false)
        }
      }, 10)
    }

    const { photoStore } = useStores()

    const fetchStart = async () => {
      //const page = Math.round(Math.random() * 10)
      const page = 3
      const limit = 20
      await photoStore.getPhotos(page, limit)
    }

    const loadCredentials = () => {
      const savedLogin = loadString('login')
      const savedPass = loadString('pass')
    }

    useEffect(() => {
      loadCredentials()
    }, [])

    return (
      <Screen style={s.CONTAINER}>

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
            style={[s.vinput, s.fill, s.ph10]}
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
            style={[s.vinput, s.fill, s.ph10]}
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
