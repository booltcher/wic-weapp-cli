# wic-applet-cli

<p align="left">
  <a href="https://github.com/blcher/wic-applet-cli/blob/master/CHANGELOG.md"><img src="https://img.shields.io/badge/Changelog-blue.svg" alt="Changelog"></a>
  <a href="https://github.com/blcher/wic-applet-cli/blob/master/CHANGELOG.md"><img src="https://img.shields.io/badge/base-Wic-orange.svg" alt="Base template"></a>
</p>

(Note: still in `Dev`, downloading it carefully!!! :dash::dash::dash:)

<p>A cli for fast generating applet projects, which import Vant Weapp as UI framework.
</p>

> prerequisite: `node` `git`

# Installation

```
npm install wic-applet-cli -g
```

# Usage

---

## Version

```
wic --version
wic -V
```

<!-- > note: only version before 6.1.0 of commander is supported currently (#FIXME: just check out version 8.1.0 can not) -->

## Options

| short | long     | descirption           | scope     |
| ----- | -------- | --------------------- | --------- |
| -d    | --dest   | destination           | create    |
| -a    | --add    | add from CLI built-in | page, com |
| -c    | --create | create new one        | page, com |

# Commands

## Create new project

generate a new applet project with the template downloaded from [wic-applet-template](https://github.com/boutstruggle/wic-applet-template.git)

```
wic create <projectName>
```

The cases below can help you to make choices:

- When you: confirm using the native applet tabbar
  - It will: generate those pages which is in tabbar list, and set `tabBar` in file **app.json**, then import them in `pages` automatically

---

## Create new page

```
wic page <projectName> [options]
```

### options:

- `-n` `--network`: auto import Http _Request Class_
- `-l` `--list`: define a page as a paging list, within _Paging Class_ and list component.
- `-f` `--form`: define a page as a form page, within the form validator

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

## Set global config

- No key & value: Browse all configurations.
- Just key: Check current configure about [key]
- Key & Value: Set the [value] for [key]

```
wic config [configKey] [configValue] [options]

example:
wic config icon-file-path
// ...path
wic config icon-file-path C:\Users\bootcher\Desktop\Iconfont
```

### Options:

| short | long  | descirption                            | scope  |
| ----- | ----- | -------------------------------------- | ------ |
| -z    | --zip | specify the targe as a compressed file | create |

### Keys:

- icon-input-path
- icon-input-name

## Update icon font file

use this command with [iconfont](https://www.iconfont.cn/)

```
wic update-icon
```

How it works?

1.  search for files which named download.zip
2.  find the latast version
3.  extract
4.  read content from icon.css

## Modules

### address

### order

##
