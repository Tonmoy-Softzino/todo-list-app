const util = {};

util.saveDataToLocal = (tasks) => {
  sessionStorage.setItem("tasks", JSON.stringify(tasks));
};

util.getDataFromLocal = () => {
  if (sessionStorage.getItem("tasks")) {
    return JSON.parse(sessionStorage.getItem("tasks"));
  }
  return [];
};

export default util;
