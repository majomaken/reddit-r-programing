import React from 'react';
import { WebView } from 'react-native-webview';

export default function Post(props) {
    const {
        navigation,
        route: { params }
    } = props;
    return (
        <WebView
            source={{ uri: params.url }}
            style={{ marginTop: 20 }}
        />
    );
}
