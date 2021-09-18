# wic-weapp-cli

<p align="left">
  <a href="https://github.com/blcher/wic-weapp-cli/blob/master/CHANGELOG.md"><img src="https://img.shields.io/badge/Changelog-blue.svg" alt="Changelog"></a>
  <a href="https://github.com/blcher/wic-weapp-template"><img src="https://img.shields.io/badge/Template-Wic-orange.svg" alt="Base template"></a>
  <!-- <a href="https://github.com/blcher/wic-weapp-cli/blob/master/README.CN.md"><img src="https://img.shields.io/badge/Docs-%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3-red.svg" alt="Chinese Docs"></a>
  <a href="https://github.com/blcher/wic-weapp-cli#readme"><img src="https://img.shields.io/badge/Docs-English-yellow.svg" alt="English Docs"></a> -->
</p>

(Note: still in `Dev`, use it carefully!!! :hand::dash::dash::dash:)

<p>A scaffold uesd to fast develop weapp projects.
</p>

> prerequisite: Node Git

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

<!-- ## Options

| short | long     | descirption                                                               | scope       |
| ----- | -------- | ------------------------------------------------------------------------- | ----------- |
| -a    | --add    | add from Built-in                                                         | com         |
| -c    | --create | create new one                                                            | com         |
| -r    | --remove | remove iconfont file after updating                                       | update-icon |
| -d    | --dest   | destination                                                               | page        |
| -l    | --list   | define a page as a paging list, within _Paging Class_ and list component. | page        |
| -f    | --form   | define a page as a form page, within the form validator                   | page        |
| -rn   | --rename | move page into another directory                                          | page        |
| -m    | --move   | rename                                                                    | page        | -->

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

## Page
## Create page
```
wic create-page <pageName> [ -d | -f | -l ]
```
### options:

| short | long   | descirption                                                               |
| ----- | ------ | ------------------------------------------------------------------------- |
| -l    | --list | create a page as a paging list, within _Paging Class_ and list component. |
| -f    | --form | create a page as a form page, within the form validator                   |
| -d    | --dest | destination                                                               |

## Rename page
```
wic rename-page <page-destination> <new name>
```
## Move page
```
wic move-page <current-destination> <target-destination>
```
## Delete page
```
wic delete-page <page-destination>
```

## Component

## Add built-in component
Refer to: [Components](https://github.com/blcher/wic-weapp-template.git)
```
wic add-com <componentName>
```

## Create new component
```
wic create-com <componentName>
```

## Util

## Add built-in util

Refer to: [Utils](https://github.com/blcher/wic-weapp-template.git)
```
wic util -a <utilName>
```

## Create util
```
wic util -c <utilName>
```

## Add built-in module

Refer to: [Modules](https://github.com/blcher/wic-weapp-template.git)
```
wic add-module <moduleName> [-m, -t]
```
## Set global config

- No key & No value: Browse all configurations.
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

To implement easy icon update with [iconfont](https://www.iconfont.cn/) , only need the following steps: :see_no_evil:
1. Set `icon-file-path` & `icon-file-name`.
2. Download files from iconfont to `icon-file-path`.
3. Execute the following command.
```
wic update-icon [-r]
```
<!-- Default icon: -->


### Options:

| short | long     | descirption                                                                                         |
| ----- | -------- | --------------------------------------------------------------------------------------------------- |
| -r    | --remove | remove iconfont file after updating, **Notice: This 'remove' means that deleting file Thoroughly!** |

## Modules :coffee:

### address :coffee:

### order :coffee:

### search :coffee:
### wallet :coffee:

### message :coffee:
### feedback :coffee:
### evaluate :coffee:
### category :coffee:
### product :coffee:

## Components :coffee:
### Address-picker :coffee:
### Coupon :coffee:
### Product-card :coffee:
## Utils
### AutoUpdate
### FormValidator
### ManualChooseLocation
### Storage
### getHeaderHeight