export const add=(state)=>{
    state.count++;
}
export function changeBanner(state,options) {
    state.bannerList = options;
}
export function changeList(state,options) {
    state.listData = options;
    state.isGetList=true
}

export function  removeList(state,options) {
    state.listData = state.listData.filter(item=>{
        return item.bookId != options.bookId
    })
}
export function addList(state,options) {
    state.listData.unshift(options)
}
export function addCollect(state,options) {
    let bol =state.collectData.some(item=>{
        return item.bookId = options.bookId
    })
        if(bol)return;

    state.collectData.unshift(options)
}

export function removeCollect(state,options) {
    state.collectData = state.collectData.filter(item=>item.bookId!=options.bookId)
}













