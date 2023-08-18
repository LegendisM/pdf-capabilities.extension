import { ICON_EXIT_BASE64, ICON_MOVE_BASE64 } from "../constant/icon.constant";
import draggable from "../helpers/draggable.helper";
import BootstrapService from "../services/bootstrap.service";
import FileAbility from "./file-ability.component";

const abilities: { label: string, ability(): HTMLElement }[] = [
    { label: "Files", ability: FileAbility },
];

const AbilityMenu = (): HTMLElement => {
    let element = document.createElement('div');
    // * self style
    element.style.position = "absolute";
    element.style.backgroundColor = "white";
    element.style.width = "225px";
    element.style.height = "325px";
    element.style.borderRadius = "8px";
    element.style.textAlign = "center";
    element.style.userSelect = "none";
    element.style.boxShadow = "0px 0px 6px 1px #434343";
    element.style.overflowX = "hidden";
    element.style.overflowY = "auto";
    element.style.resize = "auto";
    // * header
    let header = document.createElement('header');
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";
    header.style.fontFamily = "monospace";
    header.style.backgroundColor = "#e6eaf6";
    header.style.width = "100%";
    header.style.height = "25px";
    header.style.borderRadius = "1px";
    header.innerHTML = "<h4>Abilities</h4>";
    header.draggable = true;
    element.appendChild(header);
    // * holder
    let holder = document.createElement("img");
    holder.src = ICON_MOVE_BASE64;
    holder.style.width = "19px";
    holder.style.height = "19px";
    holder.style.marginLeft = "3px";
    holder.style.cursor = "move";
    header.prepend(holder);
    // * exit
    let exit = document.createElement("img");
    exit.src = ICON_EXIT_BASE64;
    exit.style.width = "19px";
    exit.style.height = "19px";
    exit.style.marginRight = "3px";
    exit.addEventListener('click', () => {
        document.dispatchEvent(BootstrapService.events.exit);
    });
    header.appendChild(exit);
    // * set self draggable
    element = draggable(element, header) as HTMLDivElement;
    // * self init position
    element.style.top = "1vh";
    element.style.left = "1vw";
    // * main
    let main = document.createElement('main');
    main.style.margin = "6px";
    main.style.padding = "3px";
    for (const { label, ability } of abilities) {
        let item = document.createElement('button');
        item.style.backgroundColor = "rgb(92 0 102 / 68%)";
        item.style.color = "white";
        item.style.margin = "4px";
        item.style.padding = "4px";
        item.style.width = "-webkit-fill-available";
        item.style.border = "none";
        item.style.borderRadius = "4px";
        item.innerText = label;
        item.onclick = () => {
            main.replaceChildren(ability());
        }
        main.appendChild(item);
    }
    element.appendChild(main);
    return element;
}

export default AbilityMenu;