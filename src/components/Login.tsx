import { useEffect, useReducer } from 'react';

interface AuthState {
    validando: boolean;
    token: null | string;
    userName: string;
    name: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    userName: '',
    name: ''
};

type LoginPayload = {
    userName: string;
    name: string;
}

type AuthAction =
    | { type: 'login', payload: LoginPayload }
    | { type: 'logout'; };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case "login":
            return {
                ...state,
                token: new Date().getTime.toString(),
                validando: false,
                userName: action.payload.userName,
                name: action.payload.name
            };
        case "logout":
            return {
                validando: false,
                token: null,
                userName: '',
                name: ''
            };
        default:
            return state;
    }
}

export const Login = () => {

    const [{ validando, token, userName }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, [])

    const login = (): void => {
        dispatch({
            type: 'login',
            payload: {
                userName: 'gmontiel',
                name: ' German'
            }
        });
    }

    const logout = (): void => {
        dispatch({ type: 'logout' });
    }

    if (validando) {
        return (
            <>
                <h3>Login</h3>

                <div className='alert alert-info'>
                    Validando..
                </div>
            </>
        )
    }


    return (
        <>
            {
                (token)
                    ?
                    (
                        <div className='alert alert-success'>
                            Autenticado como: {userName}
                        </div>
                    )
                    :
                    (
                        <div className='alert alert-danger'>
                            No autenticado..
                        </div>
                    )
            }
            {
                (!token)
                    ?
                    (
                        <button
                            className="btn btn-primary mx-2"
                            onClick={login}>
                            Login
                        </button>
                    )
                    :
                    (
                        <button
                            className="btn btn-danger"
                            onClick={logout}>
                            Logout
                        </button>
                    )
            }

        </>
    )
}
