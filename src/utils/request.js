const axios = require('axios');
let HttpRequest = function (){}
HttpRequest.prototype.postRequest = function(url,data,callback){
  this.httpHandle(url,data,callback,'post')
}

HttpRequest.prototype.getRequest = function(url,data,callback){
  this.httpHandle(url,data,callback,'get')
}

//中间件处理
HttpRequest.prototype.callbackHandle = function(isSuccess,res,error,callback){
  callback(isSuccess,res,error)
}

HttpRequest.prototype.httpHandle = function(url,data,callback,type){
  this.http(url,data,(isSuccess,data,error)=>{
    this.callbackHandle(isSuccess,data,error,callback)
  },type)
}

HttpRequest.prototype.http = function(url,params,callback,type){
  console.log('http:',url,params)
  axios({ method: type, url: url, data: params })
    .then(res=>{
      console.log('http-callback',url,res)
      if(callback) callback(true,res.data)
    }).catch(err=>{
      console.log('http-post-callback error',url,err)
      if(callback) callback(false,null,{errorNo:-1,errorMsg:err.message})
    })
}

export default HttpRequest