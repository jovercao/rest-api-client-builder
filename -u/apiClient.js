/*
* 本文档由swagger客户端生成工具自动生成
* 使用axios作为ajax客户端库
* 作者： Jover
*/
import axios from 'axios';

const http = axios.create({
    baseURL: 'undefined'
});

/**
* swagger 地址：test/swagger.simple2.json
* 本实例由axios创建 axios文档地址 https://github.com/axios/axios
*/
const apis = {
    $http: http,

    Address: {

        /** 
        * 获取地址信息
        * @param {number} addressId int64 必填 
         * @returns {void} void
        */
        async getAddress(addressId) {
            const path = `/api/Address/${addressId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 更新地址信息
        * @param {number} addressId int64 必填 
         * @param {*} $body
        *    linkAddressdto: LinkAddressDto  
        * @returns {void} void
        */
        async updateAddress(addressId, $body) {
            const path = `/api/Address/${addressId}`;
            const res = await http({
                method: put,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 创建地址信息
         * @param {*} $body
        *    linkAddressdto: LinkAddressDto  
        * @returns {void} void
        */
        async createAddress($body) {
            const path = `/api/Address`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    AttachFile: {

        /** 
        * 上传附件
        * @param {number} srcType int32 必填 
        * @param {string} srcKey  必填 
        * @param {string} filename  必填 
        * @param {*} $query
        *    filename: string  
        *    label: string[]  
        *    title: string  
         * @returns {void} void
        */
        async uploadFile(srcType, srcKey, filename, $query) {
            const path = `/api/attach/${srcType}/${srcKey}/${filename}`;
            const res = await http({
                method: post,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 删除附件
        * @param {number} srcType int32 必填 
        * @param {string} srcKey  必填 
        * @param {string} filename  必填 
         * @returns {void} void
        */
        async deleteFile(srcType, srcKey, filename) {
            const path = `/api/attach/${srcType}/${srcKey}/${filename}`;
            const res = await http({
                method: delete,
                url: path
            });
            return res.data;
        },

        /** 
        * 查询附件
        * @param {number} srctype int32 必填 
        * @param {string} srckey  必填 
         * @returns {AttachFileOutputDto[]} AttachFileOutputDto[]
        */
        async searchFiles(srctype, srckey) {
            const path = `/api/attach/${srctype}/${srckey}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 预览附件
        * @param {number} id int32 必填 
         * @returns {void} void
        */
        async previewFile(id) {
            const path = `/api/attach/preview/${id}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 下载附件
        * @param {number} srctype int32 必填 
        * @param {string} srckey  必填 
        * @param {string} filename  必填 
         * @returns {HttpResponseMessage} HttpResponseMessage
        */
        async downloadFile(srctype, srckey, filename) {
            const path = `/api/attach/${srctype}/${srckey}/${filename}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 批量下载附件
        * @param {*} $query
        *    ids: number[]  
         * @returns {HttpResponseMessage} HttpResponseMessage
        */
        async downloadFiles($query) {
            const path = `/api/attach/files`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

    },

    AuditEntity: {

        /** 
        * 读取数据审计信息列表
         * @param {*} $body
        *    request: PageRequest  页请求
        * @returns {PageData[AuditEntityOutputDto]} PageData[AuditEntityOutputDto]
        */
        async read($body) {
            const path = `/api/Admin/AuditEntity/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    AuditOperation: {

        /** 
        * 读取操作审计信息
         * @param {*} $body
        *    request: PageRequest  页数据请求
        * @returns {PageData[AuditOperationOutputDto]} PageData[AuditOperationOutputDto]
        */
        async read($body) {
            const path = `/api/Admin/AuditOperation/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Callback: {

        /** 
        * 确认收款
         * @param {*} $body
        *    inputDto: SendDispatchOrderToErpDto  
        * @returns {void} void
        */
        async confirmPay($body) {
            const path = `/api/order/confirmpay`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Common: {

        /** 
        * 获取验证码图片
         * @returns {string} string
        */
        async verifyCode() {
            const path = `/api/Common/VerifyCode`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 验证验证码的有效性，只作为前端Ajax验证，验证成功不移除验证码，验证码仍需传到后端进行再次验证
        * @param {*} $query
        *    code: string  验证码字符串
        *    id: string  验证码编号
         * @returns {boolean} boolean
        */
        async checkVerifyCode($query) {
            const path = `/api/Common/CheckVerifyCode`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取系统信息
         * @returns {void} void
        */
        async systemInfo() {
            const path = `/api/Common/SystemInfo`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 获取分类类型元数据
        * @param {*} $query
        *    type: string  类型分类，entity,inputdto,outputdto
         * @returns {TypeMetadata[]} TypeMetadata[]
        */
        async getTypeMetadatas($query) {
            const path = `/api/Common/GetTypeMetadatas`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取指定类型的元数据
        * @param {*} $query
        *    typeFullName: string  类型命名
         * @returns {TypeMetadata} TypeMetadata
        */
        async geTypeMetadata($query) {
            const path = `/api/Common/GeTypeMetadata`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

    },

    Dashboard: {

        /** 
        * 获取统计数据
        * @param {*} $query
        *    start: date  起始时间
        *    end: date  结束时间
         * @returns {void} void
        */
        async summaryData($query) {
            const path = `/api/Admin/Dashboard/SummaryData`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 
        * @param {*} $query
        *    start: date  
        *    end: date  
         * @returns {void} void
        */
        async lineData($query) {
            const path = `/api/Admin/Dashboard/LineData`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

    },

    Doctor: {

        /** 
        * 
        * @param {number} doctorId int64 必填 
         * @param {*} $body
        *    patientDto: DoctorPatientInputDto  
        * @returns {void} void
        */
        async createPatient(doctorId, $body) {
            const path = `/api/Doctor/${doctorId}/patient`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 
        * @param {number} doctorId int64 必填 
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    sort: number  
        *    name: string  
        *    mobile: string  
        *    beginDate: date  
        *    endDate: date  
        *    identityNo: string  
        *    withAddress: boolean  
         * @returns {void} void
        */
        async getPatientList(doctorId, $query) {
            const path = `/api/Doctor/${doctorId}/patients`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 
        * @param {number} doctorId int64 必填 
         * @param {*} $body
        *    prescrUpdateDto: PrescrUpdateDto  
        * @returns {void} void
        */
        async updatePrescr(doctorId, $body) {
            const path = `/api/Doctor/${doctorId}/prescr`;
            const res = await http({
                method: put,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 
        * @param {number} doctorId int64 必填 
         * @param {*} $body
        *    prescrInputDto: PrescrInputDto  
        * @returns {void} void
        */
        async createPrescr(doctorId, $body) {
            const path = `/api/Doctor/${doctorId}/prescr`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 
        * @param {number} doctorId int64 必填 
         * @returns {void} void
        */
        async getPrescrList(doctorId) {
            const path = `/api/Doctor/${doctorId}/prescrs`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 查询某患者的处方列表
        * @param {number} doctorId int64 必填 
        * @param {number} patientId int64 必填 
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    listDate: date  
        *    sort.Order: number  
        *    sort.Field: string  
        *    Filter.beginDate: date  
        *    Filter.endDate: date  
        *    Filter.isGenOrder: boolean  
        *    Options.WithDetail: boolean  
         * @returns {void} void
        */
        async getPatientPrescrList(doctorId, patientId, $query) {
            const path = `/api/Doctor/${doctorId}/patient/${patientId}/prescrs`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 
        * @param {number} doctorId int64 必填 
        * @param {number} prescrId int64 必填 
         * @returns {void} void
        */
        async getPrescr(doctorId, prescrId) {
            const path = `/api/Doctor/${doctorId}/prescr/${prescrId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 
        * @param {number} doctorId int64 必填 
         * @param {*} $body
        *    prescrOrderDto: PrescrOrderDto  
        * @returns {void} void
        */
        async createOrder(doctorId, $body) {
            const path = `/api/Doctor/${doctorId}/order`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 
        * @param {number} doctorId int64 必填 
         * @returns {void} void
        */
        async getUnpayOrderList(doctorId) {
            const path = `/api/Doctor/${doctorId}/pending`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 
        * @param {number} doctorId int64 必填 
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    sort.Order: number  
        *    sort.Field: string  
        *    name: string  
        *    mobile: string  
        *    beginDate: date  
        *    endDate: date  
        *    orderNo: string  
        *    identityNo: string  
        *    isPaid: boolean  
         * @returns {void} void
        */
        async getOrderList(doctorId, $query) {
            const path = `/api/Doctor/${doctorId}/orders`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 
        * @param {number} doctorId int64 必填 
        * @param {number} orderId int64 必填 
         * @returns {void} void
        */
        async gerOrder(doctorId, orderId) {
            const path = `/api/Doctor/${doctorId}/order/${orderId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 
        * @param {number} doctorId int64 必填 
        * @param {number} hospitalId int64 必填 
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    listDate: date  
        *    sort.Order: number  
        *    sort.Field: string  
        *    Filter.name: string  
        *    Filter.mobile: string  
        *    Filter.beginDate: date  
        *    Filter.endDate: date  
        *    Filter.identityNo: string  
        *    Filter.prescrNo: string  
        *    Filter.isGenOrder: boolean  
        *    Options.WithDetail: boolean  
        *    Options.WithAttachFile: boolean  
         * @returns {void} void
        */
        async getPrescrsByHospital(doctorId, hospitalId, $query) {
            const path = `/api/Doctor/${doctorId}/hospital/${hospitalId}/prescrs`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

    },

    EntityInfo: {

        /** 
        * 读取实体信息
         * @param {*} $body
        *    request: PageRequest  
        * @returns {PageData[EntityInfoOutputDto]} PageData[EntityInfoOutputDto]
        */
        async read($body) {
            const path = `/api/Admin/EntityInfo/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 读取实体节点
         * @returns {EntityInfoNode[]} EntityInfoNode[]
        */
        async readNode() {
            const path = `/api/Admin/EntityInfo/ReadNode`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 读取实体属性信息
        * @param {*} $query
        *    typeName: string  实体类型
         * @returns {AjaxResult} AjaxResult
        */
        async readProperties($query) {
            const path = `/api/Admin/EntityInfo/ReadProperties`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 更新实体信息
         * @param {*} $body
        *    dtos: EntityInfoInputDto[]  实体信息
        * @returns {AjaxResult} AjaxResult
        */
        async update($body) {
            const path = `/api/Admin/EntityInfo/Update`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Function: {

        /** 
        * 读取功能信息
         * @param {*} $body
        *    request: PageRequest  
        * @returns {PageData[FunctionOutputDto]} PageData[FunctionOutputDto]
        */
        async read($body) {
            const path = `/api/Admin/Function/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 读取功能[模块]树数据
        * @param {*} $query
        *    moduleId: number  模块编号
         * @returns {TreeNode[]} TreeNode[]
        */
        async readTreeNode($query) {
            const path = `/api/Admin/Function/ReadTreeNode`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 更新功能信息
         * @param {*} $body
        *    dtos: FunctionInputDto[]  功能信息
        * @returns {AjaxResult} AjaxResult
        */
        async update($body) {
            const path = `/api/Admin/Function/Update`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Hangfire3: {

        /** 
        * 
         * @returns {void} void
        */
        async index() {
            const path = `/hangfire3`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

    },

    Home: {

        /** 
        * 获取后台管理主菜单
         * @returns {void} void
        */
        async mainMenu() {
            const path = `/api/Admin/Home/MainMenu`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

    },

    Identity: {

        /** 
        * 用户名是否存在
        * @param {*} $query
        *    userName: string  用户名
         * @returns {boolean} boolean
        */
        async checkUserNameExists($query) {
            const path = `/api/Identity/CheckUserNameExists`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 用户Email是否存在
        * @param {*} $query
        *    email: string  电子邮箱
         * @returns {boolean} boolean
        */
        async checkEmailExists($query) {
            const path = `/api/Identity/CheckEmailExists`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 用户昵称是否存在
        * @param {*} $query
        *    nickName: string  用户昵称
         * @returns {boolean} boolean
        */
        async checkNickNameExists($query) {
            const path = `/api/Identity/CheckNickNameExists`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 新用户注册
         * @param {*} $body
        *    dto: RegisterDto  注册信息
        * @returns {AjaxResult} AjaxResult
        */
        async register($body) {
            const path = `/api/Identity/Register`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 用户登录
         * @param {*} $body
        *    dto: LoginDto  登录信息
        * @returns {AjaxResult} AjaxResult
        */
        async login($body) {
            const path = `/api/Identity/Login`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * Jwt登录
         * @param {*} $body
        *    dto: LoginDto  登录信息
        * @returns {AjaxResult} AjaxResult
        */
        async jwtoken($body) {
            const path = `/api/Identity/Jwtoken`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 使用账号登录
        * @param {*} $query
        *    code: string  微信小程序服务端登录凭据
        *    nickName: string  
         * @returns {AjaxResult} AjaxResult
        */
        async wxJwtoken($query) {
            const path = `/api/Identity/WxJwtoken`;
            const res = await http({
                method: post,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * OAuth2登录
        * @param {*} $query
        *    provider: string  登录提供程序
        *    returnUrl: string  登录成功返回URL
         * @returns {void} void
        */
        async oAuth2($query) {
            const path = `/api/Identity/OAuth2`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * OAuth2登录回调
        * @param {*} $query
        *    returnUrl: string  登录成功返回URL
        *    remoteError: string  远程错误信息
         * @returns {void} void
        */
        async oAuth2Callback($query) {
            const path = `/api/Identity/OAuth2Callback`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 用户登出
         * @returns {AjaxResult} AjaxResult
        */
        async logout() {
            const path = `/api/Identity/Logout`;
            const res = await http({
                method: post,
                url: path
            });
            return res.data;
        },

        /** 
        * 获取用户信息
         * @returns {OnlineUser} OnlineUser
        */
        async profile() {
            const path = `/api/Identity/Profile`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 激活邮箱
         * @param {*} $body
        *    dto: ConfirmEmailDto  电子邮箱
        * @returns {AjaxResult} AjaxResult
        */
        async confirmEmail($body) {
            const path = `/api/Identity/ConfirmEmail`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 发送激活注册邮件
         * @param {*} $body
        *    dto: SendMailDto  激活邮箱信息
        * @returns {AjaxResult} AjaxResult
        */
        async sendConfirmMail($body) {
            const path = `/api/Identity/SendConfirmMail`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 修改密码
         * @param {*} $body
        *    dto: ChangePasswordDto  修改密码信息
        * @returns {AjaxResult} AjaxResult
        */
        async changePassword($body) {
            const path = `/api/Identity/ChangePassword`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 发送重置密码邮件
         * @param {*} $body
        *    dto: SendMailDto  发送邮件信息
        * @returns {AjaxResult} AjaxResult
        */
        async sendResetPasswordMail($body) {
            const path = `/api/Identity/SendResetPasswordMail`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 重置登录密码
         * @param {*} $body
        *    dto: ResetPasswordDto  重置密码信息
        * @returns {AjaxResult} AjaxResult
        */
        async resetPassword($body) {
            const path = `/api/Identity/ResetPassword`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Image: {

        /** 
        * 
        * @param {string} imageId  必填 
         * @returns {void} void
        */
        async getImage(imageId) {
            const path = `/api/Image/${imageId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 上传图片
         * @returns {void} void
        */
        async upload() {
            const path = `/api/Image`;
            const res = await http({
                method: post,
                url: path
            });
            return res.data;
        },

    },

    Member: {

        /** 
        * 会员端查询订单列表
        * @param {number} memberId int64 必填 
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    sort: number  
        *    withDetail: boolean  
        *    withPrescr: boolean  
        *    withPatient: boolean  
        *    filterOptions.startDate: date  
        *    filterOptions.endDate: date  
        *    filterOptions.status: number  
        *    filterOptions.keyWord: string  
        *    filterOptions.productName: string  
        *    filterOptions.patientName: string  
        *    filterOptions.mobile: string  
        *    filterOptions.unReply: boolean  
        *    filterOptions.beginStatus: number  
        *    filterOptions.endStatus: number  
         * @returns {void} void
        */
        async getOrders(memberId, $query) {
            const path = `/api/Member/${memberId}/orders`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取订单
        * @param {number} memberId int64 必填 
        * @param {number} orderId int64 必填 
         * @returns {void} void
        */
        async getOrder(memberId, orderId) {
            const path = `/api/Member/${memberId}/order/${orderId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 会员端获取处方列表
        * @param {number} memberId int64 必填 
        * @param {*} $query
        *    start: number  
        *    count: number  
        *    listDate: date  
        *    sort: string[]  
        *    filter.startDate: date  
        *    filter.endDate: date  
        *    filter.status: number  
        *    filter.keyWord: string  
        *    filter.productName: string  
        *    filter.patientName: string  
        *    options.withDetail: boolean  
        *    options.withPatient: boolean  
        *    options.withAttachFile: boolean  
         * @returns {void} void
        */
        async getPrescrList(memberId, $query) {
            const path = `/api/Member/${memberId}/prescrs`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 会员端查询处方明细
        * @param {number} memberId int64 必填 
        * @param {number} prescrId int64 必填 
         * @returns {void} void
        */
        async getPrescr(memberId, prescrId) {
            const path = `/api/Member/${memberId}/prescr/${prescrId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 获取未处理订单
        * @param {number} memberId int64 必填 
         * @returns {void} void
        */
        async getPendOrder(memberId) {
            const path = `/api/Member/${memberId}/pending`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 获取未处理购药需求数量
        * @param {number} memberId int64 必填 
         * @returns {void} void
        */
        async getPendRequire(memberId) {
            const path = `/api/Member/${memberId}/require/pending`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 获取会员信息
        * @param {number} memberId int64 必填 
         * @returns {void} void
        */
        async getMember(memberId) {
            const path = `/api/Member/${memberId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 修改会员信息
        * @param {number} memberId int64 必填 
         * @param {*} $body
        *    memberInputDto: MemberInputDto  
        * @returns {void} void
        */
        async updateMember(memberId, $body) {
            const path = `/api/Member/${memberId}`;
            const res = await http({
                method: put,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 获取会员信息列表
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    sort: number  
        *    withDetail: boolean  
        *    withPrescr: boolean  
        *    withPatient: boolean  
        *    filterOptions.startDate: date  
        *    filterOptions.endDate: date  
        *    filterOptions.status: number  
        *    filterOptions.keyWord: string  
        *    filterOptions.productName: string  
        *    filterOptions.patientName: string  
        *    filterOptions.mobile: string  
        *    filterOptions.unReply: boolean  
        *    filterOptions.beginStatus: number  
        *    filterOptions.endStatus: number  
         * @returns {void} void
        */
        async getMembers($query) {
            const path = `/api/Member`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取会员地址信息列表
        * @param {number} memberId int64 必填 
         * @returns {void} void
        */
        async getMemberAddresses(memberId) {
            const path = `/api/Member/${memberId}/address`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 创建地址信息，单个用户最多创建10个
        * @param {number} memberId int64 必填 
         * @param {*} $body
        *    linkAddressDto: LinkAddressDto  
        * @returns {void} void
        */
        async createMemberAddress(memberId, $body) {
            const path = `/api/Member/${memberId}/address`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 修改会员收货地址
        * @param {number} memberId int64 必填 
        * @param {number} addressId int64 必填 
         * @param {*} $body
        *    linkAddressDto: LinkAddressDto  
        * @returns {void} void
        */
        async updateMemberAddress(memberId, addressId, $body) {
            const path = `/api/Member/${memberId}/address/${addressId}`;
            const res = await http({
                method: put,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 修改默认地址
        * @param {number} memberId int64 必填 
        * @param {number} addressId int64 必填 
         * @returns {void} void
        */
        async changeDefaultAddress(memberId, addressId) {
            const path = `/api/Member/${memberId}/address/default/${addressId}`;
            const res = await http({
                method: put,
                url: path
            });
            return res.data;
        },

        /** 
        * 获取购药需求列表
        * @param {number} memberId int64 必填 
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    sort: number  
        *    withDetail: boolean  
        *    withPrescr: boolean  
        *    withPatient: boolean  
        *    filterOptions.startDate: date  
        *    filterOptions.endDate: date  
        *    filterOptions.status: number  
        *    filterOptions.keyWord: string  
        *    filterOptions.productName: string  
        *    filterOptions.patientName: string  
        *    filterOptions.mobile: string  
        *    filterOptions.unReply: boolean  
        *    filterOptions.beginStatus: number  
        *    filterOptions.endStatus: number  
         * @returns {void} void
        */
        async getRequirementList(memberId, $query) {
            const path = `/api/Member/${memberId}/requires`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取购药需求
        * @param {number} memberId int64 必填 
        * @param {number} requireId int64 必填 
         * @returns {void} void
        */
        async getRequirement(memberId, requireId) {
            const path = `/api/Member/${memberId}/${requireId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 会员端创建购药需求并自动生成处方
        * @param {number} memberId int64 必填 
         * @param {*} $body
        *    requireBillAndPrescrInputDto: RequireBillAndPrescrInputDto  
        * @returns {void} void
        */
        async createRequirementAndPrescr(memberId, $body) {
            const path = `/api/Member/${memberId}/CreateRequirementAndPrescr`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 删除会员地址关系信息
        * @param {number} memberId int64 必填 
        * @param {number} addressId int64 必填 
         * @returns {void} void
        */
        async deleteMemberAddress(memberId, addressId) {
            const path = `/api/Member/${memberId}/address/delete/${addressId}`;
            const res = await http({
                method: post,
                url: path
            });
            return res.data;
        },

        /** 
        * 删除会员就诊人关系信息
        * @param {number} memberId int64 必填 
        * @param {number} patientId int64 必填 
         * @returns {void} void
        */
        async deleteMemberPatient(memberId, patientId) {
            const path = `/api/Member/${memberId}/patient/delete/${patientId}`;
            const res = await http({
                method: post,
                url: path
            });
            return res.data;
        },

        /** 
        * 根据处方创建订单
        * @param {number} memberId int64 必填 
         * @param {*} $body
        *    memberPrescrOrderDto: MemberPrescrOrderDto  
        * @returns {void} void
        */
        async createOrder(memberId, $body) {
            const path = `/api/Member/${memberId}/order`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 查询单据会话内容
        * @param {number} memberId int64 必填 
        * @param {number} srcType int32 必填 
        * @param {number} srcKey int64 必填 
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    listDate: date  
        *    sort.Order: number  
        *    sort.Field: string  
         * @returns {void} void
        */
        async getMessages(memberId, srcType, srcKey, $query) {
            const path = `/api/Member/${memberId}/message/${srcType}/${srcKey}`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 单据留言
        * @param {number} memberId int64 必填 
        * @param {number} srcType int32 必填 
        * @param {number} srcKey int64 必填 
         * @param {*} $body
        *    inputDto: SendBillMessageInputDto  
        * @returns {void} void
        */
        async leaveMessage(memberId, srcType, srcKey, $body) {
            const path = `/api/Member/${memberId}/message/${srcType}/${srcKey}`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Message: {

        /** 
        * 查询会话列表
        * @param {number} userId int64 必填 
        * @param {*} $query
        *    Filter.unread: boolean  
        *    Filter.srcType: number  
        *    Filter.srcNo: string  
        *    Filter.lastSender: string  
        *    startNum: number  
        *    count: number  
        *    listDate: date  
        *    sort.Order: number  
        *    sort.Field: string  
         * @returns {void} void
        */
        async getMessageList(userId, $query) {
            const path = `/api/Message/${userId}/sessions`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 标记已读
         * @param {*} $body
        *    msgId: number[]  
        * @returns {void} void
        */
        async read($body) {
            const path = `/api/Message/read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Mobile: {

        /** 
        * 发送手机号验证码
        * @param {*} $query
        *    mobile: string  
         * @returns {void} void
        */
        async sendVerifyCode($query) {
            const path = `/api/Mobile/verifycode`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 确认验证码是否正确
        * @param {*} $query
        *    mobile: string  
        *    verifycode: string  
         * @returns {void} void
        */
        async verifyVerifyCode($query) {
            const path = `/api/Mobile/verifycode/confirm`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 通过手机号查询购药人
        * @param {string} mobile  必填 会员手机号
         * @returns {void} void
        */
        async getMember(mobile) {
            const path = `/api/Mobile/${mobile}/member`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 通过会员ID查询完整手机号
        * @param {number} memberId int64 必填 会员id
         * @returns {void} void
        */
        async getMobile(memberId) {
            const path = `/api/Mobile/member/${memberId}/number`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

    },

    Module: {

        /** 
        * 读取模块信息
         * @returns {ModuleOutputDto[]} ModuleOutputDto[]
        */
        async read() {
            const path = `/api/Admin/Module/Read`;
            const res = await http({
                method: post,
                url: path
            });
            return res.data;
        },

        /** 
        * 读取模块[用户]树数据
        * @param {*} $query
        *    userId: number  用户编号
         * @returns {object[]} object[]
        */
        async readUserModules($query) {
            const path = `/api/Admin/Module/ReadUserModules`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 读取模块[角色]树数据
        * @param {*} $query
        *    roleId: number  角色编号
         * @returns {object[]} object[]
        */
        async readRoleModules($query) {
            const path = `/api/Admin/Module/ReadRoleModules`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 读取模块功能
         * @param {*} $body
        *    request: PageRequest  
        * @returns {PageData[FunctionOutputDto2]} PageData[FunctionOutputDto2]
        */
        async readFunctions($body) {
            const path = `/api/Admin/Module/ReadFunctions`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Options: {

        /** 
        * 获取模块信息
        * @param {number} type int32 必填 
         * @returns {void} void
        */
        async queryModule(type) {
            const path = `/api/Options/QueryModule/${type}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 获取单个
        * @param {number} type int32 必填 
        * @param {number} key int32 必填 
         * @returns {void} void
        */
        async selectOne(type, key) {
            const path = `/api/Options/SelectOne/${type}/${key}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 新增一条模块/键值对
         * @param {*} $body
        *    options: Options  
        * @returns {void} void
        */
        async addModule($body) {
            const path = `/api/Options/AddModule`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 修改一条模块/键值对
         * @param {*} $body
        *    options: Options  
        * @returns {void} void
        */
        async updateModule($body) {
            const path = `/api/Options/UpdateModule`;
            const res = await http({
                method: put,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 删除一条模块/键值对
         * @param {*} $body
        *    options: Options  
        * @returns {void} void
        */
        async deleteModule($body) {
            const path = `/api/Options/DeleteModule`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Order: {

        /** 
        * 获取订单列表
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    sort: number  
        *    withDetail: boolean  
        *    withPrescr: boolean  
        *    withPatient: boolean  
        *    filterOptions.startDate: date  
        *    filterOptions.endDate: date  
        *    filterOptions.status: number  
        *    filterOptions.keyWord: string  
        *    filterOptions.productName: string  
        *    filterOptions.patientName: string  
        *    filterOptions.mobile: string  
        *    filterOptions.unReply: boolean  
        *    filterOptions.beginStatus: number  
        *    filterOptions.endStatus: number  
         * @returns {void} void
        */
        async getOrderList($query) {
            const path = `/api/orders`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取订单
        * @param {number} orderId int64 必填 
         * @returns {void} void
        */
        async getOrder(orderId) {
            const path = `/api/order/${orderId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 更新订单备注
         * @param {*} $body
        *    order: Order  
        * @returns {void} void
        */
        async updateOrderDescription($body) {
            const path = `/api/order`;
            const res = await http({
                method: put,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 创建订单
         * @param {*} $body
        *    orderDto: OrderDto  
        * @returns {void} void
        */
        async createOrder($body) {
            const path = `/api/order`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 确认发货
         * @param {*} $body
        *    confirmDeliveryInputDto: ConfirmDeliveryInputDto  
        * @returns {void} void
        */
        async confirmDelivery($body) {
            const path = `/api/order/send`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 确认收货
        * @param {*} $query
        *    orderId: number  
         * @returns {void} void
        */
        async confirmReceive($query) {
            const path = `/api/order/receive`;
            const res = await http({
                method: post,
                url: path,
                params: $query
            });
            return res.data;
        },

    },

    Pack: {

        /** 
        * 读取模块包列表信息
         * @param {*} $body
        *    request: PageRequest  页请求
        * @returns {PageData[PackOutputDto]} PageData[PackOutputDto]
        */
        async read($body) {
            const path = `/api/Admin/Pack/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Patient: {

        /** 
        * 会员端获取患者信息列表
        * @param {number} memberId int64 必填 
         * @returns {void} void
        */
        async getPatients(memberId) {
            const path = `/api/member/${memberId}/Patient`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 创建患者信息
        * @param {number} memberId int64 必填 
         * @param {*} $body
        *    patientDto: PatientDto  
        * @returns {void} void
        */
        async createPatient(memberId, $body) {
            const path = `/api/member/${memberId}/Patient`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 会员端医生端药店端获取患者信息列表
        * @param {*} $query
        *    name: string  
        *    identityNo: string  
        *    mobile: string  
         * @returns {void} void
        */
        async getPatientsAll($query) {
            const path = `/api/patients`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取患者信息
        * @param {number} patientId int64 必填 
        * @param {number} memberId int64 必填 
         * @returns {void} void
        */
        async getPatient(patientId, memberId) {
            const path = `/api/member/${memberId}/Patient/${patientId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 修改患者信息
        * @param {number} patientId int64 必填 
        * @param {number} memberId int64 必填 
         * @param {*} $body
        *    patientDto: PatientDto  
        * @returns {void} void
        */
        async updatePatient(patientId, memberId, $body) {
            const path = `/api/member/${memberId}/Patient/${patientId}`;
            const res = await http({
                method: put,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 获取患者信息
        * @param {number} patientId int64 必填 
         * @returns {void} void
        */
        async getDoctorPatient(patientId) {
            const path = `/api/Patient/${patientId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 修改默认患者
        * @param {number} patientId int64 必填 
        * @param {number} memberId int64 必填 
         * @returns {void} void
        */
        async changeDefaultPatient(patientId, memberId) {
            const path = `/api/member/${memberId}/Patient/default/${patientId}`;
            const res = await http({
                method: put,
                url: path
            });
            return res.data;
        },

    },

    Person: {

        /** 
        * 获取人员信息
        * @param {number} personId int64 必填 
         * @returns {void} void
        */
        async getPerson(personId) {
            const path = `/api/Person/${personId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 修改人员信息
        * @param {number} personId int64 必填 
         * @param {*} $body
        *    personDto: PersonDto  
        * @returns {void} void
        */
        async updatePerson(personId, $body) {
            const path = `/api/Person/${personId}`;
            const res = await http({
                method: put,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 创建人员信息
         * @param {*} $body
        *    personDto: PersonDto  
        * @returns {void} void
        */
        async createPerson($body) {
            const path = `/api/Person`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Prescr: {

        /** 
        * 获取处方信息
        * @param {number} prescrId int64 必填 
         * @returns {void} void
        */
        async getPrescr(prescrId) {
            const path = `/api/Prescr/${prescrId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 创建处方
         * @param {*} $body
        *    prescrInputDto: PrescrInputDto  
        * @returns {void} void
        */
        async createPrescr($body) {
            const path = `/api/Prescr`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Product: {

        /** 
        * 获得产品列表
        * @param {*} $query
        *    QueryCode: string  
        *    ProductNo: string  
        *    ProductName: string  
        *    CommonName: string  
        *    DrugType: string  
        *    IsFragile: string  
        *    IsColdChain: string  
        *    IsBan: string  
        *    PageNum: number  
        *    PageSize: number  
         * @returns {void} void
        */
        async getProducts($query) {
            const path = `/api/Product/GetProducts`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 单输入框快速查询产品列表
        * @param {*} $query
        *    QueryCode: string  
        *    ProductNo: string  
        *    ProductName: string  
        *    CommonName: string  
        *    DrugType: string  
        *    IsFragile: string  
        *    IsColdChain: string  
        *    IsBan: string  
        *    PageNum: number  
        *    PageSize: number  
         * @returns {void} void
        */
        async fastGetProducts($query) {
            const path = `/api/Product/FastGetProducts`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 关键字快速查询产品列表
        * @param {*} $query
        *    keyword: string  
        *    drugtype: string  
        *    isfragile: string  
        *    iscoldchain: string  
        *    start: number  
        *    count: number  
         * @returns {void} void
        */
        async getProductsByKeyWord($query) {
            const path = `/api/products`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 产品Id数组快速查询产品列表
        * @param {*} $query
        *    ids: number[]  
         * @returns {void} void
        */
        async getProductByIds($query) {
            const path = `/api/productsByIds`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取一个产品信息
        * @param {*} $query
        *    id: number  
         * @returns {void} void
        */
        async getProduct($query) {
            const path = `/api/Product/GetProduct`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 无关联获得一个产品信息
        * @param {*} $query
        *    id: number  
         * @returns {void} void
        */
        async getOneProduct($query) {
            const path = `/api/Product/GetOneProduct`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 创建一个产品
         * @param {*} $body
        *    product: Product  
        * @returns {void} void
        */
        async createProduct($body) {
            const path = `/api/Product/CreateProduct`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 修改一个产品
         * @param {*} $body
        *    product: Product  
        * @returns {void} void
        */
        async updateProduct($body) {
            const path = `/api/Product/UpdateProduct`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 批量禁用产品
         * @param {*} $body
        *    products: Product[]  
        * @returns {void} void
        */
        async banProducts($body) {
            const path = `/api/Product/BanProducts`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 批量启用产品
         * @param {*} $body
        *    products: Product[]  
        * @returns {void} void
        */
        async resetProducts($body) {
            const path = `/api/Product/ResetProducts`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Requirement: {

        /** 
        * 获取购药需求列表
         * @returns {void} void
        */
        async getRequirementList() {
            const path = `/api/Requirement`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 创建购药需求
         * @param {*} $body
        *    requireBillInputDto: RequireBillInputDto  
        * @returns {void} void
        */
        async createRequirement($body) {
            const path = `/api/Requirement`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 获取购药需求
        * @param {number} requireId int64 必填 
         * @returns {void} void
        */
        async getRequirement(requireId) {
            const path = `/api/Requirement/${requireId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 编辑并回复购药需求
         * @param {*} $body
        *    requireBillEditAndReplyDto: RequireBillEditAndReplyDto  
        * @returns {void} void
        */
        async editRequirementAndReplyMessage($body) {
            const path = `/api/Requirement/EditRequirementAndReplyMessage`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 会员确认购药需求
        * @param {number} memberId int64 必填 
         * @param {*} $body
        *    requireBillConfirmDto: RequireBillConfirmDto  
        * @returns {void} void
        */
        async confirmRequirement(memberId, $body) {
            const path = `/api/Requirement/${memberId}/ConfirmRequirement`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 店员受理
         * @param {*} $body
        *    requireBillConfirmDto: RequireBillConfirmDto  
        * @returns {void} void
        */
        async acceptRequirement($body) {
            const path = `/api/Requirement/AcceptRequirement`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 店员确认完成需求
         * @param {*} $body
        *    requireBillConfirmDto: RequireBillConfirmDto  
        * @returns {void} void
        */
        async completeRequirement($body) {
            const path = `/api/Requirement/CompleteRequirement`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 会员取消购药请求
         * @param {*} $body
        *    requireBillCancelDto: RequireBillCancelDto  
        * @returns {void} void
        */
        async cancelRequirement($body) {
            const path = `/api/Requirement/CancelRequirement`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 药店关闭购药请求
         * @param {*} $body
        *    requireBillCloseDto: RequireBillCloseDto  
        * @returns {void} void
        */
        async closeRequirement($body) {
            const path = `/api/Requirement/CloseRequirement`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Role: {

        /** 
        * 读取角色
         * @param {*} $body
        *    request: PageRequest  
        * @returns {PageData[RoleOutputDto]} PageData[RoleOutputDto]
        */
        async read($body) {
            const path = `/api/Admin/Role/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 读取角色节点
         * @returns {RoleNode[]} RoleNode[]
        */
        async readNode() {
            const path = `/api/Admin/Role/ReadNode`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 读取角色[用户]树数据
        * @param {*} $query
        *    userId: number  用户编号
         * @returns {UserRoleNode[]} UserRoleNode[]
        */
        async readUserRoles($query) {
            const path = `/api/Admin/Role/ReadUserRoles`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 新增角色
         * @param {*} $body
        *    dtos: RoleInputDto[]  新增角色信息
        * @returns {AjaxResult} AjaxResult
        */
        async create($body) {
            const path = `/api/Admin/Role/Create`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 更新角色
         * @param {*} $body
        *    dtos: RoleInputDto[]  更新角色信息
        * @returns {AjaxResult} AjaxResult
        */
        async update($body) {
            const path = `/api/Admin/Role/Update`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 删除角色
         * @param {*} $body
        *    ids: number[]  要删除的角色编号
        * @returns {AjaxResult} AjaxResult
        */
        async delete($body) {
            const path = `/api/Admin/Role/Delete`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 设置角色模块
         * @param {*} $body
        *    dto: RoleSetModuleDto  角色模块信息
        * @returns {void} void
        */
        async setModules($body) {
            const path = `/api/Admin/Role/SetModules`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    RoleEntity: {

        /** 
        * 读取角色数据权限列表信息
         * @param {*} $body
        *    request: PageRequest  页请求信息
        * @returns {PageData[EntityRoleOutputDto]} PageData[EntityRoleOutputDto]
        */
        async read($body) {
            const path = `/api/Admin/RoleEntity/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 新增角色数据权限信息
         * @param {*} $body
        *    dtos: EntityRoleInputDto[]  角色数据权限信息
        * @returns {AjaxResult} AjaxResult
        */
        async create($body) {
            const path = `/api/Admin/RoleEntity/Create`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 更新角色数据权限信息
         * @param {*} $body
        *    dtos: EntityRoleInputDto[]  角色数据权限信息
        * @returns {AjaxResult} AjaxResult
        */
        async update($body) {
            const path = `/api/Admin/RoleEntity/Update`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 删除角色数据权限信息
         * @param {*} $body
        *    ids: uuid[]  角色数据权限信息
        * @returns {AjaxResult} AjaxResult
        */
        async delete($body) {
            const path = `/api/Admin/RoleEntity/Delete`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    RoleFunction: {

        /** 
        * 读取角色信息
         * @param {*} $body
        *    request: PageRequest  
        * @returns {PageData[RoleOutputDto2]} PageData[RoleOutputDto2]
        */
        async read($body) {
            const path = `/api/Admin/RoleFunction/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 读取角色功能信息
        * @param {*} $query
        *    roleId: number  角色编号
         * @returns {PageData[FunctionOutputDto2]} PageData[FunctionOutputDto2]
        */
        async readFunctions($query) {
            const path = `/api/Admin/RoleFunction/ReadFunctions`;
            const res = await http({
                method: post,
                url: path,
                params: $query
            });
            return res.data;
        },

    },

    Security: {

        /** 
        * 检查URL授权
        * @param {*} $query
        *    url: string  要检查的URL
         * @returns {boolean} boolean
        */
        async checkUrlAuth($query) {
            const path = `/api/Security/CheckUrlAuth`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取授权信息
         * @returns {string[]} string[]
        */
        async getAuthInfo() {
            const path = `/api/Security/GetAuthInfo`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

    },

    Settings: {

        /** 
        * 读取设置
        * @param {*} $query
        *    root: string  设置根节点，如投票设置为Votes
         * @returns {void} void
        */
        async read($query) {
            const path = `/api/Admin/Settings/Read`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 保存指定设置项
         * @param {*} $body
        *    dto: SettingInputDto  设置信息
        * @returns {AjaxResult} AjaxResult
        */
        async update($body) {
            const path = `/api/Admin/Settings/Update`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Store: {

        /** 
        * 
         * @returns {void} void
        */
        async getStores() {
            const path = `/api/Store`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 查询单据留言
        * @param {number} storeId int64 必填 
        * @param {number} srcType int32 必填 
        * @param {number} srcKey int64 必填 
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    listDate: date  
        *    sort.Order: number  
        *    sort.Field: string  
         * @returns {void} void
        */
        async getMessages(storeId, srcType, srcKey, $query) {
            const path = `/api/Store/${storeId}/message/${srcType}/${srcKey}`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 发送单据消息
        * @param {number} srcType int32 必填 
        * @param {number} srcKey int64 必填 
        * @param {string} storeId  必填 
         * @param {*} $body
        *    inputDto: SendBillMessageInputDto  
        * @returns {void} void
        */
        async sendBillMsg(srcType, srcKey, storeId, $body) {
            const path = `/api/Store/${storeId}/message/${srcType}/${srcKey}`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    StoreOrder: {

        /** 
        * 获取订单列表
        * @param {number} storeId int64 必填 
        * @param {*} $query
        *    startNum: number  
        *    count: number  
        *    sort: number  
        *    withDetail: boolean  
        *    withPrescr: boolean  
        *    withPatient: boolean  
        *    filterOptions.startDate: date  
        *    filterOptions.endDate: date  
        *    filterOptions.status: number  
        *    filterOptions.keyWord: string  
        *    filterOptions.productName: string  
        *    filterOptions.patientName: string  
        *    filterOptions.mobile: string  
        *    filterOptions.unReply: boolean  
        *    filterOptions.beginStatus: number  
        *    filterOptions.endStatus: number  
         * @returns {void} void
        */
        async getOrderList(storeId, $query) {
            const path = `/api/store/${storeId}/orders`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取处方列表
        * @param {number} storeId int64 必填 
        * @param {*} $query
        *    start: number  
        *    count: number  
        *    listDate: date  
        *    sort: string[]  
        *    filter.startDate: date  
        *    filter.endDate: date  
        *    filter.status: number  
        *    filter.keyWord: string  
        *    filter.productName: string  
        *    filter.patientName: string  
        *    options.withDetail: boolean  
        *    options.withPatient: boolean  
        *    options.withAttachFile: boolean  
         * @returns {void} void
        */
        async getPrescrList(storeId, $query) {
            const path = `/api/store/${storeId}/prescrs`;
            const res = await http({
                method: get,
                url: path,
                params: $query
            });
            return res.data;
        },

        /** 
        * 获取订单
        * @param {number} orderId int64 必填 
        * @param {number} storeId int64 必填 
         * @returns {void} void
        */
        async getOrder(orderId, storeId) {
            const path = `/api/store/${storeId}/order/${orderId}`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 创建订单
         * @param {*} $body
        *    orderDto: OrderDto  
        * @returns {void} void
        */
        async createOrder($body) {
            const path = `/api/store/order`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 药店端获取未处理订单
        * @param {number} storeId int64 必填 
         * @returns {StoreOrderPendOutputDto} StoreOrderPendOutputDto
        */
        async getPendOrder(storeId) {
            const path = `/api/store/${storeId}/pending`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 药店端确认订单收款
        * @param {number} orderId int64 必填 
         * @returns {void} void
        */
        async confirmPay(orderId) {
            const path = `/api/store/order/confirmpay/${orderId}`;
            const res = await http({
                method: post,
                url: path
            });
            return res.data;
        },

        /** 
        * 订单审方（推送订单到零售erp）
         * @param {*} $body
        *    orderReviewInputDto: OrderReviewInputDto  
        * @returns {void} void
        */
        async review($body) {
            const path = `/api/order/review`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 订单配药完成（推送配送订单到配送中心系统）
         * @param {*} $body
        *    orderDispatchInputDto: OrderDispatchInputDto  
        * @returns {void} void
        */
        async dispatch($body) {
            const path = `/api/order/dispatch`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    Test: {

        /** 
        * 
         * @returns {void} void
        */
        async initRoleModules() {
            const path = `/api/Test/InitRoleModules`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

        /** 
        * 
         * @returns {string} string
        */
        async test01() {
            const path = `/api/Test/Test01`;
            const res = await http({
                method: get,
                url: path
            });
            return res.data;
        },

    },

    User: {

        /** 
        * 读取用户列表信息
         * @param {*} $body
        *    request: PageRequest  
        * @returns {PageData[UserOutputDto]} PageData[UserOutputDto]
        */
        async read($body) {
            const path = `/api/Admin/User/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 读取用户节点信息
         * @param {*} $body
        *    group: FilterGroup  
        * @returns {ListNode[]} ListNode[]
        */
        async readNode($body) {
            const path = `/api/Admin/User/ReadNode`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 新增用户信息
         * @param {*} $body
        *    dtos: UserInputDto[]  用户信息
        * @returns {AjaxResult} AjaxResult
        */
        async create($body) {
            const path = `/api/Admin/User/Create`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 更新用户信息
         * @param {*} $body
        *    dtos: UserInputDto[]  用户信息
        * @returns {AjaxResult} AjaxResult
        */
        async update($body) {
            const path = `/api/Admin/User/Update`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 删除用户信息
         * @param {*} $body
        *    ids: number[]  用户信息
        * @returns {AjaxResult} AjaxResult
        */
        async delete($body) {
            const path = `/api/Admin/User/Delete`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 设置用户角色
         * @param {*} $body
        *    dto: UserSetRoleDto  用户角色信息
        * @returns {AjaxResult} AjaxResult
        */
        async setRoles($body) {
            const path = `/api/Admin/User/SetRoles`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 设置用户模块
         * @param {*} $body
        *    dto: UserSetModuleDto  用户模块信息
        * @returns {AjaxResult} AjaxResult
        */
        async setModules($body) {
            const path = `/api/Admin/User/SetModules`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

    UserFunction: {

        /** 
        * 读取用户信息
         * @param {*} $body
        *    request: PageRequest  
        * @returns {PageData[UserOutputDto2]} PageData[UserOutputDto2]
        */
        async read($body) {
            const path = `/api/Admin/UserFunction/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 读取用户功能信息
        * @param {*} $query
        *    userId: number  用户编号
         * @returns {PageData[FunctionOutputDto2]} PageData[FunctionOutputDto2]
        */
        async readFunctions($query) {
            const path = `/api/Admin/UserFunction/ReadFunctions`;
            const res = await http({
                method: post,
                url: path,
                params: $query
            });
            return res.data;
        },

    },

    UserRole: {

        /** 
        * 读取用户角色信息
         * @param {*} $body
        *    request: PageRequest  
        * @returns {PageData[UserRoleOutputDto]} PageData[UserRoleOutputDto]
        */
        async read($body) {
            const path = `/api/Admin/UserRole/Read`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

        /** 
        * 更新用户角色信息
         * @param {*} $body
        *    dtos: UserRoleInputDto[]  用户角色信息
        * @returns {AjaxResult} AjaxResult
        */
        async update($body) {
            const path = `/api/Admin/UserRole/Update`;
            const res = await http({
                method: post,
                url: path,
                data: $body
            });
            return res.data;
        },

    },

}


// 注册全局命令空间
(globa || globaThis || window || this).api = api;

export default api;
