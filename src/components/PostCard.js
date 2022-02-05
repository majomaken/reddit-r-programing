import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function PostCard(props) {
    const { post } = props;
    const navigation = useNavigation();

    const goToPost = () => {
        navigation.navigate("Post", { url: post.url });
    }

    return (
        <TouchableWithoutFeedback onPress={goToPost}>
            <View style={styles.spacing}>
                <View style={styles.card}>
                    <Image source={{ uri: post.post_image }} style={styles.image} />
                    <Text style={styles.date}>{post.date_created} ago</Text>
                    <View style={styles.info}>
                        <Text style={styles.title}>{post.title}</Text>
                        <View style={styles.infoDetails}>
                            <Text style={styles.textElementsInfo}>{post.author_name}</Text>
                            <Text style={styles.textElementsInfo}>Score: {post.score}</Text>
                            <Text style={styles.textElementsInfo}>Comments: {post.num_comments}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    spacing: {
        flex: 1
    },
    card: {
        flex: 1,
        height: 100,
        position: "relative",
        flexDirection: "row"
    },
    date: {
        position: "absolute",
        right: 10,
        fontSize: 11,
    },
    title: {
        color: "#000",
        fontWeight: "bold"
    },
    image: {
        position: "relative",
        width: 90,
        height: 90,
        justifyContent: 'flex-start'
    },
    info: {
        flex: 1,
        justifyContent: 'flex-end',
        position: "relative",
        paddingStart: 10,
        paddingBottom: 10,
    },
    infoDetails: {
        justifyContent: 'space-between',
        flexDirection: "row",
        paddingTop: 5,
    },
    textElementsInfo: {
        fontSize: 11,
    }
});