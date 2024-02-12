/**
 * Objective: get base, height input. calculate the area of triangle. display the area
 * step 1: get base and height value
 * 
 */

function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleHeightInput = document.getElementById('triangle-height');

    const triangleBase = parseFloat(triangleBaseInput.value);
    const triangleHeight = parseFloat(triangleHeightInput.value);

    const triangleArea = 0.5 * triangleBase * triangleHeight;

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}