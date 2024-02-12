function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleHeightInput = document.getElementById('rectangle-height');

    const rectangleWidth = parseFloat(rectangleWidthInput.value);
    const rectangleHeight = parseFloat(rectangleHeightInput.value);

    const rectangleArea = rectangleWidth * rectangleHeight;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}