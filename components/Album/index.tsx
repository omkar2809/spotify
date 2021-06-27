import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import  { AlbumType } from '../../types'
import { useNavigation } from '@react-navigation/core'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


export type AlbumProps = {
    album: AlbumType
}

const Album = (props: AlbumProps) => {

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('AlbumScreen', { id: props.album.id })
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.image} />
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Album

