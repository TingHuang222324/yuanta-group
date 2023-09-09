const joinGroupStep1Block = document.getElementById("join-group-step1");
const joinGroupConfirmBlock = document.getElementById("join-group-confirm");
const joinGroupNotMemBlock = document.getElementById(
  "join-group-not-new-member"
);
const joinGroupSuccess = document.getElementById("join-group-success");
const joinGroupIsJoinBlock = document.getElementById("join-group-is-join");

/**
 * 打開彈窗
 */
const onClickJoinGroup = () => {
  join_group.showModal();

  document.getElementById("join-group-phone").value = "";
  document.getElementById("join-group-otp").value = "";

  joinGroupStep1Block.classList.add("block");
  joinGroupStep1Block.classList.remove("hidden");

  hiddenBySelector(joinGroupConfirmBlock);
  hiddenBySelector(joinGroupNotMemBlock);
  hiddenBySelector(joinGroupIsJoinBlock);
  hiddenBySelector(joinGroupSuccess);
};

/**
 * 顯示確認入團區塊
 */
const onClickJoin = () => {
  hiddenBySelector(joinGroupStep1Block);
  blockBySelector(joinGroupConfirmBlock);
};

/**
 * 顯示入團成功區塊
 */
const onClickNotNewMember = () => {
  hiddenBySelector(joinGroupConfirmBlock);
  blockBySelector(joinGroupSuccess);
};

/**
 * 顯示您已入團區塊
 */
const onClickOpenIsJoin = () => {
  hiddenBySelector(joinGroupConfirmBlock);
  hiddenBySelector(joinGroupNotMemBlock);
  blockBySelector(joinGroupIsJoinBlock);
};
