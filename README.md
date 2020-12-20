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

# more

[tree](https://element.eleme.io/#/zh-CN/component/tree)
