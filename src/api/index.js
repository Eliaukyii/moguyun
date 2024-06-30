import service from '../utils/request.js'
// 登录接口
export function login(data){
    return service({
        method:'post',
        url:'/door/v1/clue/add',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        data
    })
}