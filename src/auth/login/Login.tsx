import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as React from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { loginStyles } from "../../style";
import { imagesLogin } from "../../../assets/constants/constants"; 

const TextInputCustom = ({ index, ...otherProps }) => {
    return (
        <View style={loginStyles.inputCustom}>
            <Image source={imagesLogin[index]['uri']} style={loginStyles.iconLeft}></Image>
            <TextInput
                style={loginStyles.input}
                {...otherProps}
            ></TextInput>
        </View>
    )
}

const Dialog = (props) => {
    const {
        info,
        setChecked,
        onChangeInfo,
        submit
    } = props;

    return (
        <View style={loginStyles.dialog_wrapper}>
            <View style={loginStyles.dialog}>
                <View>
                    <Text style={loginStyles.label}>Account</Text>
                    <TextInputCustom
                        index={'email'}
                        value={info.account}
                        onChangeText={(value: string) => {
                            onChangeInfo({
                                ...info,
                                account: value
                            })
                        }}
                    ></TextInputCustom>
                </View>

                <View>
                    <Text style={loginStyles.label}>Password</Text>
                    <TextInputCustom
                        index={'password'}
                        secureTextEntry={true}
                        value={info.pasword}
                        onChangeText={(value: string) => {
                            onChangeInfo({
                                ...info,
                                password: value
                            })
                        }}
                    ></TextInputCustom>
                </View>

                <View style={loginStyles.row}>
                    <View style={loginStyles.row}>
                        <BouncyCheckbox
                            size={20}
                            fillColor="mediumturquoise"
                            onPress={(isChecked: boolean) => {
                                setChecked(isChecked)
                            }} />
                        <TouchableOpacity>
                            <Text style={loginStyles.forgot_button}>Remember me</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={loginStyles.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={loginStyles.loginBtn}
                    onPress={() => {
                        submit()
                    }}
                >
                    <Text style={loginStyles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Login = ({ navigation }) => {
    const [isChecked, setChecked] = React.useState(false);
    const [info, onChangeInfo] = React.useState({
        account: '',
        password: ''
    });

    const handleSubmit = () => {
        if(info.account === 'a' && info.password === '1') {
            navigation.navigate('Todo')
        } else {
            console.log('====================================');
            console.log('Validate here...');
            console.log('====================================');
        }
    }

    return (
        <SafeAreaView style={loginStyles.container}>
            <Image style={loginStyles.banner} resizeMode={"cover"} source={require('../../../assets/images/beach.jpg')}></Image>
            <Text style={loginStyles.copy_right}>@Copyright2022 By Me</Text>
            <Dialog
                info={info}
                onChangeInfo={onChangeInfo}
                setChecked={setChecked}
                submit={handleSubmit}
            ></Dialog>
        </SafeAreaView>
    )
}

export default Login;