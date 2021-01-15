import zh from '../packages/locales/zh';
export default {
  ...zh,
  'menu.mon.dashboard': '监控看图',
  'menu.mon.dashboard.realTime': '即时看图',
  'menu.mon.dashboard.screen': '监控大盘',
  'menu.mon.dashboard.bigScreen': '监控大屏',
  'menu.mon.dashboard.srm': '灭火图',
  'menu.mon.strategy': '策略配置',
  'menu.mon.strategy.strategy': '告警策略',
  'menu.mon.strategy.silence': '告警屏蔽',
  'menu.mon.strategy.collect': '采集配置',
  'menu.mon.strategy.aggrStra': '聚合策略',
  'menu.mon.strategy.nginx':'nginx日志计算',
  'menu.mon.strategy.binlog':'binlog日志计算',
  'menu.mon.history': '报警历史',
  'menu.mon.history.cur': '未恢复告警',
  'menu.mon.history.all': '所有历史告警',
  'menu.mon.network': '网络监控',
  'menu.mon.network.api': 'API 监控',
  'menu.mon.network.snmp': 'SNMP 监控',
  'menu.mon.srm': '灭火图',
  'menu.mon.collect': '采集配置',
  'menu.mon.collect.port': '端口',
  'menu.mon.collect.proc': '进程',
  'menu.mon.collect.plugin': '插件',
  'menu.mon.collect.log': '日志',
  'menu.mon.collect.snmp': 'SNMP',
  'menu.mon.collect.api': 'API',
  'menu.mon.collect.subgroup': '组件',
  'menu.mon.shortcuts': '快捷方式',
  'menu.mon.shortcuts.rdb': '用户资源中心',
  'menu.mon.shortcuts.ams': '资产管理系统',
  'menu.mon.shortcuts.job': '任务执行中心',
  'menu.mon.logCalc': '日志计算',
  'menu.mon.logCalc.nginx':'nginx日志计算',
  'menu.mon.logCalc.binlog':'binlog日志计算',

  'node.select.help': '请选择节点',

  '周一': '周一',
  '周二': '周二',
  '周三': '周三',
  '周四': '周四',
  '周五': '周五',
  '周六': '周六',
  '周日': '周日',

  'clone.to.other.node': '克隆到其他节点',
  'collect.log': '日志',
  'collect.port': '端口',
  'collect.proc': '进程',
  'collect.common.name': '采集名称',
  'collect.common.node': '归属节点',
  'collect.common.step': '采集周期',
  'collect.common.step.unit': '秒',
  'collect.common.note': '备注',

  'collect.log.msg.pattern.empty': '匹配正则不能为空',
  'collect.log.msg.log.empty': '日志不能为空',
  'collect.log.ns': '归属节点',
  'collect.log.name': '监控指标名称',
  'collect.log.func': '计算方法',
  'collect.log.func.cnt': '计数：对符合规则的日志进行计数',
  'collect.log.func.avg': '平均：对符合规则的日志抓取出的数字进行平均',
  'collect.log.func.sum': '求和：对符合规则的日志抓取出的数字进行求和',
  'collect.log.func.max': '最大值：对符合规则的日志抓取出的数字取最大值',
  'collect.log.func.min': '最小值：对符合规则的日志抓取出的数字进最小值',
  'collect.log.path': '日志路径',
  'collect.log.path.dynamic': '动态日志',
  'collect.log.path.dynamic.tip.1': '日志末尾自带时间格式，例如',
  'collect.log.path.dynamic.tip.2': "$'{}' 中不能包含 /",
  'collect.log.timeFmt': '时间格式',
  'collect.log.timeFmt.help.1': '时间格式必须和日志中的格式一样, 否则无法采集到数据。',
  'collect.log.timeFmt.help.2': '如日志中出现多段符合时间正则的, 只使用第一个匹配结果。',
  'collect.log.step': '采集周期',
  'collect.log.step.unit': '秒',
  'collect.log.pattern': '匹配正则',
  'collect.log.pattern.tip.1': '请填写正则表达式',
  'collect.log.pattern.tip.2': '如计算方式选择了耗时: 必须包含括号( )',
  'collect.log.pattern.tip.3': '例如 cost=(\\d+) , 则取\\d+的部分（默认以第一个括号为准）',
  'collect.log.tagval.placeholder': '不是曲线值! 匹配结果必须可枚举!',
  'collect.log.tags.add': '新增 tag',
  'collect.log.tagName.help.title': 'tagName 填写说明',
  'collect.log.tagName.help.1': '不允许包含 host、trigger、include',
  'collect.log.tagName.help.2': '不允许包含如下4个特殊字符= , : @',
  'collect.log.tagValue.help.title': 'tagValue 填写说明',
  'collect.log.tagValue.help.1': '必须包含括号。括号中的正则内容被用作tagValue的取值，必须可枚举。',
  'collect.log.tagValue.help.2': '不允许包含如下4个特殊字符= , : @',
  'collect.log.check': '配置验证',
  'collect.log.check.btn': '验证',
  'collect.log.check.btn2': '我的配置是否有问题?',
  'collect.log.check.help': '请输入一行待监控的完整日志，包括时间。',
  'collect.log.check.help.tip.1': '正确匹配：',
  'collect.log.check.help.tip.2': '输出正则匹配结果完整式及子项，输出tag正则匹配结果完整式及子项，以及时间匹配结果',
  'collect.log.check.help.tip.3': '错误匹配：',
  'collect.log.check.help.tip.4': '输出错误信息',
  'collect.log.check.add.tip': '添加采集配置的时候，请验证配置',
  'collect.log.note': '备注',
  'collect.batch.import': '导入采集配置',
  'collect.batch.export': '导出采集配置',

  'collect.port.title': '端口监控指标',
  'collect.port.name.placeholder': '对采集配置的说明，例如 web端口采集',
  'collect.port.pattern.msg': '只能允许填写英文、数字、中划线、下划线、点',
  'collect.port.port': '端口号',
  'collect.port.timeout': '连接超时',
  'collect.port.timeout.unit': '秒',

  'collect.proc.title': '进程采集指标',
  'collect.proc.name.placeholder': '对采集配置的说明，例如 nginx进程采集',
  'collect.proc.service.pattern.msg': '只能允许填写英文、数字、中划线、下划线、点',
  'collect.proc.type': '采集方式',
  'collect.proc.type.cmd': '命令行',
  'collect.proc.type.name': '进程名',
  'collect.proc.type.input.pattern.msg': '不能包含中文',

  'collect.plugin': '插件',
  'collect.plugin.name.placeholder': '对采集配置的说明',
  'collect.plugin.filepath': '文件路径',
  'collect.plugin.params': '参数',
  'collect.plugin.filepath.placeholder': '待执行插件所在的绝对路径',
  'collect.plugin.env': '环境变量',

  'graph.subscribe': '订阅图表',
  'graph.share': '分享图表',
  'graph.clear': '清空图表',
  'graph.view': '查看',
  'graph.save': '保存',
  'graph.machine.list.title': '机器列表',
  'graph.machine.list.update': '更新图表',
  'graph.metric.list.title': '指标列表',
  'graph.metric.list.search': '搜索指标',
  'graph.metric.list.all': '全部',
  'graph.refresh': '刷新',
  'graph.config.title': '图表配置',
  'graph.config.graph.title': '标题',
  'graph.config.node': '节点',
  'graph.config.metric': '指标',
  'graph.config.aggr': '聚合',
  'graph.config.aggr.sum': '求和',
  'graph.config.aggr.avg': '均值',
  'graph.config.aggr.max': '最大值',
  'graph.config.aggr.min': '最小值',
  'graph.config.aggr.group': '聚合维度',
  'graph.config.comparison': '环比',
  'graph.config.series': '曲线',
  'graph.config.series.unit': '条',
  'graph.config.cate': '分类',
  'graph.config.time': '时间',
  'graph.config.threshold': '阈值',
  'graph.config.link': '下钻',
  'graph.config.link.help': '自定义链接，方便跳转到更深层的大盘、临时图、报警策略等',
  'graph.config.chartType.targetValue': '取值',
  'graph.config.chartType.current': '当前值',
  'graph.config.chartType.unit': '单位',
  'graph.config.chartType.subType': '类型',
  'graph.config.subType.normal': '数值',
  'graph.config.subType.normal.tip': '(必须选择聚合)',
  'graph.config.subType.solidGauge': '仪表盘',
  'graph.config.subType.liquidFillGauge': '容量水位',
  'graph.config.chartType.valueMap': '数值映射',
  'graph.config.chartType.mapConf': '映射关系',
  'graph.config.chartType.tableType': '表格类型',
  'graph.config.chartType.tableType.current': '当前值',
  'graph.config.chartType.tableType.stats': '统计值',
  'graph.config.chartType.pieType': '样式',
  'graph.config.chartType.pieType.pie': 'Pie',
  'graph.config.chartType.pieType.donut': 'Donut',
  'graph.config.chartType.tableType.columnsKey': '显示列',
  'graph.config.tagkv.node': '节点',

  'event.tab.alert': '未恢复报警',
  'event.tab.all': '所有历史报警',
  'event.msg.ignore.success': '忽略报警成功',
  'event.msg.claim.success': '认领报警成功',
  'event.msg.claim.all.success': '一键认领报警成功',
  'event.table.time': '发生时间',
  'event.table.stra': '策略名称',
  'event.table.node': '节点',
  'event.table.priority': '级别',
  'event.table.notify': '通知结果',
  'event.table.ignore': '忽略',
  'event.table.ignore.sure': '确定要忽略这条报警吗?',
  'event.table.claim': '认领',
  'event.table.claim.sure': '确定要认领这条报警吗?',
  'event.table.shield': '屏蔽',
  'event.table.assignees': '认领人',
  'event.table.status': '状态',
  'event.table.status.alert': '报警',
  'event.table.status.recovery': '恢复',
  'event.table.claim.all': '一键认领',
  'event.table.claim.all.sure': '确定认领该节点下所有未恢复的报警吗?',
  'event.table.detail.title': '报警事件详情',
  'event.table.metric': '指标',
  'event.table.expression': '表达式',
  'event.table.scene': '现场值',
  'event.table.scene.time': '时间',
  'event.table.scene.value': '值',
  'event.table.runbook': '预案手册',

  'screen.create': '创建大盘',
  'screen.tag.add': '新增分类',
  'screen.tag.batch.modify': '批量修改分类',
  'screen.auto.refresh': '自动刷新',
  'screen.col': '列',
  'screen.tag.graph.add': '新增图表',
  'screen.tag.graph.add.graph': '折线图',
  'screen.tag.graph.add.number': '数值 (必须选择聚合方式)',
  'screen.tag.graph.add.table': '表格',
  'screen.tag.graph.add.pie': '扇形图',
  'screen.tag.up': '上移',
  'screen.tag.down': '下移',
  'screen.tag.batch.modify.tag': '需要移动的分类',
  'screen.tag.batch.modify.target.node': '将要移动到的节点',
  'screen.tag.batch.modify.target.screen': '将要移动到的大盘',
  'screen.graph.extraMoreList.share': '分享图表',
  'screen.graph.extraMoreList.clone': '克隆图表',
  'screen.graph.extraMoreList.delete': '删除图表',
  'screen.graph.extraMoreList.delete.sure': '确定要删除这个图表吗?',
  'screen.clone.name': '新大盘名称',
  'screen.clone.node': '新大盘节点',
  'screen.clone.node.help': '克隆的大盘会基于当前节点创建图表',

  'silence.add': '新增屏蔽',
  'silence.metric': '指标',
  'silence.bindNode': '关联节点',
  'silence.time': '屏蔽时间',
  'silence.cause': '屏蔽原因',
  'silence.user': '操作者',
  'silence.delete': '解除',
  'silence.detail.title': '屏蔽详情',
  'silence.form.metric': '屏蔽指标',
  'silence.form.endpoints': '屏蔽 endpoints',
  'silence.form.tags': '屏蔽 tags',
  'silence.form.stime': '开始时间',
  'silence.form.etime': '结束时间',
  'silence.cause.default': '快速屏蔽',

  'stra.add': '新增报警策略',
  'stra.advanced': '高级',
  'stra.seconds': '秒',
  'stra.minutes': '分钟',
  'stra.name': '名称',
  'stra.priority': '级别',
  'stra.metric': '指标',
  'stra.notify': '报警接收',
  'stra.batch.modify.excludeNs': '修改排除节点',
  'stra.batch.modify.notify': '修改报警接收组',
  'stra.batch.cloneTo.otherNode': '克隆到其他节点',
  'stra.batch.delete': '批量删除',
  'stra.batch.import': '导入策略',
  'stra.batch.export': '导出策略',
  'stra.node': '生效节点',
  'stra.node.exclude': '排除节点',
  'stra.priority.1': '一级报警',
  'stra.priority.2': '二级报警',
  'stra.priority.3': '三级报警',
  'stra.priority.1.tip': '一级报警：发送语音, 短信, IM, 邮件',
  'stra.priority.2.tip': '二级报警：发送短信, IM, 邮件',
  'stra.priority.3.tip': '三级报警：发送IM，邮件',
  'stra.alertDur': '统计周期',
  'stra.trigger': '触发条件',
  'stra.trigger.normal': '常用',
  'stra.trigger.and': '与条件',
  'stra.preview': '预览',
  'stra.preview.duration': '持续',
  'stra.preview.all': '每个值',
  'stra.preview.happen': '次值',
  'stra.preview.nodata': '无数据上报',
  'stra.preview.max': '最大值',
  'stra.preview.min': '最小值',
  'stra.preview.avg': '均值',
  'stra.preview.sum': '求和值',
  'stra.preview.all.help': '断线情况，即为不连续。若要增加容错，可选择happen',
  'stra.tag': 'Tag 过滤',
  'stra.tag.add': '添加筛选条件',
  'stra.tag.modify': '修改筛选条件',
  'stra.tag.include': '包含',
  'stra.tag.exclude': '排除',
  'stra.action': '执行动作',
  'stra.action.d1': '在',
  'stra.action.d2': '分钟内',
  'stra.action.d3': '最多报警',
  'stra.action.d4': '次',
  'stra.notify.team': '报警接收团队',
  'stra.notify.user': '报警接收人',
  'stra.notify.msg.error': '必须存在一个报警接收人或接收组',
  'stra.notify.callback': '通知我自己开发的系统（报警回调, 请确认是 IDC 内可访问的地址）',
  'stra.recovery.dur': '留观时长',
  'stra.recovery.dur.help.1': '告警恢复后持续观察',
  'stra.recovery.dur.help.2': '秒，未再触发阈值才发送恢复通知',
  'stra.recovery.notify': '静默恢复',
  'stra.recovery.notify.checkbox': '不发送恢复通知',
  'stra.period.time': '生效时间',
  'stra.alert.upgrade': '报警升级',
  'stra.alert.upgrade.checkbox': '是否启动报警升级',
  'stra.alert.upgrade.d1': '持续',
  'stra.alert.upgrade.d2': '未处理并且未恢复的持续报警',
  'stra.alert.upgrade.d3': '将以',
  'stra.alert.upgrade.d4': '发送给',
  'stra.runbook': '预案手册链接',
  'stra.work_groups': '处理工作组',

  'api.name': '采集名称',
  'api.url': '探测目标',
  'api.viewGraph': '看图',
  'api.alarm': '报警',
  'api.batch.viewGraph': '批量看图',
  'api.batch.alarm': '批量报警',
  'api.title': '监控指标',
  'api.protocol': '协议',
  'api.domain': '域名',
  'api.port': '端口',
  'api.path': '路径',
  'api.header.add': '添加 header',
  'api.expected_code': '状态码',
  'api.expected_string': '包含字符串',
  'api.unexpected_string': '不包含字符串',
  'api.timeout': '超时',
  'api.interval': '采集周期',
  'api.region': '探测源Region',
  'api.comment': '备注',

  'snmp.oid_type': '指标类型',
  'snmp.oid_type.1': '通用',
  'snmp.oid_type.2': '其他',
  'snmp.module': '厂商型号',
  'snmp.metric': '指标',
  'snmp.oid': 'oid',
  'snmp.metric_type': '类型',
  'snmp.indexes': 'indexes',
  'snmp.indexes.add': '添加 index',

  'host.is.related': '设备相关',
  'host.related': '设备相关',
  'host.unRelated': '设备无关',

  'aggrStra.add.title': '新增指标计算',
  'aggrStra.modify.title': '修改指标计算',
  'aggrStra.add.btn': '新增',
  'aggrStra.batch.delete.btn': '批量删除',
  'aggrStra.node': '节点',
  'aggrStra.node.inherit': '继承',
  'aggrStra.metric': '指标名',
  'aggrStra.status': '生效状态',
  'aggrStra.lastUser': '最后操作者',
  'aggrStra.updated': '最后修改时间',
  'aggrStra.modify.target.node': '请到 {node} 节点去修改',
  'aggrStra.delete.target.node': '请到 {node} 节点去删除',
  'aggrStra.settings.node': '节点',
  'aggrStra.settings.excl_nodes': '排除节点',
  'aggrStra.settings.category': '设备相关',
  'aggrStra.settings.category.1': '设备相关',
  'aggrStra.settings.category.2': '设备无关',
  'aggrStra.settings.originMetric': '原始指标',
  'aggrStra.settings.originMetric.add': '新增指标',
  'aggrStra.settings.originMetric.delete': '删除指标',
  'aggrStra.settings.originMetric.name': '指标',
  'aggrStra.settings.originMetric.opt': '聚合方式',
  'aggrStra.settings.originMetric.tags': 'Tag 过滤',
  'aggrStra.settings.originMetric.tags.key': 'Tag 名称',
  'aggrStra.settings.originMetric.tags.opt.include': '包含',
  'aggrStra.settings.originMetric.tags.opt.exclude': '排除',
  'aggrStra.settings.originMetric.tags.value': 'Tag 取值',
  'aggrStra.settings.originMetric.tags.add': '新增 Tag 过滤',
  'aggrStra.settings.aggr': '聚合配置',
  'aggrStra.settings.aggr.groupby': '聚合维度',
  'aggrStra.settings.newMetric': '新指标名称',
  'aggrStra.settings.expression': '计算表达式',
  'aggrStra.settings.expression.help.1': '请使用$a、$b、$c表示原始指标',
  'aggrStra.settings.expression.help.2': '支持 + - * / ()',
  'aggrStra.settings.expression.help.3': '例如：1-$a/$b'
};
