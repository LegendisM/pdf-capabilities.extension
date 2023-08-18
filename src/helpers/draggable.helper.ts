const draggable = (element: HTMLElement, pointer: HTMLElement): HTMLElement => {
    let isDragging = false;

    pointer.addEventListener('dragstart', (event) => {
        isDragging = true;
    });

    document.addEventListener('dragover', (event) => {
        if (isDragging) {
            event.preventDefault();
        }
    });

    document.addEventListener('dragend', (event) => {
        if (isDragging) {
            element.style.left = `${event.clientX}px`;
            element.style.top = `${event.clientY}px`;
            isDragging = false;
        }
    });

    return element;
}

export default draggable;