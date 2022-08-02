import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Platform,
  AlertIOS,
  StyleSheet,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand, ToastCustom, Button } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import _getUser from '@/Store/Users/_getUser'
import { showInfoToast, showSucessToast } from '@/Components/Toast'
import { Colors } from '@/Theme/Variables'

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  // const [userId, setUserId] = useState('9')
  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyFetchOneQuery()
  // const _uidata = useSelector(state => state.Users.item)
  // const _loading = useSelector(state => state.Users._getUser.loading)
  // const _error = useSelector(state => state.Users._getUser.error)
  // const _init_get_user = () => {
  //   dispatch(
  //     _getUser.action({
  //       id: userId,
  //     }),
  //   )
  // }
  // useEffect(() => {
  //   fetchOne(userId)
  //   _init_get_user()
  // }, [fetchOne, userId])

  // const onChangeTheme = ({ theme, darkMode }) => {
  //   dispatch(changeTheme({ theme, darkMode }))
  // }

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding
        ]}
      >
        <Text style={Fonts.titleSmall} >{t('loginTitle')}</Text>
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding
        ]}
      >
        <Text style={[Fonts.textSmall, Fonts.textCenter]} >{t('loginSmallTitle')}</Text>
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding
        ]}
      >
        <Button
          style={styles}
        >{t('loginButton')}</Button>
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding
        ]}
      >
        <Button
          style={styles}
        >{t('signinButton')}</Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  color: {
    backgroundColor: Colors.primary
  }
})
export default ExampleContainer
