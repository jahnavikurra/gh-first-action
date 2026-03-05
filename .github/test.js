SDK.init();

SDK.ready().then(() => {

    console.log("AI Work Item Assistant loaded");

    const container = document.createElement("div");
    container.style.padding = "20px";
    container.innerHTML = "<h2>AI Work Item Assistant Loaded Successfully 🚀</h2>";

    document.body.appendChild(container);

});
