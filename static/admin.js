// admin
layui.config({
	base: '../static/lay/modules/'
}).extend({
	formSelects: 'formSelects'
})
layui.use(['jquery', 'layer', 'element', 'form', 'laydate', 'table', 'laypage', 'formSelects'], function(){
	let $ = layui.$,
		layer = layui.layer,
		element = layui.element,
		form = layui.form,
		laydate = layui.laydate,
		table = layui.table,
		laypage = layui.laypage,
		formSelects = layui.formSelects,
		activeFun = {
			// 审核弹框内容
			examineHtm: function () {
				let htm = '<div class="layui-form">'+
						'<div class="layui-form-item dialog_margin_bottom">'+
						'<label class="layui-form-label dialog_label_width">订单ID:</label>'+
						'<div class="layui-form-mid">'+
						'23456'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item dialog_margin_bottom">'+
						'<div class="layui-inline width_50">'+
						'<label class="layui-form-label dialog_label_width">用户ID:</label>'+
						'<div class="layui-form-mid">'+
						'23456 '+
						'</div>'+
						'</div>'+
						'<div class="layui-inline width_50">'+
						'<label class="layui-form-label dialog_label_width">注册时间:</label>'+
						'<div class="layui-form-mid dialog_red">'+
						'23456 '+
						'</div>'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item dialog_margin_bottom">'+
						'<div class="layui-inline width_50">'+
						'<label class="layui-form-label dialog_label_width">绑定邮箱:</label>'+
						'<div class="layui-form-mid">'+
						'762*******@qq.com '+
						'</div>'+
						'</div>'+
						'<div class="layui-inline width_50">'+
						'<label class="layui-form-label dialog_label_width">用户手机号:</label>'+
						'<div class="layui-form-mid">'+
						'18799994324（中国) '+
						'</div>'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item dialog_margin_bottom">'+
						'<label class="layui-form-label dialog_label_width">身份证号:</label>'+
						'<div class="layui-form-mid">'+
						'370226********7119（宋凯）'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item dialog_margin_bottom">'+
						'<div class="layui-inline width_50">'+
						'<label class="layui-form-label dialog_label_width">提现时间:</label>'+
						'<div class="layui-form-mid">'+
						'2018-09-09  12:12:12 '+
						'</div>'+
						'</div>'+
						'<div class="layui-inline width_50">'+
						'<label class="layui-form-label dialog_label_width">提现数量:</label>'+
						'<div class="layui-form-mid">'+
						'0.5646BTC'+
						'</div>'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item dialog_margin_bottom">'+
						'<div class="layui-inline width_50">'+
						'<label class="layui-form-label dialog_label_width">提币地址:</label>'+
						'<div class="layui-form-mid">'+
						'sdfwerdfg564fdg1ert656'+
						'</div>'+
						'</div>'+
						'<div class="layui-inline width_50">'+
						'<label class="layui-form-label dialog_label_width">标签:</label>'+
						'<div class="layui-form-mid">'+
						'标签156'+
						'</div>'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item dialog_margin_bottom">'+
						'<div class="layui-inline width_50">'+
						'<label class="layui-form-label dialog_label_width">提现手续费率:</label>'+
						'<div class="layui-form-mid">'+
						'0.002'+
						'</div>'+
						'</div>'+
						'<div class="layui-inline width_50">'+
						'<label class="layui-form-label dialog_label_width">实收手续费:</label>'+
						'<div class="layui-form-mid">'+
						'0.00001BTC'+
						'</div>'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item dialog_margin_bottom">'+
						'<label class="layui-form-label dialog_label_width dialog_blod">敏感操作:</label>'+
						'<div class="layui-form-mid dialog_red">'+
						'24小时内进行过【修改谷歌密钥】操作；'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item dialog_margin_bottom">'+
						'<label class="layui-form-label dialog_label_width"></label>'+
						'<div class="layui-form-mid dialog_red">'+
						'24小时内进行过【修改交易密码】操作；'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item dialog_margin_bottom">'+
						'<label class="layui-form-label dialog_label_width"></label>'+
						'<div class="layui-form-mid dialog_red">'+
						'24小时内进行过【修改邮箱】操作。'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item">'+
						'<label class="layui-form-label dialog_label_width dialog_blod">数额检测:</label>'+
						'<div class="layui-form-mid">'+
						'正常 <span class="dialog_red">（0.9BTC数额过大）</span>'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item layui-form-text">'+
						'<label class="layui-form-label dialog_label_width">备注:</label>'+
						'<div class="layui-input-block dialog_margin_left">'+
						'<textarea placeholder="请输入内容" class="layui-textarea"></textarea>'+
						'</div>'+
						'</div>'+
						'<div class="layui-form-item">'+
						'<label class="layui-form-label dialog_label_width dialog_blod"></label>'+
						'<div class="layui-form-mid dialog_gray">'+
						'<span>2018-09-12 10:10:18</span>'+
						'<span>已通过</span>'+
						'<span>操作人：*****（风控）</span>'+
						'<span>备注：无</span>'+
						'</div>'+
						'</div>'+
						'</div>';
				return htm;
			}
		};


	// 自己一些方法
	$(function () {
		// 页面跳转
		let $frame = document.getElementsByTagName("iframe")[0];
		$('.item-page').on('click', function(e) {
			e.preventDefault();
			let index = $(this).index();
			switch(index) {
				case 0:
					// 审核列表
					$frame.src = './auditList.html';
					break;
				case 1:
					// 阈值设置
					$frame.src = './thresholdSetting.html';
					break;
				case 2:
					// 提币统计
					$frame.src = './drawingCurrency.html';
					break;
				case 3:
					// 数据展示
					$frame.src = './dataDisplay.html';
					break;
			}
		});

		$(document).on('click', '.btn_examine', function (e) {
			e.preventDefault();
			let id = $(e.target).data('id');
			let txt = activeFun.examineHtm();
			if ($(this).hasClass('layui-href')) {
				$frame.load('../templates/auditListDetail.html');
				return;
			}
			layer.open({
				title: '提币审核',
				skin: 'examine-class',
				content: activeFun.examineHtm(),
				btn: ['审核通过', '不通过', '关闭'],
				yes: function(index, layero){
					console.log(id);
					// 审核通过
				},
				btn2: function () {
					console.log(id);
					// 不通过
				},
				btn3: function () {
					// 关闭
				}
			});
		});

	});

	//日期
	laydate.render({
		elem: '#date_range',
		range: true,
		done: function(value, date){
			let type = date.year;
		    // 禁用select
		    if (!!type) {
		    	$('#time').attr('disabled', 'disabled');
				form.render('select');
		    } else {
		    	$('#time').removeAttr('disabled');
				form.render('select');
		    }
		}
	});

	// 初始化审核列表
	// 序号  客户ID  手机号  提现数量  申请时间  灰名单  敏感操作  数额检测  阈值检测  风控组处理结果  客服组处理结果  最终状态  最新操作时间  备注  操作

	table.render({
		elem: '#search_list'
		// url获取数据
		// url:'', 
		// 本地数据
		,cols: [[ //标题栏
			{field: 'id', title: '序号', width: 80}
			,{field: 'username', title: '客户ID', width: 100}
			,{field: 'email', title: '手机号', minWidth: 120}
			,{field: 'sign', title: '提现数量', minWidth: 120}
			,{field: 'sex', title: '申请时间', width: 80}
			,{field: 'city', title: '灰名单', width: 100}
			,{field: 'experience', title: '敏感操作', width: 120}
			,{field: 'sign', title: '数额检测', minWidth: 160}
			,{field: 'sex', title: '阈值检测', width: 80}
			,{field: 'city', title: '风控组处理结果', width: 160}
			,{field: 'experience', title: '客服组处理结果', width: 160}
			,{field: 'sign', title: '最终状态', minWidth: 100}
			,{field: 'sex', title: '最新操作时间', width: 120}
			,{field: 'city', title: '备注', width: 100}
			,{field: 'option', title: '操作', width: 80}
		]]
		,data: [{
			"id": "10001"
			,"username": "杜甫"
			,"email": "xianxin@layui.com"
			,"sex": "男"
			,"city": "浙江杭州"
			,"sign": "人生恰似一场修行"
			,"experience": "116"
			,"ip": "192.168.0.8"
			,"logins": "108"
			,"joinTime": "2016-10-14",
			"option": "已审核"
			}, {
			"id": "10002"
			,"username": "李白"
			,"email": "xianxin@layui.com"
			,"sex": "男"
			,"city": "浙江杭州"
			,"sign": "人生恰似一场修行"
			,"experience": "12"
			,"ip": "192.168.0.8"
			,"logins": "106"
			,"joinTime": "2016-10-14",
			"option": '<a class="layui-btn layui-btn-xs btn_examine" data-id="1002">审核</a>'
			}, {
			"id": "10003"
			,"username": "李白"
			,"email": "xianxin@layui.com"
			,"sex": "男"
			,"city": "浙江杭州"
			,"sign": "人生恰似一场修行"
			,"experience": "12"
			,"ip": "192.168.0.8"
			,"logins": "106"
			,"joinTime": "2016-10-14",
			"option": '<a class="layui-btn-xs btn_examine layui-href" data-id="1003">查看</a>'
			}, {
			"id": "10004"
			,"username": "李白"
			,"email": "xianxin@layui.com"
			,"sex": "男"
			,"city": "浙江杭州"
			,"sign": "人生恰似一场修行"
			,"experience": "12"
			,"ip": "192.168.0.8"
			,"logins": "106"
			,"joinTime": "2016-10-14",
			"option": '<a class="layui-btn layui-btn-xs btn_examine" data-id="1004">审核</a>'
			}],
		page: true,
		height: 600,
		//,page: true //是否显示分页
		//,limits: [5, 7, 10]
		//,limit: 5 //每页默认显示的数量
	});

	// 分页
	laypage.render({
		elem: 'pagation'
		,count: 100
		,layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip']
		,jump: function(obj){
		  console.log(obj)
		}
	});

	// 多选
	formSelects.render('select_more');
	formSelects.btns('select_more', []);

	
	$(function () {
		// 关闭弹框
		$(document).on('click', '.dialog_btn_close', function (e) {
			e.preventDefault();
			$('.dialog_modal').hide();
		})
		// 开启弹框
		$(document).on('click', '.btn_add_set, .opration_edit', function (e) {
			e.preventDefault();
			$('.dialog_modal').show();
		})
		// 删除当前数据弹框
		$(document).on('click', '.opration_delete', function(event) {
			event.preventDefault();
			layer.open({
				title: '删除',
				skin: 'delete_dialog',
				content: '确认删除当前数据！',
				btn: ['删除', '取消'],
				yes: function(index, layero){
					$('.layui-layer-close').trigger('click');
					// 删除操作
				},
				btn2: function () {
					// 取消操作
				}
			});
		});

		// 提币统计-查看详情
		$(document).on('click', '.opration_look', function(event) {
			event.preventDefault();
			$('.detail_list').show();
		});

		// 阈值检测查看跳到详情操作
		$(document).on('click', '.go_detail', function(event) {
			event.preventDefault();
			let $frame = $('#frame_body');
			$frame.load('../templates/examineDetail.html');
		});

	})





});