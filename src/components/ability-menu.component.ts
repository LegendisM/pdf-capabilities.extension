import draggable from "../helpers/draggable.helper";
import FileAbility from "./file-ability.component";

const abilities: { label: string, ability(): HTMLElement }[] = [
    { label: "Files", ability: FileAbility },
    { label: "Files #2", ability: FileAbility },
    { label: "Files #3", ability: FileAbility },
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
    // * header
    let header = document.createElement('header');
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
    header.style.fontFamily = "monospace";
    header.style.backgroundColor = "#e6eaf6";
    header.style.width = "100%";
    header.style.height = "25px";
    header.style.borderRadius = "1px";
    header.innerHTML = "<h4>Abilities</h4>";
    header.draggable = true;
    element.appendChild(header);
    // * set self draggable
    element = draggable(element, header) as HTMLDivElement;
    // * self init position
    element.style.top = "1vw";
    element.style.right = "1vh";
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