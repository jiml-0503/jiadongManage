import { getToken, setToken} from '@/utils/auth'

const getDefaultState = () => {
    return {
        token: getToken(),
        name: ''
    }
}

const state = getDefaultState()

const mutations = {
    SET_TOKEN: (state,token) => {
        state.token = token
    },
    SET_NAME: (state,name) => {
        state.name = name
    },
    changeLogin (state, user) {
        state.token = user.Authorization;
        state.name = user.username;
        setToken(state.token)
    }
}

const actions = {
    
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}