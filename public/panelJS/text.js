const togleTemplateMsg = document.getElementById('togleTemplateMsg');
const uploadCsvForBulkMsg = document.getElementById('uploadCsvForBulkMsg');
uploadCsvForBulkMsg.style.display = 'none'
const attachmentURL = document.getElementById('attachmentURL');
attachmentURL.style.display = 'none'
const togleCustomMsg = document.getElementById('togleCustomMsg');
togleCustomMsg.style.display = 'none'
const togglecustomMsgUploadCsv = document.getElementById('togglecustomMsgUploadCsv')
togglecustomMsgUploadCsv.style.display = 'none'
const toggleAttachmentsContents = document.getElementById('toggleAttachmentsContents')
toggleAttachmentsContents.style.display = 'none';
const interactiveMessageSection = document.getElementById('interactiveMessageSection')
interactiveMessageSection.style.display = 'none'
const showAttachmentsec = document.getElementById('showAttachmentsec');
showAttachmentsec.style.display = 'none';
const hideInteractiveFileSec = document.getElementById('hideInteractiveFileSec')
hideInteractiveFileSec.style.display = 'none'
toggleCsvFileINput = () => {
    const selectFileOption = document.getElementById('selectFileOption');
    const uploadCsvForBulkMsg = document.getElementById('uploadCsvForBulkMsg');
    if (selectFileOption.checked) {
        uploadCsvForBulkMsg.style.display = 'block'
        phoneNumInputField.style.display = 'none'
    }
}
toggleCommaSeparatedInputField = () => {
    const commaSeparatedNumbersLikeArray = document.getElementById('commaSeparatedNumbersLikeArray');
    const phoneNumInputField = document.getElementById('phoneNumInputField');
    if (commaSeparatedNumbersLikeArray.checked) {
        phoneNumInputField.style.display = 'block'
        uploadCsvForBulkMsg.style.display = 'none'
    }
}
toggleAttachmentInputBoxVPI = () => {
    const imgRadioBtn = document.getElementById('imgRadioBtn');
    if (imgRadioBtn.checked) {
        attachmentURL.style.display = 'block'
    }
}
togleCustomMsgSection = () => {
    // const interactiveMessageSection = document.getElementById('interactiveMessageSection');
    const customMsgRadioBtn = document.getElementById('customMsgRadioBtn');
    if (customMsgRadioBtn.checked) {
        togleCustomMsg.style.display = 'block'
        document.getElementById('togleTemplateMsg').style.display = 'none';
        // interactiveMessageSection.style.display = 'none'
    }
}
toggleTemplateMsgSection = () => {
    const templateMsgSection = document.getElementById('templateMsgSection');

    if (templateMsgSection.checked) {
        togleCustomMsg.style.display = 'none'
        document.getElementById('togleTemplateMsg').style.display = 'block'
        // document.getElementById('interactiveMessageSection').style.display = 'none';
    }
}
// custom message starts
toggleCustomCsvFileINputField = () => {
    const customMsgCheckbox = document.getElementById('customMsgCheckbox')
    if (customMsgCheckbox.checked) {
        togglecustomMsgUploadCsv.style.display = 'block'
        document.getElementById('hideWhilePressOnBulk').style.display = 'none'
    }
}
toggleCustomMsgInputFld = () => {
    const selectCustomScvFile = document.getElementById('selectCustomScvFile')
    if (selectCustomScvFile.checked) {
        document.getElementById('hideWhilePressOnBulk').style.display = 'block'
        togglecustomMsgUploadCsv.style.display = 'none'
    }
}
// custom message Ends
// toggle custom attachments
toggeleAttachmentsItems = () => {
    const allAttachmentsInclude = document.getElementById('allAttachmentsInclude')
    const toggleAttachmentsContents = document.getElementById('toggleAttachmentsContents')

    if (allAttachmentsInclude.checked) {
        toggleAttachmentsContents.style.display = 'block'
    } else {
        toggleAttachmentsContents.style.display = 'none'
    }
}
// toggle custom attachments
toggleInteractiveSection = () => {
    const togleTemplateMsg = document.getElementById('togleTemplateMsg');
    const togleCustomMsg = document.getElementById('togleCustomMsg');
    const interactiveMessageSection = document.getElementById('interactiveMessageSection')
    const calltoActionRadioButton = document.getElementById('calltoActionRadioButton')
    if (calltoActionRadioButton.checked) {
        // interactiveMessageSection.style.display = 'block'
        togleTemplateMsg.style.display = 'none';
        togleCustomMsg.style.display = 'none';
    }
}
toggleAttachmetsContent = () => {
    const interactiveAttachement = document.getElementById('interactiveAttachement');
    const showAttachmentsec = document.getElementById('showAttachmentsec');
    if (interactiveAttachement.checked) {
        showAttachmentsec.style.display = 'block'
    } else {
        showAttachmentsec.style.display = 'none'
    }
}
toggleInteractiveBulkMsgSection = () => {
    const selectedInteractiveBulkRadio = document.getElementById('selectedInteractiveBulkRadio');
    const hideInteractiveNumINputField = document.getElementById('hideInteractiveNumINputField');
    const hideInteractiveFileSec = document.getElementById('hideInteractiveFileSec')

    if (selectedInteractiveBulkRadio.checked) {
        hideInteractiveNumINputField.style.display = 'none'
        hideInteractiveFileSec.style.display = 'block'
    }
}
showInputFieldOfInteractiveMsg = () => {
    const InteractivePhoneNoInputBox = document.getElementById('InteractivePhoneNoInputBox');
    const hideInteractiveNumINputField = document.getElementById('hideInteractiveNumINputField');
    const hideInteractiveFileSec = document.getElementById('hideInteractiveFileSec');
    if (InteractivePhoneNoInputBox.checked) {
        hideInteractiveNumINputField.style.display = 'block'
        hideInteractiveFileSec.style.display = 'none'
    }
}