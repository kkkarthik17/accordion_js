function toggleAccordion(itemId, element) {
    var itemContent = document.getElementById(itemId);
    var isActive = element.classList.contains('active');

    // Close all accordions
    closeAllAccordions();

    // Toggle the current accordion
    if (!isActive) {
        itemContent.style.display = 'block';
        element.classList.add('active');
        itemContent.style.maxHeight = itemContent.scrollHeight + "px";
    }

    function closeAllAccordions() {
        var accordions = document.getElementsByClassName('acc-border');
        var accordionItems = document.getElementsByClassName('list-group-item');

        for (var i = 0; i < accordions.length; i++) {
            accordions[i].style.display = 'none';
            accordions[i].style.maxHeight = 0;
        }

        for (var i = 0; i < accordionItems.length; i++) {
            accordionItems[i].classList.remove('active');
        }
    }
}