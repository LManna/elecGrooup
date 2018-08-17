/*
* 访问接口存放位置
*/
import KBRequest from './kbRequest.js';
import HttpRequest  from '@/utils/request.js'

let apiData = {
	test: '/local/mock/test.json',
	demo: '/api/openapi/BaikeLemmaCardApi??scope=103&format=json&appid=379020&bk_key=关键字&bk_length=600',
	page: '/postData/car-claim/car/answern/app/carClaimOrder/orderList',
	allList: '/local/mock/allList.json',	//充电桩列表，所有
	comment: '/local/mock/comment.json',	//充电桩；评论详情
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

function getAllList(callback){
	httpRequest.getRequest(apiData.allList, null, callback)
}

function getComment(callback){
	httpRequest.getRequest(apiData.comment, null, callback)
}

export default {
	getTest,
	getDemo,
	getPage,
	getAllList,
	getComment
}
