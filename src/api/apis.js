import axios from "axios"
import qs from "qs"

var req = axios.create({
    baseURL:"http://192.168.101.2:80",
    timeout:10000
})

export function gethouselist(){
    return req.get("/gethouselist.php")
}


export function login(acc,pwd){
    return req.post("/login.php",qs.stringify({acc,pwd}))
}
