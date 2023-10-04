document.addEventListener('DOMContentLoaded', function () {
    const hlTarget = document.getElementById('hl-target');
    const paragraphs = hlTarget.querySelectorAll('.description');
    const clearButton = document.getElementById('clear-highlight');
    let touchStartPosition = null;

    function processSelection() {
        const selectedTextObj = window.getSelection();

        if (selectedTextObj.rangeCount > 0) {
            const range = selectedTextObj.getRangeAt(0);
            const commonAncestor = range.commonAncestorContainer;

            if (commonAncestor.nodeType === Node.TEXT_NODE &&
                commonAncestor.parentElement.closest('.description')) {

                // Find word boundaries
                let startOffset = range.startOffset;
                let endOffset = range.endOffset;

                while (startOffset > 0 && !/\s/.test(commonAncestor.textContent[startOffset - 1])) {
                    startOffset--;
                }

                while (endOffset < commonAncestor.length && !/\s/.test(commonAncestor.textContent[endOffset])) {
                    endOffset++;
                }

                const newRange = document.createRange();
                newRange.setStart(commonAncestor, startOffset);
                newRange.setEnd(commonAncestor, endOffset);

                const span = document.createElement('span');
                span.className = 'highlight';
                newRange.surroundContents(span);
                selectedTextObj.removeAllRanges(); // Deselect the selected text
            }
        }
    }

    function clearHighlight() {
        const highlightedSpans = hlTarget.querySelectorAll('.highlight');
        highlightedSpans.forEach(span => {
            const parent = span.parentNode;
            while (span.firstChild) {
                parent.insertBefore(span.firstChild, span);
            }
            parent.removeChild(span);
        });
    }

    function handleTouchStart(event) {
        touchStartPosition = {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY,
        };
    }

    function handleTouchEnd(event) {
        const touchEndPosition = {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY,
        };

        const distanceX = Math.abs(touchEndPosition.x - touchStartPosition.x);
        const distanceY = Math.abs(touchEndPosition.y - touchStartPosition.y);

        // If the touch start and end positions are close enough, consider it a tap
        if (distanceX < 10 && distanceY < 10) {
            processSelection();
        }
    }

    paragraphs.forEach((paragraph) => {
        paragraph.addEventListener('mouseup', processSelection);
        paragraph.addEventListener('touchstart', handleTouchStart);
        paragraph.addEventListener('touchend', handleTouchEnd);
    });

    clearButton.addEventListener('click', clearHighlight);
    clearButton.addEventListener('touchend', clearHighlight);
});
