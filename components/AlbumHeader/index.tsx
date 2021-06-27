import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AlbumType } from '../../types'
import styles from './styles'

export type AlbumHeaderProps = {
    album: AlbumType
}

const AlbumHeader = (props: { album: any }) => {
    const { album } = props
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: album.imageUri }}
                style={styles.image}
            />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader