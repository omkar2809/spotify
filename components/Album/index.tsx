import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import  { AlbumType } from '../../types'


export type AlbumProps = {
    album: AlbumType
}

const Album = (props: AlbumProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.album.imageUri }} style={styles.image} />
            <Text style={styles.text}>{props.album.artistsHeadline}</Text>
        </View>
    )
}

export default Album

