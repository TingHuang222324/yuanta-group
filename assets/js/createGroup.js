const groupStep1Block = document.getElementById("create-group-step1");
const groupSuccessBlock = document.getElementById("create-group-success");
const oldSuccess = document.getElementById("old-success");
const newSuccess = document.getElementById("new-success");



const hiddenBySelector = (seletor) => {
  seletor.classList.add("hidden");
  seletor.classList.remove("block");
};

const blockBySelector = (seletor) => {
  seletor.classList.add("block");
  seletor.classList.remove("hidden");
};

/** 
 * 打開彈窗
 */
const onClickCreateGroup = () => {
  create_group.showModal();

  document.getElementById("create-group-phone").value = "";
  document.getElementById("create-group-otp").value = "";

  groupStep1Block.classList.add("block");
  groupStep1Block.classList.remove("hidden");
  /** other block hide */
  hiddenBySelector(groupSuccessBlock);
};

const hiddenStep1Block = () => {
  /*step1 hidden*/
  groupStep1Block.classList.add("hidden");
  groupStep1Block.classList.remove("block");
};

/** 舊戶糾團成功 */
const onClickOldSuccess = () => {
  hiddenStep1Block();
  blockBySelector(groupSuccessBlock);
  blockBySelector(oldSuccess);
  hiddenBySelector(newSuccess);
};
/** 新戶糾團成功 */
const onClickNewSuccess = () => {
  hiddenStep1Block();
  blockBySelector(groupSuccessBlock);
  blockBySelector(newSuccess);
  hiddenBySelector(oldSuccess);
};


