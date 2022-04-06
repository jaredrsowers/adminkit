
window.blazorContentLoaded = (firstRender) => {

    if (firstRender) {
        window.document.dispatchEvent(new Event("DOMContentLoaded", {
            bubbles: true,
            cancelable: true
        }));
    }

    //feather.replace();
}



window.newChoices = (selector) => {
    new Choices(document.querySelector(selector /* ".choices-single" */));
}

