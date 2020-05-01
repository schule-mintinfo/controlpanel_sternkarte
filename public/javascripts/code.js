let code = "";

function buttonPressed(value) {
    if (value === "delete") {
        code = code.slice(0, -1)
    } else {
        code += value;
    }
    updateCode();
}

function updateCode() {
    $("#code").val(code);
}