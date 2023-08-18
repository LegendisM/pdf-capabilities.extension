import BootstrapService from "../services/bootstrap.service";

const FileAbility = (): HTMLElement => {
    let element = document.createElement('div');
    // * helper/divider
    element.innerHTML = "<bold style='font-family:monospace;'>Select the folder that contains your audio files</bold><hr color='gray'>";
    // * import
    let files = document.createElement("input");
    files.type = "file";
    files.multiple = true;
    files.webkitdirectory = true;
    element.appendChild(files);
    return element;
}

export default FileAbility;