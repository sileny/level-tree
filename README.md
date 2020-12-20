# level-tree

A tree with level-classname that can be used for custom.


# install

```
npm i @silen/level-tree

// or

yarn add @silen/level-tree
```


# example

```vue
<a-el-tree
  :indent="30"
  inline
  level
  ref="tree"
  :data="data"
  show-checkbox
  node-key="authCode"
  default-expand-all
  :default-checked-keys="defaultCheckedKeys"
  :expand-on-click-node="false"
  :class="CheckboxClass"
>
  <span class="custom-tree-node" slot-scope="{ data }">
    <span>{{ data.name }}</span>
  </span>
</a-el-tree>
```

- `inline`: `Boolean` 类型，最后的每一个节点将会添加 `inline-node` 类名
- `level`: `Boolean` 类型。为每一级节点都添加上 `level-1/2/3..-node` 类名
- `data`: `Array<T>` 对象数组
- `defaultCheckedKeys`: `Array` 类型

`CheckboxClass` 是计算属性，可以定义 `classname`，比如，
```
export default {
  computed: {
    CheckboxClass() {
      return [`checkbox-classname1`];
    }
  }
}
```

# style

```
.inline-node { /* inline为true时定义的样式 */
  display: inline-block;
}
.a-el-checkbox__original { /* 不显示原始的checkbox样式 */
  display: none;
}
```

# more

[tree](https://element.eleme.io/#/zh-CN/component/tree)
