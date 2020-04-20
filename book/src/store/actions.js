
import axios from 'axios'

export const  addFn= ({commit},options)=>{
  setTimeout(()=>{
    commit('add',options)
  },1000)
};
export const getBanner = ({commit})=>{

    axios.get('/api/bannerList').then((data)=>{
        console.log(data);
        commit('changeBanner',data.data)
    })
}
export const getHomeList = ()=>{
    return axios.get('/api/homeList')
}
export const getListData = ({commit})=>{
    axios.get('/api/listData').then((data)=>{
        commit('getListData',data.data)
    })
}

