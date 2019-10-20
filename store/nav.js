// States
export const state = () =>({
    
    toggleSidebar: false,
    toggleDevLinks: false
    
})

// mutations
export const mutations = {

    TOGGLE_SIDEBAR(state) {
        state.toggleSidebar = !state.toggleSidebar
    },

    TOGGLE_DEVLINKS(state) {
        state.toggleDevLinks = !state.toggleDevLinks
    }

}

// actions
export const actions = {

    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },

    toggleDevLinks({ commit }) {
        commit('TOGGLE_DEVLINKS');
        // console.log('boop');
    }

}

// Getters
export const getters = {

    toggleSidebar: state => state.toggleSidebar,
    toggleDevLinks: state => state.toggleDevLinks

}