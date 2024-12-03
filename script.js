function expandBox(clickedBox) {
    // Get all boxes
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        // If the box is the clicked one, expand it
        if (box === clickedBox) {
            box.classList.toggle('expanded');
            const content = box.querySelector('.content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        } else {
            // Collapse other boxes
            box.classList.remove('expanded');
            const content = box.querySelector('.content');
            content.style.display = 'none';
        }
    });
}