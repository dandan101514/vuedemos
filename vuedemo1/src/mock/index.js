import Vue from 'vue'
import Mock from 'mockjs'

Vue.use(Mock)

export default function () {
    Mock.mock('/user/people', 'post', function(){
        return{
            code:"000",
            data:[
                {name:"张三",sex:"女",age:"23",tel:"12565478545"},
                {name:"李四",sex:"男",age:"28",tel:"14587562565"},
                {name:"王五",sex:"女",age:"24",tel:"15436963255"}
            ],
            msg:""
        }
    })
}