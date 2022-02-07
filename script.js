canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

var bb = new Image();
bb.src = "images/bb.png";
bb.addEventListener(
    "load",
    function () {
        ctx.drawImage(bb, 5 * 70, 0 * 70, 70, 70);
        ctx.drawImage(bb, 2 * 70, 0 * 70, 70, 70);
    },
    false
);
var bk = new Image();
bk.src = "images/bk.png";
bk.addEventListener(
    "load",
    function () {
        ctx.drawImage(bk, 4 * 70, 0 * 70, 70, 70);
    },
    false
);
var bn = new Image();
bn.src = "images/bn.png";
bn.addEventListener(
    "load",
    function () {
        ctx.drawImage(bn, 6 * 70, 0 * 70, 70, 70);
        ctx.drawImage(bn, 1 * 70, 0 * 70, 70, 70);
    },
    false
);
var bp = new Image();
bp.src = "images/bp.png";
bp.addEventListener(
    "load",
    function () {
        ctx.drawImage(bp, 0 * 70, 1 * 70, 70, 70);
        ctx.drawImage(bp, 1 * 70, 1 * 70, 70, 70);
        ctx.drawImage(bp, 2 * 70, 1 * 70, 70, 70);
        ctx.drawImage(bp, 3 * 70, 1 * 70, 70, 70);
        ctx.drawImage(bp, 4 * 70, 1 * 70, 70, 70);
        ctx.drawImage(bp, 5 * 70, 1 * 70, 70, 70);
        ctx.drawImage(bp, 6 * 70, 1 * 70, 70, 70);
        ctx.drawImage(bp, 7 * 70, 1 * 70, 70, 70);
    },
    false
);
var bq = new Image();
bq.src = "images/bq.png";
bq.addEventListener(
    "load",
    function () {
        ctx.drawImage(bq, 3 * 70, 0 * 70, 70, 70);
    },
    false
);
var br = new Image();
br.src = "images/br.png";
br.addEventListener(
    "load",
    function () {
        ctx.drawImage(br, 7 * 70, 0 * 70, 70, 70);
        ctx.drawImage(br, 0 * 70, 0 * 70, 70, 70);
    },
    false
);
var wb = new Image();
wb.src = "images/wb.png";
wb.addEventListener(
    "load",
    function () {
        ctx.drawImage(wb, 5 * 70, 7 * 70, 70, 70);
        ctx.drawImage(wb, 2 * 70, 7 * 70, 70, 70);
    },
    false
);
var wk = new Image();
wk.src = "images/wk.png";
wk.addEventListener(
    "load",
    function () {
        ctx.drawImage(wk, 4 * 70, 7 * 70, 70, 70);
    },
    false
);
var wn = new Image();
wn.src = "images/wn.png";
wn.addEventListener(
    "load",
    function () {
        ctx.drawImage(wn, 6 * 70, 7 * 70, 70, 70);
        ctx.drawImage(wn, 1 * 70, 7 * 70, 70, 70);
    },
    false
);
var wp = new Image();
wp.src = "images/wp.png";
wp.addEventListener(
    "load",
    function () {
        ctx.drawImage(wp, 0 * 70, 6 * 70, 70, 70);
        ctx.drawImage(wp, 1 * 70, 6 * 70, 70, 70);
        ctx.drawImage(wp, 2 * 70, 6 * 70, 70, 70);
        ctx.drawImage(wp, 3 * 70, 6 * 70, 70, 70);
        ctx.drawImage(wp, 4 * 70, 6 * 70, 70, 70);
        ctx.drawImage(wp, 5 * 70, 6 * 70, 70, 70);
        ctx.drawImage(wp, 6 * 70, 6 * 70, 70, 70);
        ctx.drawImage(wp, 7 * 70, 6 * 70, 70, 70);
    },
    false
);

var wq = new Image();
wq.src = "images/wq.png";
wq.addEventListener(
    "load",
    function () {
        ctx.drawImage(wq, 3 * 70, 7 * 70, 70, 70);
    },
    false
);
var wr = new Image();
wr.src = "images/wr.png";
wr.addEventListener(
    "load",
    function () {
        ctx.drawImage(wr, 7 * 70, 7 * 70, 70, 70);
        ctx.drawImage(wr, 0 * 70, 7 * 70, 70, 70);
    },
    false
);
let arr = [];

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        arr[i] = [];
    }
}
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        arr[i][j] = 0;

        if (i == 1) {
            arr[i][j] = 2;
        }
        if (i == 6) {
            arr[i][j] = 1;
        }
        if (i == 0) {
            if (j == 0 || j == 7) {
                arr[i][j] = 8;
            }
            if (j == 1 || j == 6) {
                arr[i][j] = 4;
            }
            if (j == 2 || j == 5) {
                arr[i][j] = 6;
            }
            if (j == 3) {
                arr[i][j] = 10;
            }
            if (j == 4) {
                arr[i][j] = 12;
            }
        }
        if (i == 7) {
            if (j == 0 || j == 7) {
                arr[i][j] = 7;
            }
            if (j == 1 || j == 6) {
                arr[i][j] = 3;
            }
            if (j == 2 || j == 5) {
                arr[i][j] = 5;
            }
            if (j == 3) {
                arr[i][j] = 9;
            }
            if (j == 4) {
                arr[i][j] = 11;
            }
        }
    }
}
drawboard();
function drawboard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 8; i++) {
        for (let z = 0; z < 8; z++) {
            if ((z % 2 == 0 && i % 2 != 0) || (z % 2 != 0 && i % 2 == 0)) {
                ctx.fillStyle = "#769656";
                ctx.fillRect(i * 70, z * 70, 70, 70);
            } else {
                ctx.fillStyle = "#eeeed2";
                ctx.fillRect(i * 70, z * 70, 70, 70);
            }
        }
    }
    for (let i = 0; i < 8; i++) {
        for (let z = 0; z < 8; z++) {
            if (arr[i][z] > 0) {
                //Rook B
                if (arr[i][z] == 8) {
                    ctx.drawImage(br, z * 70, i * 70, 70, 70);
                }
                //Knight B
                if (arr[i][z] == 4) {
                    ctx.drawImage(bn, z * 70, i * 70, 70, 70);
                }
                //Bishop B
                if (arr[i][z] == 6) {
                    ctx.drawImage(bb, z * 70, i * 70, 70, 70);
                }
                //Queen B
                if (arr[i][z] == 10) {
                    ctx.drawImage(bq, z * 70, i * 70, 70, 70);
                }
                //King B
                if (arr[i][z] == 12) {
                    ctx.drawImage(bk, z * 70, i * 70, 70, 70);
                }
                //Pawn B
                if (arr[i][z] == 2) {
                    ctx.drawImage(bp, z * 70, i * 70, 70, 70);
                }
                //Rook W
                if (arr[i][z] == 7) {
                    ctx.drawImage(wr, z * 70, i * 70, 70, 70);
                }
                //Knight W
                if (arr[i][z] == 3) {
                    ctx.drawImage(wn, z * 70, i * 70, 70, 70);
                }
                //Bishop W
                if (arr[i][z] == 5) {
                    ctx.drawImage(wb, z * 70, i * 70, 70, 70);
                }
                //Queen W
                if (arr[i][z] == 9) {
                    ctx.drawImage(wq, z * 70, i * 70, 70, 70);
                }
                //King W
                if (arr[i][z] == 11) {
                    ctx.drawImage(wk, z * 70, i * 70, 70, 70);
                }
                //Pawn W
                if (arr[i][z] == 1) {
                    ctx.drawImage(wp, z * 70, i * 70, 70, 70);
                }
            }
        }
    }
}
let notarget = true;
let xy = [];
let available = [];
let targetclicked;
canvas.addEventListener("click", (event) => {
    let xclick = event.layerX;
    let yclick = event.layerY;
    drawboard();
    if (notarget) {
        for (let i = 0; i < 8; i++) {
            for (let z = 0; z < 8; z++) {
                if (
                    xclick > 70 * z &&
                    xclick < 70 * z + 70 &&
                    yclick > 70 * i &&
                    yclick < 70 * i + 70 &&
                    arr[i][z] > 0
                ) {
                    targetclicked = arr[i][z];
                    xy[0] = z;
                    xy[1] = i;
                    notarget = false;
                    if (arr[i][z] == 1) {
                        wpmoves(xy);
                    }
                    if (arr[i][z] == 3) {
                        wnmoves(xy);
                    }
                }
            }
        }
    } else {
        notarget = true;
        if (targetclicked == 1) {
            wpmove(xclick, yclick);
        }
        if (targetclicked == 3) {
            wnmove(xclick, yclick);
        }
    }
});
function wnmoves(xy) {
    for (let i = -2; i < 2; i++) {
        for (let z = -2; z < 2; z++) {
            if (
                arr[xy[1] + i][xy[0] + z] % 2 == 0 ||
                arr[xy[1] + i][xy[0] + z] == 0
            ) {
                ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
                ctx.fillRect((xy[0] + z) * 70, (xy[1] + i) * 70, 70, 70);
            }
            if (
                arr[xy[1] + i][xy[0] + z] % 2 == 0 ||
                arr[xy[1] + i][xy[0] + z] == 0
            ) {
                ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
                ctx.fillRect((xy[0] + z) * 70, (xy[1] + i) * 70, 70, 70);
            }
        }
    }
}
function wnmove(xclick, yclick) {
    console.log("asd");
}
function wpmoves(xy) {
    if (arr[xy[1] - 1][xy[0] - 1] > 0 && arr[xy[1] - 1][xy[0] - 1] % 2 == 0) {
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fillRect((xy[0] - 1) * 70, (xy[1] - 1) * 70, 70, 70);
        available[3] = 1;
    }
    if (arr[xy[1] - 1][xy[0] + 1] > 0 && arr[xy[1] - 1][xy[0] + 1] % 2 == 0) {
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fillRect((xy[0] + 1) * 70, (xy[1] - 1) * 70, 70, 70);
        available[4] = 1;
        console.log(arr[xy[1] - 1][xy[0] - 1]);
    }
    if (arr[xy[1] - 1][xy[0]] == 0) {
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fillRect(xy[0] * 70, (xy[1] - 1) * 70, 70, 70);
        available[0] = 1;
        if (arr[xy[1] - 2][xy[0]] == 0 && xy[1] == 6) {
            ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
            ctx.fillRect(xy[0] * 70, (xy[1] - 2) * 70, 70, 70);
            available[1] = 1;
        }
    }
}

function wpmove(xclick, yclick) {
    //Pawn W
    //1 Step Forward
    if (
        xclick > 70 * xy[0] &&
        xclick < 70 * xy[0] + 70 &&
        yclick > 70 * (xy[1] - 1) &&
        yclick < 70 * (xy[1] - 1) + 70 &&
        available[0] == 1
    ) {
        let temp = arr[xy[1]][xy[0]];
        arr[xy[1]][xy[0]] = 0;
        arr[xy[1] - 1][xy[0]] = temp;
        drawboard();
    }
    //2 Step Forward

    if (
        xclick > 70 * xy[0] &&
        xclick < 70 * xy[0] + 70 &&
        yclick > 70 * (xy[1] - 2) &&
        yclick < 70 * (xy[1] - 2) + 70 &&
        available[1] == 1
    ) {
        let temp = arr[xy[1]][xy[0]];
        arr[xy[1]][xy[0]] = 0;
        arr[xy[1] - 2][xy[0]] = temp;
        drawboard();
    }
    //Take Left
    if (
        available[3] &&
        xclick > 70 * (xy[0] - 1) &&
        xclick < 70 * (xy[0] - 1) + 70 &&
        yclick > 70 * (xy[1] - 1) &&
        yclick < 70 * (xy[1] - 1) + 70
    ) {
        let temp = arr[xy[1]][xy[0]];
        arr[xy[1]][xy[0]] = 0;
        arr[xy[1] - 1][xy[0] - 1] = temp;
        drawboard();
    }
    //Take Rigth

    if (
        available[4] &&
        xclick > 70 * (xy[0] + 1) &&
        xclick < 70 * (xy[0] + 1) + 70 &&
        yclick > 70 * (xy[1] - 1) &&
        yclick < 70 * (xy[1] - 1) + 70
    ) {
        let temp = arr[xy[1]][xy[0]];
        arr[xy[1]][xy[0]] = 0;
        arr[xy[1] - 1][xy[0] + 1] = temp;
        drawboard();
    }
    available = [];
    console.clear();
    console.table(arr);
}
