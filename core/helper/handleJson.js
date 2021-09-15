const fs = require("fs");

const readJson = (jsonFilePath, jsonKey) => {
  const jsonFileBuffer = fs.readFileSync(jsonFilePath);
  const jsonKeyArr = jsonKey.split(".");
  let jsonFileContent = JSON.parse(jsonFileBuffer);

  if (jsonKeyArr.length > 1) {
    return traversArrayAndRead(
      jsonFileContent,
      jsonKeyArr[jsonKeyArr.length - 1]
    );
  } else {
    return jsonFileContent[jsonKey];
  }
};

const updateJson = (jsonFilePath, jsonKey, jsonValue) => {
  const jsonFileBuffer = fs.readFileSync(jsonFilePath);
  const jsonKeyArr = jsonKey.split(".");
  let jsonFileContent = JSON.parse(jsonFileBuffer);

  if (jsonKeyArr.length > 1) {
    traversArrayAndUpdate(
      jsonFileContent,
      jsonKeyArr[jsonKeyArr.length - 1],
      jsonValue
    );
  } else {
    jsonFileContent[jsonKey] = jsonValue;
  }
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonFileContent, null, "\t"));
};

const pushJson = (jsonFilePath, jsonKey, pushJsonValue) => {
  const jsonFileBuffer = fs.readFileSync(jsonFilePath);
  const jsonKeyArr = jsonKey.split(".");
  let jsonFileContent = JSON.parse(jsonFileBuffer);

  if (jsonKeyArr.length > 1) {
    traversArrayAndPush(
      jsonFileContent,
      jsonKeyArr[jsonKeyArr.length - 1],
      pushJsonValue
    );
  } else {
    jsonFileContent[jsonKey].push(pushJsonValue);
  }
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonFileContent, null, "\t"));
};

const traversArrayAndUpdate = (obj, target, editName) => {
  Object.keys(obj).forEach((key) => {
    if (key === target) {
      obj[key] = editName;
    }
    if (Object.prototype.toString.call(obj[key]) == "[object Object]") {
      traversArrayAndUpdate(obj[key], target, editName);
    }
  });
};

const traversArrayAndRead = (obj, target) => {
  Object.keys(obj).forEach((key) => {
    if (key === target) {
      return obj[key];
    }
    if (Object.prototype.toString.call(obj[key]) == "[object Object]") {
      traversArrayAndRead(obj[key], target);
    }
  });
};

const traversArrayAndPush = (obj, target, pushItem) => {
  Object.keys(obj).forEach((key) => {
    if (key === target) {
      obj[key].push(pushItem);
    }
    if (Object.prototype.toString.call(obj[key]) == "[object Object]") {
      traversArrayAndPush(obj[key], target, pushItem);
    }
  });
};

module.exports = { updateJson, readJson, pushJson };
