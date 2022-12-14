import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { useTailwind } from 'tailwind-rn'
import tw from 'tailwind-react-native-classnames'

const ButtonType = ({ children, style, onPress, disabled, loading }) => {
  const tailwind = useTailwind()

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={disabled ? null : onPress}
      style={[
        style,
        tw`h-14 max-h-14 justify-center items-center flex`,
        {
          ...style.button,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        },
      ]}
    >
      {disabled ? (
        <View
          style={[
            tw`h-14 rounded-md bg-gray-300`,
            {
              textAlign: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '100%',
            },
          ]}
        >
          {!loading && <ActivityIndicator color={Colors.white} />}
          <Text
            style={[
              tw`text-white text-base font-bold`,
              {
                ...style.text,
                textAlign: 'center',
                color: Colors.white
              },
            ]}
          >
            {children}
          </Text>
        </View>
      ) : (
        <View
          style={[
            tw`h-14 rounded-md`,
            {
              ...style.color,
              textAlign: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '100%',
            },
          ]}
        >
          {loading && <ActivityIndicator color={Colors.white} />}
          <Text
            style={[
              tw`text-white text-base font-bold`,
              { textAlign: 'center', color: Colors.white },
            ]}
          >
            {children}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

ButtonType.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
}

ButtonType.defaultProps = {
  disabled: false,
  loading: false,
}

export default ButtonType
