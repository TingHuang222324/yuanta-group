const createNewTitle = document.getElementById('new_member_group_create_title')
const joinNewTitle = document.getElementById('new_member_group_join_title')

const openNewMemberPopup = (type)=>{
    if(type === 'create'){
        blockBySelector(createNewTitle);
        hiddenBySelector(joinNewTitle);
    }else {
        blockBySelector(joinNewTitle);
        hiddenBySelector(createNewTitle);
    }
    new_member_group.showModal()
}