const state = {
    tabs: [
        {url:'/vocabulary',color:'blue',name:'All vocabularies'},
        {url:'/subject',color:'grey',name:'Subject'},
        {url:'/vocabulary/deleted',color:'red',name:'Deleted vocabularies'},
        {url:'/vocabulary/done',color:'green',name:'Done vocabularies'}
    ],
    currentTab:0,
}


const mutations = {
    changeTab(state, tabIndex) {

        if(isNaN(tabIndex)) return state.currentTab = state.tabs.indexOf(state.tabs.find((tab,index) => tab.url == tabIndex  ))
        else return state.currentTab = tabIndex ;

        
    }
}

const getters = {

    getCurrentTab(state) {
        var tab = state.tabs[state.currentTab];        
        return (!!tab) ? tab : false
    },
    getAllTabs(state) {
        return state;
    }

}


export default {
    namespaced: true,
    state,
    getters,
    mutations
}