#! /usr/bin/env node
const program = require("commander");
const createCommand = require("./core/chaos");
const helpOptions = require("./core/help");

// 查看版本号
program.version(require("./package.json").version);

// 帮助及选项
helpOptions();

// 创建其他指令
createCommand();

program.parse(process.argv);
