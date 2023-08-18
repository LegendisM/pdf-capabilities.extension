import { FILE_ABILITY_WHITELIST_MIMES } from "../constant/whitelist.constant";
import BootstrapService from "../services/bootstrap.service";

const FileAbility = (): HTMLElement => {
    let element = document.createElement('div');
    // * audio player
    let audioPlayer = document.createElement("audio");
    audioPlayer.controls = true;
    audioPlayer.style.width = "-webkit-fill-available";
    // * import-box
    let importBox = document.createElement("div");
    // * import-helper
    importBox.innerHTML = "<hr color='gray'><bold style='font-family:monospace;'>Select the folder that contains your audio files</bold><hr color='gray'>";
    // * import-field
    let importField = document.createElement("input");
    importField.type = "file";
    importField.multiple = true;
    importField.webkitdirectory = true;
    importBox.appendChild(importField);
    element.appendChild(importBox);
    //* list-files
    let listFiles = document.createElement('div');
    element.appendChild(listFiles);
    // * bind import action
    importField.onchange = function () {
        const files = importField.files;
        if (files && files.length > 0) {
            listFiles.innerHTML = "";
            let lastSelected: HTMLElement | null;
            for (let i = 0; i < files.length; i++) {
                const file = files.item(i);
                if (file && FILE_ABILITY_WHITELIST_MIMES.some(mime => file.type.startsWith(mime))) {
                    let item = document.createElement('button');
                    item.style.backgroundColor = "rgb(92 0 102 / 68%)";
                    item.style.color = "white";
                    item.style.margin = "4px";
                    item.style.padding = "4px";
                    item.style.width = "-webkit-fill-available";
                    item.style.border = "none";
                    item.style.borderRadius = "4px";
                    item.innerText = file.name.split('.').slice(0, -1).join('.');
                    item.onclick = () => {
                        element.prepend(audioPlayer);
                        audioPlayer.src = URL.createObjectURL(file);
                        audioPlayer.play();
                        item.style.backgroundColor = "#084eb5cf";
                        if (lastSelected) {
                            lastSelected.style.backgroundColor = "rgb(92 0 102 / 68%)";
                        }
                        lastSelected = item;
                    }
                    listFiles.appendChild(item);
                }
            }
            if (listFiles.childElementCount > 0) {
                let resetBtn = document.createElement("button");
                resetBtn.style.backgroundColor = "rgb(243 14 14 / 70%)";
                resetBtn.style.color = "white";
                resetBtn.style.margin = "4px";
                resetBtn.style.padding = "4px";
                resetBtn.style.width = "-webkit-fill-available";
                resetBtn.style.border = "none";
                resetBtn.style.borderRadius = "4px";
                resetBtn.innerText = "Reset";
                resetBtn.onclick = () => {
                    document.dispatchEvent(BootstrapService.events.reset);
                }
                element.prepend(resetBtn);
                importBox.remove();
            }
        }
    };

    return element;
}

export default FileAbility;