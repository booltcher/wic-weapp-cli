# wic-weapp-cli

<p align="left">
  <a href="https://github.com/blcher/wic-weapp-cli/blob/master/CHANGELOG.md"><img src="https://img.shields.io/badge/Changelog-blue.svg" alt="Changelog"></a>
  <a href="https://github.com/blcher/wic-weapp-template"><img src="https://img.shields.io/badge/Template-Wic-orange.svg" alt="Base template"></a>
<a href="https://github.com/blcher/wic-weapp-cli/blob/master/README.CN.md"><img src="https://img.shields.io/badge/Docs-%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3-red.svg" alt="Chinese Docs"></a>
<a href="https://github.com/blcher/wic-weapp-cli#readme"><img src="https://img.shields.io/badge/Docs-English-yellow.svg" alt="English Docs"></a>
</p>

(注意: 仍处于开发阶段, 请勿用于生产!!! :dash::dash::dash:)

<p>一个用于快速生成小程序项目的脚手架。
</p>

> 前置条件: `node` `git`

# 安装

```
npm install wic-weapp-cli -g
```

# 使用

## 版本

```
wic --version
wic -V
```

<!-- > note: only version before 6.1.0 of commander is supported currently (#FIXME: just check out version 8.1.0 can not) -->

## 选项

| short | long     | descirption                                                        | scope       |
| ----- | -------- | ------------------------------------------------------------------ | ----------- |
| -d    | --dest   | 位置。                                                             | page        |
| -a    | --add    | 从内置模板中添加...                                                | page, com   |
| -c    | --create | 新建...                                                            | page, com   |
| -r    | --remove | 更新后自动删除原文件。                                             | update-icon |
| -l    | --list   | 定义一个页面为分页列表, 包含有 _Paging Class_ 和其他分页相关配置。 | page        |
| -f    | --form   | 定义一个页面为表单页, 包含有表单验证方法。                         | page        |

<!-- | -n    | --network | auto import _Request Class_                                               | page, com   | -->

# 指令

## 新建项目

生成小程序项目，项目模板来源于 [wic-weapp-template](https://github.com/boutstruggle/wic-weapp-template.git)

```
wic create <projectName>
```

<!-- The cases below can help you to make choices:

- When you: confirm using the native weapp tabbar
  - It will: generate those pages which is in tabbar list, and set `tabBar` in file **app.json**, then import them in `pages` automatically -->

## 页面

默认引入`toast`相关方法，以及网络请求方法。

```
wic page <pageName> [options]
```

### options:

| short | long     | descirption                                                        | scope       |
| ----- | -------- | ------------------------------------------------------------------ | ----------- |
| -a    | --add    | 从内置页面中引入。                                                 | page, com   |
| -c    | --create | 新建自定义页面。                                                   | page, com   |
| -l    | --list   | 定义一个页面为分页列表, 包含有 _Paging Class_ 和其他分页相关配置。 | page, com   |
| -f    | --form   | 定义一个页面为表单页, 包含有表单验证方法。                         | update-icon |

## 组件

```
wic com <componentName> [-d]
```

## 函数

```
wic util <utilName> [-a | -c]
```

## 模块

```
wic module <module> [-m, -t]
```

## 配置

- No key & value: Browse all configurations.
- Just key: Check current configure about [key]
- Key & Value: Set the [value] for [key]

```
wic config [configKey] [configValue]

example:
wic config icon-file-path C:/Users/bootcher/Desktop/download.zip
```

### 默认键:

- icon-input-path
- icon-input-name

## 更新字体图标

与 iconfont 配合使用。 [iconfont](https://www.iconfont.cn/)

```
wic update-icon [option]
```

### Options:

| short | long     | descirption                                                |
| ----- | -------- | ---------------------------------------------------------- |
| -r    | --remove | 更新后自动删除原文件, **注意：此"删除"的含义是彻底删除。** |

## Modules

### address

### order

##
