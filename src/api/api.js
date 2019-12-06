import axios from 'axios';


export let login=(params)=>axios.post('/api/user/login',params)

export let registry=(params)=>axios.post('/api/user/registry',params)

export let banner=()=>axios.get('/api/home/banner')

export let homescroll=(params)=>axios.get('/api/home/shop',{params:params})