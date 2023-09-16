const groupFailBlock = document.getElementById("create-group-fail");
const duplicate = document.getElementById("fail-duplicate");
const repeat = document.getElementById("fail-repeat");

/** 重複代號失敗 */
const onClickFailDuplicate = () => {
  create_group_fail_group.showModal();
  blockBySelector(duplicate);
  hiddenBySelector(repeat);
};

/** 代號已組團失敗 */
const onClickFailRepeat = () => {
  create_group_fail_group.showModal();
  blockBySelector(repeat);
  hiddenBySelector(duplicate);
};

const goSearchBlock = () => {
  window.location.hash = "#search";
};
