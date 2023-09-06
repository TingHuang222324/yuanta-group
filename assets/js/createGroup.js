const groupStep1Block = document.getElementById("create-group-step1");
const groupSuccessBlock = document.getElementById("create-group-success");
const groupFailBlock = document.getElementById("create-group-fail");
const oldSuccess = document.getElementById("old-success");
const newSuccess = document.getElementById("new-success");

const duplicate = document.getElementById("fail-duplicate");
const repeat = document.getElementById("fail-repeat");
const hiddenBySelector = (seletor) => {
  seletor.classList.add("hidden");
  seletor.classList.remove("block");
};

const blockBySelector = (seletor) => {
  seletor.classList.add("block");
  seletor.classList.remove("hidden");
};
const onClickCreateGroup = () => {
  create_group.showModal();

  document.getElementById("create-group-phone").value = "";
  document.getElementById("create-group-otp").value = "";

  groupStep1Block.classList.add("block");
  groupStep1Block.classList.remove("hidden");
  /** other block hide */
  hiddenBySelector(groupSuccessBlock);
  hiddenBySelector(groupFailBlock);
};

const hiddenStep1Block = () => {
  /*step1 hidden*/
  groupStep1Block.classList.add("hidden");
  groupStep1Block.classList.remove("block");
};

const onClickOldSuccess = () => {
  hiddenStep1Block();
  blockBySelector(groupSuccessBlock);
  blockBySelector(oldSuccess);
  hiddenBySelector(newSuccess);
};
const onClickNewSuccess = () => {
  hiddenStep1Block();
  blockBySelector(groupSuccessBlock);
  blockBySelector(newSuccess);
  hiddenBySelector(oldSuccess);
};

const onClickFailDuplicate = () => {
  hiddenStep1Block();
  blockBySelector(groupFailBlock);
  blockBySelector(duplicate);
  hiddenBySelector(repeat);
};
const onClickFailRepeat = () => {
  hiddenStep1Block();
  blockBySelector(groupFailBlock);
  blockBySelector(repeat);
  hiddenBySelector(duplicate);
};

const goSearchBlock = () => {
  window.location.hash = "#search";
};
