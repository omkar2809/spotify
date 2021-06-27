import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import albumDetails from '../assets/data/albumDetails'
import AlbumHeader from '../components/AlbumHeader'
import SongListItems from '../components/SongListItems'

const AlbumScreen = () => {

    const route = useRoute()

    useEffect(() => {
        console.log(route)
    }, [])

    return (
        <View>
            <FlatList 
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListItems song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
            />
        </View>
    )
}

export default AlbumScreen

const styles = StyleSheet.create({

})
