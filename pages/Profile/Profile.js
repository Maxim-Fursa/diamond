import React from 'react'
import Login from './Login/Login'
import Access from './Access/Access'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext();

export default function Profile() {

    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
                return {
                  ...prevState,
                  userToken: action.token,
                  isLoading: false,
                };
            case 'SIGN_IN':
                return {
                    ...prevState,
                    isSignout: false,
                    userToken: action.token,
                };
            case 'SIGN_OUT':
                return {
                    ...prevState,
                    isSignout: true,
                    userToken: null,
                };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
        }
    );

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;
            try {
                userToken = await AsyncStorage.getItem('@key');
            } catch (e) {
                console.log(e)
            }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };
    
        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(() => ({
        signIn: async (data) => {   
            await AsyncStorage.setItem('@key', data);
            dispatch({ type: 'SIGN_IN', token: data });
        },
        signOut: () => dispatch({ type: 'SIGN_OUT' })
    }), []);
    
    const Stack = createNativeStackNavigator()

    return (
        <AuthContext.Provider value={authContext}>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
                {state.userToken === null ? (
                    <Stack.Screen name="Profile_Login">
                        {props => <Login {...props} context={AuthContext}/>}
                    </Stack.Screen>  
                ) : (
                    <Stack.Screen name="Profile_Access">
                        {props=> <Access {...props} context={AuthContext}/>}
                    </Stack.Screen>
                )}
            </Stack.Navigator>
        </AuthContext.Provider>
    )
}
