// import { View, StatusBar, SafeAreaView, Platform, StyleSheet } from 'react-native';
// import { getStatusBarHeight } from 'react-native-status-bar-height';

// const Container = ({ children } : { children: any }) => {
//     if (Platform.OS === "ios") {
//         return <View style={containerStyles.container}>{children}</View>;
//     } else {
//         return <SafeAreaView style={containerStyles.container}>{children}</SafeAreaView>;
//     }
// }

// const Screen = ({ children }: { children: any }) => {
//     return (
//         <View style={{ flex: 1, backgroundColor: '#FFF' }}>
//             <Container>
//                 <StatusBar barStyle='dark-content' translucent />
//                 {children}
//             </Container>
//         </View>
//     );
// }

// export default Screen;

// const containerStyles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight,
//         backgroundColor: '#FFF'
//     }
// });