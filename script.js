/* ============================= */
/* BASE & HEIGHT TRIANGLE */
/* ============================= */
const canvas = document.getElementById("triangleCanvas");
const ctx = canvas.getContext("2d");

const baseInput = document.getElementById("baseInput");
const heightInput = document.getElementById("heightInput");

function drawBaseHeight() {
    const base = +baseInput.value;
    const height = +heightInput.value;

    document.getElementById("baseVal").innerText = base;
    document.getElementById("heightVal").innerText = height;
    document.getElementById("baseText").innerText = base;
    document.getElementById("heightText").innerText = height;

    const area = 0.5 * base * height;
    document.getElementById("areaResult1").innerText = area.toFixed(2);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.lineTo(50 + base, 250);
    ctx.lineTo(50, 250 - height);
    ctx.closePath();

    ctx.fillStyle = "#4CAF50";
    ctx.fill();
    ctx.strokeStyle = "#2E7D32";
    ctx.stroke();
}

/* ============================= */
/* TWO SIDES & ANGLE TRIANGLE */
/* ============================= */
const canvas1 = document.getElementById("triangleCanvas1");
const ctx1 = canvas1.getContext("2d");

const sideAInput = document.getElementById("sideAInput");
const sideBInput = document.getElementById("sideBInput");
const angleInput = document.getElementById("angleInput");
const twoSidesA = document.getElementById("twoSidesA");
const twoSidesB = document.getElementById("twoSidesB");
const twoSidesAngle = document.getElementById("twoSidesAngle");

function drawSidesAngle() {
    const a = +sideAInput.value;
    const b = +sideBInput.value;
    const angleDeg = +angleInput.value;
    const angleRad = angleDeg * Math.PI / 180;

    document.getElementById("sideAVal").innerText = a;
    document.getElementById("sideBVal").innerText = b;
    document.getElementById("angleVal").innerText = angleDeg;
    document.getElementById("twoSidesA").innerText= a;
    document.getElementById("twoSidesB").innerText= b;
    document.getElementById("twoSidesAngle").innerText= angleDeg;

    console.log(twoSidesA, twoSidesB, twoSidesAngle);

    const area = 0.5 * a * b * Math.sin(angleRad);
    document.getElementById("areaResult2").innerText = area.toFixed(2);

    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

    const x0 = 120, y0 = 300;
    const x1 = x0 + a;
    const x2 = x0 + b * Math.cos(-angleRad);
    const y2 = y0 + b * Math.sin(-angleRad);

    ctx1.beginPath();
    ctx1.moveTo(x0, y0);
    ctx1.lineTo(x1, y0);
    ctx1.lineTo(x2, y2);
    ctx1.closePath();

    ctx1.fillStyle = "#3498db";
    ctx1.fill();
    ctx1.strokeStyle = "#2980b9";
    ctx1.lineWidth = 2;
    ctx1.stroke();

    ctx1.fillStyle = "#000";
    ctx1.fillText(`θ = ${angleDeg}°`, x0 + 15, y0 - 10);
}

/* ============================= */
/* THREE SIDES (HERON'S FORMULA) */
/* ============================= */

const canvas2 = document.getElementById("triangleCanvas2");
const ctx2 = canvas2.getContext("2d");

const sideaInput = document.getElementById("sideaInput");
const sidebInput = document.getElementById("sidebInput");
const sidecInput = document.getElementById("sidecInput");
//const threeSidesS= document.getElementById("threeSidesS");

function drawThreeSides() {
    const a = +sideaInput.value;
    const b = +sidebInput.value;
    const c = +sidecInput.value;

    document.getElementById("sideaVal").innerText = a;
    document.getElementById("sidebVal").innerText = b;
    document.getElementById("sidecVal").innerText = c;

    // Triangle inequality check
    if (a + b <= c || a + c <= b || b + c <= a) {
        document.getElementById("areaResult3").innerText = "Invalid triangle";
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        return;
    }

    // Heron's formula
    const s = (a + b + c) / 2;
    document.getElementById("threeSidesS").innerText= s;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById("areaResult3").innerText = area.toFixed(2);

    // Drawing
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

    // Base AB = c
    const xA = 120, yA = 300;
    const xB = xA + c, yB = yA;

    // Find point C using cosine rule
    // Law of Cosines (angle opposite to side b)
    const cosTheta = (a * a + c * c - b * b) / (2 * a * c);
    const theta = Math.acos(cosTheta);

    // Vertex position
    const xC = xA + a * Math.cos(theta);
    const yC = yA - a * Math.sin(theta);


    ctx2.beginPath();
    ctx2.moveTo(xA, yA);
    ctx2.lineTo(xB, yB);
    ctx2.lineTo(xC, yC);
    ctx2.closePath();

    ctx2.fillStyle = "#9b59b6";
    ctx2.fill();
    ctx2.strokeStyle = "#6c3483";
    ctx2.lineWidth = 2;
    ctx2.stroke();

    // Labels
    ctx2.fillStyle = "black";
    ctx2.fillText("a", (xB + xC) / 2, (yB + yC) / 2);
    ctx2.fillText("b", (xA + xC) / 2, (yA + yC) / 2);
    ctx2.fillText("c", (xA + xB) / 2, yA + 15);
}

const eqCanvas = document.getElementById("equilateralCanvas");
const eqCtx = eqCanvas.getContext("2d");
const eqSideInput = document.getElementById("eqSideInput");

function drawEquilateral() {
    const a = +eqSideInput.value;
    document.getElementById("eqSideVal").innerText = a;

    // Height
    const h = (Math.sqrt(3) / 2) * a;

    // Area
    const area = (Math.sqrt(3) / 4) * a * a;
    document.getElementById("eqAreaResult").innerText = area.toFixed(2);

    // Clear canvas
    eqCtx.clearRect(0, 0, eqCanvas.width, eqCanvas.height);

    // Coordinates
    const xB = 150, yB = 300;
    const xC = xB + a, yC = yB;
    const xA = xB + a / 2;
    const yA = yB - h;

    // Draw triangle
    eqCtx.beginPath();
    eqCtx.moveTo(xA, yA);
    eqCtx.lineTo(xB, yB);
    eqCtx.lineTo(xC, yC);
    eqCtx.closePath();

    eqCtx.fillStyle = "#f39c12";
    eqCtx.fill();
    eqCtx.strokeStyle = "#d68910";
    eqCtx.lineWidth = 2;
    eqCtx.stroke();

    // Draw height AD
    eqCtx.beginPath();
    eqCtx.moveTo(xA, yA);
    eqCtx.lineTo(xA, yB);
    eqCtx.strokeStyle = "#2c3e50";
    eqCtx.setLineDash([6, 4]);
    eqCtx.stroke();
    eqCtx.setLineDash([]);

    // Labels
    eqCtx.fillStyle = "#000";
    eqCtx.fillText("A", xA - 5, yA - 8);
    eqCtx.fillText("B", xB - 10, yB + 15);
    eqCtx.fillText("C", xC + 5, yC + 15);
    eqCtx.fillText("D", xA - 5, yB + 15);

    eqCtx.fillText("a", (xB + xC) / 2, yB + 30);
    eqCtx.fillText("a", (xA + xB) / 2 - 10, (yA + yB) / 2);
    eqCtx.fillText("a", (xA + xC) / 2 + 10, (yA + yC) / 2);
}

/* ============================= */
/* ISOSCELES TRIANGLE */
/* ============================= */

const isoCanvas = document.getElementById("isoscelesCanvas");
const isoCtx = isoCanvas.getContext("2d");

const isoSideInput = document.getElementById("isoSideInput");
const isoBaseInput = document.getElementById("isoBaseInput");

function drawIsosceles() {
    const a = +isoSideInput.value;
    const b = +isoBaseInput.value;

    document.getElementById("isoSideVal").innerText = a;
    document.getElementById("isoBaseVal").innerText = b;

    // Validity check
    if (b >= 2 * a) {
        document.getElementById("isoAreaResult").innerText = "Invalid triangle";
        isoCtx.clearRect(0, 0, isoCanvas.width, isoCanvas.height);
        return;
    }

    // Height and Area
    const h = Math.sqrt(4 * a * a - b * b) / 2;
    const area = (b / 4) * Math.sqrt(4 * a * a - b * b);
    document.getElementById("isoAreaResult").innerText = area.toFixed(2);

    isoCtx.clearRect(0, 0, isoCanvas.width, isoCanvas.height);

    // Coordinates
    const xB = 150, yB = 300;
    const xC = xB + b, yC = yB;
    const xD = xB + b / 2;
    const xA = xD;
    const yA = yB - h;

    // Draw triangle
    isoCtx.beginPath();
    isoCtx.moveTo(xA, yA);
    isoCtx.lineTo(xB, yB);
    isoCtx.lineTo(xC, yC);
    isoCtx.closePath();

    isoCtx.fillStyle = "#1abc9c";
    isoCtx.fill();
    isoCtx.strokeStyle = "#148f77";
    isoCtx.lineWidth = 2;
    isoCtx.stroke();

    // Draw height AD
    isoCtx.beginPath();
    isoCtx.moveTo(xA, yA);
    isoCtx.lineTo(xD, yB);
    isoCtx.setLineDash([6, 4]);
    isoCtx.strokeStyle = "#2c3e50";
    isoCtx.stroke();
    isoCtx.setLineDash([]);

    // Labels
    isoCtx.fillStyle = "#000";
    isoCtx.fillText("A", xA - 5, yA - 8);
    isoCtx.fillText("B", xB - 10, yB + 15);
    isoCtx.fillText("C", xC + 5, yC + 15);
    isoCtx.fillText("D", xD - 5, yB + 15);

    isoCtx.fillText("a", (xA + xB) / 2 - 10, (yA + yB) / 2);
    isoCtx.fillText("a", (xA + xC) / 2 + 10, (yA + yC) / 2);
    isoCtx.fillText("b", (xB + xC) / 2, yB + 30);
}


/* ============================= */
/* EVENT LISTENERS */
/* ============================= */
baseInput.oninput = drawBaseHeight;
heightInput.oninput = drawBaseHeight;

sideAInput.oninput = drawSidesAngle;
sideBInput.oninput = drawSidesAngle;
angleInput.oninput = drawSidesAngle;

sideaInput.oninput = drawThreeSides;
sidebInput.oninput = drawThreeSides;
sidecInput.oninput = drawThreeSides;

eqSideInput.oninput = drawEquilateral;

isoSideInput.oninput = drawIsosceles;
isoBaseInput.oninput = drawIsosceles;

// Initial draw
drawThreeSides();
drawBaseHeight();
drawSidesAngle();
drawEquilateral();
drawIsosceles();
