/*
* 访问接口存放位置
*/
import KBRequest from './kbRequest.js';
import HttpRequest  from '@/utils/request.js'

let apiData = {
	test: '/local/mock/test.json',
	demo: '/api/openapi/BaikeLemmaCardApi??scope=103&format=json&appid=379020&bk_key=关键字&bk_length=600',
	page: '/postData/car-claim/car/answern/app/carClaimOrder/orderList'
}

//http是重写过的规则；
//原始规则在httpRequest中
let http = new KBRequest()
let httpRequest = new HttpRequest()

function getTest(callback) {
  httpRequest.getRequest(apiData.test, null, callback)
}

function getDemo(callback){
	httpRequest.getRequest(apiData.demo, null, callback)
}

function getPage(params, callback){
	debugger;
	httpRequest.postRequest(apiData.page, params, callback)
}

export default {
	getTest,
	getDemo,
	getPage
}
