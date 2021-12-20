import React, {useState} from 'react';
import { Text, TextInput, TouchableOpacity, View} from "react-native";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Styles from "../../styles/styles"
import Logo from '../../assets/themoviedb_logo.svg'
import {user, userDetails} from '../../services/user.json'
import UseAuth from '../../hooks/UseAuth'

const LoginForm = () => {

    const [error, setError] = useState('')
    const { signIn } = UseAuth()

    const formValidated = useFormik({
        initialValues: initialValues(),
        validateOnChange: false,
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (values) => {
            setError('')
            const { username, password } = values;
            if (username !== user.username || password !== user.password) {
                setError('Invalid username or password')
            } else {
                signIn(userDetails)
            }
        },
    })

    return (
        <View style={Styles.containerCenter}>
            <View>
                <View style={Styles.logoImage}>
                    <Logo width={220} height={95}/>
                </View>
                <View>
                    <Text style={Styles.sectionSubtitle}>Login to your Account</Text>
                    {error !== ''
                        ? <Text style={Styles.error}>{error}</Text>
                        : null
                    }
                    <View>
                        {formValidated.errors.username &&
                        <Text style={Styles.error}>{formValidated.errors.username}</Text>}
                        <TextInput
                            placeholder="Username"
                            style={Styles.input}
                            autoCapitalize="none"
                            value={formValidated.values.username}
                            onChangeText={(text => formValidated.setFieldValue('username', text))}
                        />
                    </View>
                    <View>
                        {formValidated.errors.password &&
                        <Text style={Styles.error}>{formValidated.errors.password}</Text>}
                        <TextInput
                            placeholder="Password"
                            style={Styles.input}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            value={formValidated.values.password}
                            onChangeText={(text => formValidated.setFieldValue('password', text))}
                        />
                    </View>
                    <TouchableOpacity
                        style={Styles.button}
                        title="Sign In"
                        onPress={formValidated.handleSubmit}>
                        <Text style={Styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

function initialValues() {
    return {
        username: '',
        password: ''
    }
}

function validationSchema() {
    return {
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    }
}

export default LoginForm;