<template>
  <div style="margin: 20px;">
    <a-el-tree
      ref="tree"
      :data="children"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data, context }">
        <span>{{ node.label }}</span>
        <span
          @click="() => remove(node, data)">
          Delete
        </span>
      </span>
    </a-el-tree>
  </div>
</template>

<script>
  export default {
    label: 'App',
    data() {
      return {
        children: [{
          "createdUser": null,
          "updatedUser": null,
          "createdTime": null,
          "updatedTime": null,
          "id": "1338687705013297153",
          "authCode": "F001",
          "label": "系统权限管理",
          "url": "/",
          "parentId": "0",
          "enable": true,
          "deleted": false,
          "children": [{
            "createdUser": null,
            "updatedUser": null,
            "createdTime": null,
            "updatedTime": null,
            "id": "1338687705072017410",
            "authCode": "F001001",
            "label": "组织管理",
            "url": "/rbac/organize",
            "parentId": "1338687705013297153",
            "enable": true,
            "deleted": false,
            "children": [{
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705231400961",
              "authCode": "F001001001",
              "label": "查询",
              "url": "/rbac/organize/query",
              "parentId": "1338687705072017410",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705256566786",
              "authCode": "F001001002",
              "label": "修改",
              "url": "/rbac/organize/update",
              "parentId": "1338687705072017410",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705344647170",
              "authCode": "F001001003",
              "label": "删除",
              "url": "/rbac/organize/delete",
              "parentId": "1338687705072017410",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705399173121",
              "authCode": "F001001004",
              "label": "新增",
              "url": "/rbac/organize/add",
              "parentId": "1338687705072017410",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705432727554",
              "authCode": "F001001005",
              "label": "导入Execl",
              "url": "/rbac/organize/upload",
              "parentId": "1338687705072017410",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705504030721",
              "authCode": "F001001006",
              "label": "下载Execl模板",
              "url": "/rbac/organize/download",
              "parentId": "1338687705072017410",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705545973761",
              "authCode": "F001001007",
              "label": "保存",
              "url": "/rbac/organize/save/orgAndStaff",
              "parentId": "1338687705072017410",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }],
            "checked": true
          }, {
            "createdUser": null,
            "updatedUser": null,
            "createdTime": null,
            "updatedTime": null,
            "id": "1338687705579528193",
            "authCode": "F001002",
            "label": "人员管理",
            "url": "/rbac/staff",
            "parentId": "1338687705013297153",
            "enable": true,
            "deleted": false,
            "children": [{
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705625665537",
              "authCode": "F001002001",
              "label": "查询",
              "url": "/rbac/staff/query",
              "parentId": "1338687705579528193",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705772466178",
              "authCode": "F001002002",
              "label": "修改",
              "url": "/rbac/staff/update",
              "parentId": "1338687705579528193",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705806020610",
              "authCode": "F001002003",
              "label": "删除",
              "url": "/rbac/staff/delete",
              "parentId": "1338687705579528193",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705881518082",
              "authCode": "F001002004",
              "label": "新增",
              "url": "/rbac/staff/add",
              "parentId": "1338687705579528193",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687705923461122",
              "authCode": "F001002005",
              "label": "上传图片",
              "url": "/rbac/staff/upload",
              "parentId": "1338687705579528193",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }],
            "checked": true
          }, {
            "createdUser": null,
            "updatedUser": null,
            "createdTime": null,
            "updatedTime": null,
            "id": "1338687705961209857",
            "authCode": "F001003",
            "label": "角色管理",
            "url": "/rbac/role",
            "parentId": "1338687705013297153",
            "enable": true,
            "deleted": false,
            "children": [{
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706045095938",
              "authCode": "F001003001",
              "label": "查询",
              "url": "/rbac/role/query",
              "parentId": "1338687705961209857",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706074456066",
              "authCode": "F001003002",
              "label": "修改",
              "url": "/rbac/role/update",
              "parentId": "1338687705961209857",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706099621889",
              "authCode": "F001003003",
              "label": "删除",
              "url": "/rbac/role/delete",
              "parentId": "1338687705961209857",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706175119362",
              "authCode": "F001003004",
              "label": "新增",
              "url": "/rbac/role/add",
              "parentId": "1338687705961209857",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }],
            "checked": true
          }, {
            "createdUser": null,
            "updatedUser": null,
            "createdTime": null,
            "updatedTime": null,
            "id": "1338687706233839618",
            "authCode": "F001004",
            "label": "账号管理",
            "url": "/rbac/user",
            "parentId": "1338687705013297153",
            "enable": true,
            "deleted": false,
            "children": [{
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706305142786",
              "authCode": "F001004001",
              "label": "查询",
              "url": "/rbac/user/query",
              "parentId": "1338687706233839618",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706397417474",
              "authCode": "F001004002",
              "label": "修改",
              "url": "/rbac/user/update",
              "parentId": "1338687706233839618",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706460332033",
              "authCode": "F001004003",
              "label": "删除",
              "url": "/rbac/user/delete",
              "parentId": "1338687706233839618",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706493886465",
              "authCode": "F001004004",
              "label": "新增",
              "url": "/rbac/user/add",
              "parentId": "1338687706233839618",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706531635201",
              "authCode": "F001004005",
              "label": "创建账号",
              "url": "/rbac/user/create",
              "parentId": "1338687706233839618",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }],
            "checked": true
          }, {
            "createdUser": null,
            "updatedUser": null,
            "createdTime": null,
            "updatedTime": null,
            "id": "1338687706556801025",
            "authCode": "F001005",
            "label": "功能项管理",
            "url": "/rbac/func",
            "parentId": "1338687705013297153",
            "enable": true,
            "deleted": false,
            "children": [{
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706623909889",
              "authCode": "F001005001",
              "label": "查询",
              "url": "/rbac/func/query",
              "parentId": "1338687706556801025",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706674241538",
              "authCode": "F001005002",
              "label": "初始化",
              "url": "/rbac/func/init",
              "parentId": "1338687706556801025",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }],
            "checked": true
          }, {
            "createdUser": null,
            "updatedUser": null,
            "createdTime": null,
            "updatedTime": null,
            "id": "1338687706745544705",
            "authCode": "F001006",
            "label": "数据权限管理",
            "url": "/rbac/dataAuth",
            "parentId": "1338687705013297153",
            "enable": true,
            "deleted": false,
            "children": [{
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706770710529",
              "authCode": "F001006001",
              "label": "查询",
              "url": "/rbac/dataAuth/query",
              "parentId": "1338687706745544705",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }, {
              "createdUser": null,
              "updatedUser": null,
              "createdTime": null,
              "updatedTime": null,
              "id": "1338687706833625090",
              "authCode": "F001006002",
              "label": "保存",
              "url": "/rbac/dataAuth/save",
              "parentId": "1338687706745544705",
              "enable": true,
              "deleted": false,
              "children": null,
              "checked": true
            }],
            "checked": true
          }],
          "checked": true
        }],
        treeList: []
      };
    },
    created() {
      // setInterval(() => {
      //   console.log(this.$refs.elTree.getCheckedNodes());
      // }, 1000);
      console.log(this.treeToList(this.children, 1));
    },
    mounted() {
      this.$nextTick(() => {
        this.treeList.find((item, index) => {
          // console.log(item.grade,item.modelIndexName,index)
          if (item.grade === 1) {
            // this.$refs.tree.treeItems[index].style.backgroundColor = '#f00'
          } else if (item.grade === 2) {
            this.$refs.tree.treeItems[index].classList.add('level-2-node');
            // this.$refs.tree.treeItems[index].style.backgroundColor = '#00f'
          } else if (item.grade === 3) {
            // console.log(this.$refs.tree.treeItems[index]);
            // const el = this.$refs.tree.treeItems[index];
            // el.classList.add('inline-node');
            this.$refs.tree.treeItems[index].style.display = 'inline-block';
            // this.$refs.tree.treeItems[index].style.backgroundColor = '#acf'
          }
        })
      });
    },
    methods: {
      append(data) {
        console.log(data);
      },

      remove(node, data, vm) {
        console.log(node, data, vm);
      },

      renderContent(h, arg) {
        console.log(arg);
      },

      /**
       * 树转list
       */
      treeToList(tree, grade) {
        for (var i in tree) {
          var node = tree[i];
          this.treeList.push({
            ...node,
            grade
          })
          if (node.children && node.children.length !== 0) {
            this.toListDF(node.children, this.treeList, node.id, grade + 1); // 遍历子树,并加入到list中.
          }
        }
        return this.treeList;
      },


      /**
       * 深度优先遍历树
       * 一个递归方法
       * @params tree:要转换的树结构数据
       * @params list:保存结果的列表结构数据，初始传list = []
       * @params parentId:当前遍历节点的父级节点id，初始为null(因为根节点无parentId)
       **/
      toListDF(tree, list, parentId, grade) {
        for (var i in tree) { // 遍历最上层
          // 将当前树放入list中
          var node = tree[i];
          list.push({
            ...node,
            grade
          });
          // 如果有子结点,再遍历子结点
          if (node.children && node.children.length !== 0) {
            this.toListDF(node.children, list, node.id, grade + 1) // 递归
          }
        }
      },
    }
  }
</script>

<style>
  .inline-node {
    display: inline-block;
  }
  .el-tree-node:focus>.el-tree-node__content,
  .el-tree-node__content:hover {
    background-color: transparent;
  }
</style>
