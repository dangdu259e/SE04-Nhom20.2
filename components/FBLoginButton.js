import React, { Component } from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import {COLOR_LIGHT_RED} from './myColor';

export default class FBLoginButton extends Component {
    render() {
        return (
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <LoginButton style={styles.login}
                    publishPermissions={["email"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + error.message);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                alert("Login was successful with permissions: " + result.grantedPermissions)
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")}/>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    login:{
        width: 300,
        // height: 45,
        fontSize: 20,
        padding: 20,
        borderRadius:60,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
});
module.exports = FBLoginButton;
