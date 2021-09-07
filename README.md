# wic-applet-cli
<p align="left">
  <a href="https://github.com/boutstruggle/wic-applet-cli/blob/main/CHANGELOG.md"><img src="https://img.shields.io/badge/Changelog-blue.svg" alt="Changelog"></a>
  <a href="https://github.com/boutstruggle/wic-applet-cli/blob/main/CHANGELOG.md"><img src="https://img.shields.io/badge/base-Wic-orange.svg" alt="Base template"></a>
</p>

(Note: still in `Dev`, downloading it carefully!!!)
A cli for fast generating applet projects, which import Vant Weapp as UI framework.

> prerequisite: `node` `git`

### Install
```
npm install wic-applet-cli -g
```

## Usage

### Version

```
wic --version
wic -V
```

<!-- ### Options(public)

> note: only version before 6.1.0 of commander is supported currently (#FIXME: just try version 8.1.0 can not)

- `-d` `--dest`: specify a destination folder
- `-a` `--add`: add a exist util, supported utils list
- `-c` `--create`:
- `-m` `--mode`: specify a destination folder
- `-t` `--type`: specify a type for components, supported value: base, busi -->

### Commands
#### create new project

generate a new applet project with the template downloaded from [wic-applet-template](https://github.com/boutstruggle/wic-applet-template.git)

```
wic create <projectName>
```
The cases below can help you to make choices: 

- When you: confirm using the native applet tabbar
  - It will: generate those pages which is in tabbar list, and set `tabBar` in file **app.json**, then import them in `pages` automatically

<!-- - When you: confirm using the native applet tabbar
  - It will: generate those pages which is in tabbar list, and set `tabBar` in file **app.json**, then import them in `pages` automatically -->

<!-- After exec the instruction above, there will be several inquiries in a series:
- application name
- tabbar
- tabbar list
- select the modules you need(more info refer to <a href='#modules'>Modules</a>)
  - ( ) Address
  - ( ) Message
  - ( ) order
  - ...
- ... -->
---

#### create new page

```
wic page <projectName> [options]
```
##### options:
- `-n` `--network`: auto import Http *Request Class*
- `-l` `--list`: define a page as a paging list, within *Paging Class* and list component.
- `-f` `--form`: define a page as a form page, within the form validator

#### create new component

```
wic com <componentName> [-d]
```

#### create new util function

```
wic util <utilName> [-a | -c]
```

#### add build-in module

```
wic module <module> [-m, -t]
```

#### set global config
```
wic set <configKey> <configValue> [options]
```
##### Options:
- `-z`: input target item is a compressed file

##### Keys:
- icon-input-path
- icon-input-name


#### update icon font file
use this command with [iconfont](https://www.iconfont.cn/)

```
wic update-icon
```
How it works?
1.  search for files which named download.zip
2.  find the latast version
3.  extract
4.  read content from icon.css

### Modules

#### address

#### order

####
