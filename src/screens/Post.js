import React from 'react';
import { WebView } from 'react-native-webview';

export default function Post(props) {
    const {
        navigation,
        route: { params }
    } = props;
    return (
        <WebView
            onLoadStart={() => navigation.setOptions({ title: params.postTitle })}
            source={{ uri: params.url }}
            style={{ marginTop: 20 }}
        />
    );
}
