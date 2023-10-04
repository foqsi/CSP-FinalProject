$(document).ready(function () {
    loadWrapperContent();

    $("#save").on("click", function () {
        saveWrapperContent();
        alert("Content saved.");
    });

    $("#reset").on("click", function () {
        if (confirm("Are you sure you want to reset the content?")) {
            clearWrapperContent();
            alert("Content reset.");
        }
    });
    $(".branch-wrapper").draggable({
        containment: "parent",
        revert: "invalid",
        cursor: "move"
    });
});

function saveWrapperContent() {
    const wrapperContent = $(".wrapper").html();
    localStorage.setItem("savedWrapperContent", JSON.stringify(wrapperContent));
}

function clearWrapperContent() {
    localStorage.removeItem("savedWrapperContent");
    loadWrapperContent();
}

function loadWrapperContent() {
    const savedWrapperContent = JSON.parse(localStorage.getItem("savedWrapperContent"));
    if (savedWrapperContent) {
        $(".wrapper").html(savedWrapperContent);
    } else {
        loadDefaultContent();
    }
}

function loadDefaultContent() {
    const dataLeft = [
        {
            id: 1,
            parent_id: 0,
            title: 'Branch 1',
            level: 1,
        }
    ];

    const leftTreeId = '#left-tree';
    const dragHandler = '.branch-drag-handler';

    const leftSortable = new TreeSortable({
        treeSelector: leftTreeId
    });
    const $leftTree = $(leftTreeId);
    const $content = dataLeft.map(leftSortable.createBranch);
    $leftTree.html($content);
    leftSortable.run();

    const delay = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    };

    leftSortable.onSortCompleted(async (event, ui) => {
        await delay();
        console.log('left tree', ui.item);
    });

    leftSortable.addListener('click', '.add-child', function (event, instance) {
        event.preventDefault();
        instance.addChildBranch($(event.target));
    });

    leftSortable.addListener('click', '.add-sibling', function (event, instance) {
        event.preventDefault();
        instance.addSiblingBranch($(event.target));
    });

    leftSortable.addListener('click', '.remove-branch', function (event, instance) {
        event.preventDefault();

        const confirm = window.confirm('Are you sure you want to delete this branch?');
        if (!confirm) {
            return;
        }
        instance.removeBranch($(event.target));
    });

    tippy('[data-tippy-content]');
}
