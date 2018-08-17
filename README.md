# bms-kb

> system of kuaibai back manage system

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



文件内容说明：
src：								//主要操作的目录
	assets:							//存放css和image
			css
				sprites				//存放雪碧图引用目录
				demo.scss           //存放公共的css样式，可继续往下写
			images
				sprites				//存放需要生成，以及已经生成的雪碧图内容
					Build       	//生成的雪碧图
					test			//需要生成雪碧图的文件夹		
				新文件夹			//存放其他图片文件，用于页面引用

	compontents:					//存放公共的组件,用于业务组件引用
	router:							//配置跳转路由
	view:							//业务组件，不同业务新建文件夹，组件要在文件夹下面，便于管理
		业务组件文件夹


注意：

本地运行需要安装node环境；
下载好项目后，进到项目根目录执行： npm install
启动项目执行：npm start

第一个访问地址是登陆页面，需要输入链接：http://localhost:8080/priCharge/login
登陆只做了用户名登陆，手机登陆是幌子，用户名，需要输入带有“admin”，密码随便就能登陆成功
登陆成功后进到列表页面，还有各种筛选
点击可以进入详情 ，
下面的菜单可以进入个人中心


