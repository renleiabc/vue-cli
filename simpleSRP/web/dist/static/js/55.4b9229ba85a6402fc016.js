webpackJsonp([55],{"42iU":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ZoQJ"),i={data:function(){return{indexLink:"1",createDialog:!1,loading:!0,projectName:"",labelWidth:"120px",status:"",timeValue:"",readonly:!1,project_id:"",isCount:!1,per:0,total:0,options:[],archived:[],tableData:[],indexes:"",currentPage:1,archived_project:[],pickerOptions:Object(s.i)(),obj:{name:"",archive_start:"",archive_end:"",status:1,sort:"",page:0},ruleForm:{name:"",describe:""},isLoading:!1,roleNum:""}},created:function(){var t=this.obj;this.getProjectSpaceData(t),this.$store.dispatch("getProjectStatus"),this.$store.dispatch("getUserinfo"),this.userinfo(),this.$store.dispatch("getArchivesave")},watch:{STORE_THEME_LANG:{handler:function(t,e){"zh"===this.STORE_THEME_LANG&&(this.labelWidth="120px"),"en"===this.STORE_THEME_LANG&&(this.labelWidth="200px")}}},mounted:function(){"zh"===this.STORE_THEME_LANG&&(this.labelWidth="120px"),"en"===this.STORE_THEME_LANG&&(this.labelWidth="200px")},methods:{userinfo:function(){this.roleNum=JSON.parse(window.sessionStorage.getItem("userinfo")).role},getProjectSpaceData:function(t){var e=this;this.$get("/project/archive",t).then(function(t){if(200===t.code){e.loading=!1,e.tableData=t.data.project_space;var a=t.data.total_count,s=t.data.per_page;a<=s?e.isCount=!1:(e.isCount=!0,e.per=s,e.total=a)}else e.$message({message:t.message,type:"error"})})},sortTable:function(t){"descending"===t.order?this.obj.sort="-"+t.prop:this.obj.sort=t.prop,this.search()},reset:function(){var t={name:"",archive_start:"",archive_end:"",status:1,page:0};this.obj=t,this.timeValue="",this.currentPage=1,this.getProjectSpaceData(t)},search:function(){""===this.timeValue?(this.obj.archive_start="",this.obj.archive_end=""):(this.obj.archive_start=this.timeValue[0],this.obj.archive_end=this.timeValue[1]),this.currentPage=1,this.obj.page=0;var t=this.obj;this.getProjectSpaceData(t)},indexMethod:function(t){return t+1},handleSelectionChange:function(t){this.archived=t},openFile:function(){if(this.archived_project=[],0===this.archived.length)this.$message({message:this.$t("views.dialogText.archived"),type:"warning"});else{var t=this;if(this.archived.forEach(function(e,a){var s=e.status,i=e.id;"0"===s&&t.archived_project.push(i)}),0===this.archived_project.length)this.$message({message:this.$t("views.dialogText.archived"),type:"warning"});else{var e=this.archived_project;console.log(e),this.projectSetting(e)}}},fileClick:function(t){var e=[];e.push(t),this.projectSetting(e)},projectCurrentChange:function(t){this.$set(this.obj,"page",t);var e=this.obj;this.getProjectSpaceData(e)},indexActive:function(){window.localStorage.setItem("activeName","first")}},components:{},computed:{projectStatus:function(){return this.$store.getters.postProjectStatus},archivesave:function(){return this.$store.getters.postArchivesave}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"views-project-space"},[a("div",{staticClass:"tab-select"},[a("div",[a("span",{staticClass:"tab-select-title"},[t._v(t._s(t.$t("views.projectContent.projectName")))]),t._v(" "),a("el-input",{staticClass:"views-input-text",attrs:{placeholder:t.$t("views.projectContent.inputKeyword")},model:{value:t.obj.name,callback:function(e){t.$set(t.obj,"name",e)},expression:"obj.name"}})],1),t._v(" "),a("div",[a("span",{staticClass:"tab-select-title"},[t._v("归档时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"daterange",editable:!1,"range-separator":"-","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":t.$t("views.button.startDate"),"end-placeholder":t.$t("views.button.endDate"),"default-time":["00:00:00","23:59:59"]},model:{value:t.timeValue,callback:function(e){t.timeValue=e},expression:"timeValue"}})],1),t._v(" "),a("div",[a("el-button",{staticClass:"btn light small",on:{click:t.reset}},[t._v(t._s(t.$t("views.button.reset")))]),t._v(" "),a("el-button",{staticClass:"btn light small",on:{click:t.search}},[t._v(t._s(t.$t("views.button.search")))])],1)]),t._v(" "),a("div",{staticClass:"views-table-content"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tab-content",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",border:""},on:{"sort-change":t.sortTable,"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{label:t.$t("views.projectContent.serial"),width:"50",type:"index",index:t.indexMethod,"header-align":"center",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.projectContent.projectName"),"header-align":"center",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticClass:"views-table-a",attrs:{to:{name:"archivedProjects"}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.development.status"),"header-align":"center",align:"center",width:"100","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{"text-align":"left"}},["0"==e.row.status?a("i",{staticClass:"iconfont icon-kaifa views-icon-kaifa"}):t._e(),t._v(" "),0==e.row.status?a("span",[t._v(t._s(t.$t("views.status.development")))]):t._e(),t._v(" "),"1"==e.row.status?a("i",{staticClass:"iconfont icon-yiguidang views-icon-yiguidang"}):t._e(),t._v(" "),1==e.row.status?a("span",[t._v("已归档")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"archive_at",sortable:"custom",label:"归档时间","header-align":"center",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"describe",label:t.$t("views.projectContent.description"),"show-overflow-tooltip":"","header-align":"center",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("views.projectContent.documentation"),"header-align":"center",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"views-table-link",attrs:{href:e.row.document,target:"_blank"}},[t._v(t._s(e.row.document))])]}}])}),t._v(" "),a("div",{attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"views-empty"},[a("span",{staticClass:"views-empty-table"}),t._v(" "),a("p",{staticClass:"views-empty-text"},[t._v(t._s(t.$t("views.table.noData")))])])])],1),t._v(" "),a("div",{staticClass:"views-page"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.isCount,expression:"isCount"}],attrs:{"page-size":t.per,layout:"prev, pager, next",total:t.total,"current-page":t.currentPage},on:{"current-change":t.projectCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1)])])},staticRenderFns:[]},o=a("C7Lr")(i,n,!1,null,null,null);e.default=o.exports}});