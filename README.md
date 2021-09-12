# wic-weapp-cli

<p align="left">
  <a href="https://github.com/blcher/wic-weapp-cli/blob/master/CHANGELOG.md"><img src="https://img.shields.io/badge/Changelog-blue.svg" alt="Changelog"></a>
  <a href="https://github.com/blcher/wic-weapp-template"><img src="https://img.shields.io/badge/Template-Wic-orange.svg" alt="Base template"></a>
  <a href="https://github.com/blcher/wic-weapp-cli/blob/master/README.CN.md"><img src="https://img.shields.io/badge/Docs-%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3-red.svg" alt="Chinese Docs"></a>
  <a href="https://github.com/blcher/wic-weapp-cli#readme"><img src="https://img.shields.io/badge/Docs-English-yellow.svg" alt="English Docs"></a>
</p>

(Note: still in `Dev`, use it carefully!!! :hand::dash::dash::dash:)

<p>A scaffold uesd to fast develop weapp projects.
</p>

> prerequisite: `Node` `Git`

# Installation

```
npm install wic-weapp-cli -g
```

# Usage

## Version

```
wic --version
wic -V
```

<!-- > note: only version before 6.1.0 of commander is supported currently (#FIXME: just check out version 8.1.0 can not) -->

## Options

| short | long     | descirption                                                               | scope       |
| ----- | -------- | ------------------------------------------------------------------------- | ----------- |
| -d    | --dest   | destination                                                               | create-page |
| -a    | --add    | add from Built-in                                                         | com         |
| -c    | --create | create new one                                                            | com         |
| -r    | --remove | remove iconfont file after updating                                       | update-icon |
| -l    | --list   | define a page as a paging list, within _Paging Class_ and list component. | create-page |
| -f    | --form   | define a page as a form page, within the form validator                   | create-page |

<!-- | -n    | --network | auto import _Request Class_                                               | page, com   | -->

# Commands

## Create new project

generate a new weapp project with the template downloaded from :trophy: [wic-weapp-template](https://github.com/blcher/wic-weapp-template.git)

```
wic init <projectName>
```

<!-- The cases below can help you to make choices:

- When you: confirm using the native weapp tabbar
  - It will: generate those pages which is in tabbar list, and set `tabBar` in file **app.json**, then import them in `pages` automatically -->

## Create new page

```
wic create-page <pageName> [options]
```

### options:

| short | long   | descirption                                                               |
| ----- | ------ | ------------------------------------------------------------------------- |
| -l    | --list | define a page as a paging list, within _Paging Class_ and list component. |
| -f    | --form | define a page as a form page, within the form validator                   |
| -d    | --dest | destination                                                               |

## Create new component

```
wic com <componentName> [-d]
```

## Create new util function

```
wic util <utilName> [-a | -c]
```

## Add build-in module

```
wic module <module> [-m, -t]
```

### options:

| short | long     | descirption                                                               |
| ----- | -------- | ------------------------------------------------------------------------- |


## Set global config

- No key & value: Browse all configurations.
- Just key: Check current configure about [key]
- Key & Value: Set the [value] for [key]

```
wic config [configKey] [configValue]

// Example:
wic config icon-file-path C:/Users/bootcher/Desktop/download.zip
```

### Default Keys:

- icon-input-path
- icon-input-name

## Update icon font

use this command with [iconfont](https://www.iconfont.cn/) :see_no_evil:

```
wic update-icon [option]
```

### Options:

| short | long     | descirption                                                                                         |
| ----- | -------- | --------------------------------------------------------------------------------------------------- |
| -r    | --remove | remove iconfont file after updating, **Notice: This 'remove' means that deleting file Thoroughly!** |

## Modules :coffee:

### address :coffee:

### order :coffee:

##
