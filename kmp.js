function id(id) {
    return document.getElementById(id);
}
var count = 0;
var pattern, text, Psize, Tsize;
var idcountrater = 0;
var conti = 0;
const LpsComputation = async (pattern, Psize, lps, resolve) => {
    let len = 0;
    let i = 1;
    let j = 0;
    id("message").innerText = " ";
    lps[0] = 0;
    for (let i = 0; i < Psize; i++) {
  
        var tile = document.createElement('span')
        tile.classList.add("tile");
        tile.innerText = "0"
        tile.id = idcount;
        id("pattern_text").appendChild(tile);
        idcount++;
    }
  
    id(idcount - Psize + idcountrater).
        style.borderColor = "orange";
    id(idcount - Psize + idcountrater).innerText = "0";
    id(idcount - Psize + idcountrater).
        style.color = "orange";
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 3000)
    )
    id(idcount - Psize + idcountrater).
        style.borderColor = "black";
    id(idcount - Psize + idcountrater).
        style.color = "white"
    // id(`${idcount}`)
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 2000)
    )
    idcountrater++;
    while (i < Psize) {
        if (pattern[i] == pattern[len]) {
            id((idcount - Psize) + len).
                style.borderColor = "cyan";
            id((idcount - Psize) + len).
                style.color = "cyan";
            id((idcount - Psize) + i).
                style.borderColor = "cyan";
            id((idcount - Psize) + i).
                style.color = "cyan";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 2000)
            )
            id((idcount - Psize) + len + 1).
                style.borderColor = "black";
            id((idcount - Psize) + len + 1).
                style.color = "white";
            id((idcount - Psize) + len).
                style.borderColor = "black";
            id((idcount - Psize) + len).
                style.color = "white";
            len++;
            lps[i] = len;
  
            id((idcount - Psize) + i).
                style.borderColor = "cyan";
            id((idcount - Psize) + i).
                innerText = len;
            id((idcount - Psize) + i).
                style.color = "cyan";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 2000)
            )
            id((idcount - Psize) + i).
                style.borderColor = "black";
            id((idcount - Psize) + i).
                style.color = "white";
            i++;
        } else {
            if (len != 0) {
  
                id((idcount - Psize) + len).
                    style.borderColor = "red";
                id((idcount - Psize) + len).
                    style.color = "red";
                id("message").innerText =
                    `since the next element is not equal
                    we need to compare from where 
                    character is repeating in pattern`
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 4000)
                )
                id((idcount - Psize) + len).style.borderColor
                    = "black";
                id((idcount - Psize) + len).style.color
                    = "white";
                len = lps[len - 1];
                id("message").innerText = `we sent 
                    it to ${len} index`;
                id((idcount - Psize) + len).style.borderColor
                    = "green";
                id((idcount - Psize) + len).style.color
                    = "green";
                await new Promise((resolve) =>
                    setTimeout(() => {
                        id("message").innerText = ``;
                        resolve();
                    }, 3000)
                )
                id((idcount - Psize) + len).style.borderColor
                    = "black";
                id((idcount - Psize) + len).style.color
                    = "white";
            } else {
                lps[i] = 0;
                id((idcount - Psize) + i).style.borderColor
                    = "orange";
                id((idcount - Psize) + i).style.color
                    = "orange";
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 3000)
                )
                id((idcount - Psize) + i).style.borderColor
                    = "black";
                id((idcount - Psize) + i).style.color
                    = "white";
                i++;
            }
        }
    } conti = 1;
  
    resolve();
}
const kmp = async (pattern, text, Psize, Tsize) => {
    var lps = [];
    id("message").innerText = `Computing the LPS array first`;
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 4000)
    )
  
    await new Promise((resolve) => {
        LpsComputation(pattern, Psize, lps, resolve);
    })
    id("message").innerText =
        `Now after Computation beginning with 
         the comparison process`;
    await new Promise((resolve) =>
        setTimeout(() => {
            id("message").innerText = " ";
            resolve();
        }, 3000)
    )
    console.log("inside kmp");
    var i = 0;
    var j = 0;
    console.log(`pattern is ${pattern} text is ${text} Tsize 
                 is ${Tsize} Psize ${Psize}`);
    while (i < Tsize) {
        console.log("inside for loop");
        if (pattern[j] == text[i]) {
            console.log("if");
            id(idcount - (Tsize + Psize) - Psize + i).
                style.borderColor = "orange";
            id(idcount - (Tsize + Psize) - Psize + i).
                style.color = "orange";
            id((idcount - Psize) - Psize + j)
                .style.borderColor = "orange";
            id((idcount - Psize) - Psize + j).style.color
                = "orange";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 3000)
            )
            id(idcount - (Tsize + Psize) - Psize + i)
                .style.borderColor = "cyan";
            id(idcount - (Tsize + Psize) - Psize + i)
                .style.color = "cyan";
            id((idcount - Psize) - Psize + j)
                .style.borderColor = "cyan";
            id((idcount - Psize) - Psize + j).style.color
                = "cyan";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 3000)
            )
            id(idcount - (Tsize + Psize) - Psize + i)
                .style.borderColor = "black";
            id(idcount - (Tsize + Psize) - Psize + i)
                .style.color = "white";
            id((idcount - Psize) - Psize + j)
                .style.borderColor = "black";
            id((idcount - Psize) - Psize + j)
                .style.color = "white";
            console.log(`i is ${i} j is ${j}`);
            i++; j++;
        }
        if (j == Psize) {
            console.log(`inside i is ${i} j is${j}`);
            let x = 0;
            while (x < j) {
                id(i - Psize).style.borderColor = "greenyellow";
                id(i - Psize).style.color = "greenyellow";
                id(i).style.borderColor = "greenyellow";
                id(i).style.color = "greenyellow";
                i++;
                x++;
            }
            id("message").innerText =
                "Pattern Found inside of the Text"
            return;
        } else if (i < Tsize && pattern[j] != text[i]) {
            console.log("inside else if");
            if (j != 0) {
                console.log("INSIDE PROBLEM");
                id(idcount - (Tsize + Psize) - Psize + i)
                    .style.borderColor
                    = "orange";
                id(idcount - (Tsize + Psize) - Psize + i)
                    .style.color
                    = "orange";
                id((idcount - Psize) - Psize + j)
                    .style.borderColor
                    = "orange";
                id((idcount - Psize) - Psize + j)
                    .style.color
                    = "orange";
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 3000)
                )
                id(idcount - (Tsize + Psize) - Psize + i)
                    .style.borderColor
                    = "black";
                id(idcount - (Tsize + Psize) - Psize + i)
                    .style.color
                    = "white";
                id((idcount - Psize) - Psize + j)
                    .style.borderColor
                    = "black";
                id((idcount - Psize) - Psize + j)
                    .style.color
                    = "white";
                j = lps[j - 1];
                console.log('logging in');
            } else {
                id(idcount - (Tsize + Psize) - Psize + i)
                    .style.borderColor
                    = "orange";
                id(idcount - (Tsize + Psize) - Psize + i)
                    .style.color
                    = "orange";
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 3000)
                )
                id(idcount - (Tsize + Psize) - Psize + i)
                    .style.borderColor
                    = "black";
                id(idcount - (Tsize + Psize) - Psize + i)
                    .style.color
                    = "white";
                i = i + 1;
            }
        }
    }
}
let idcount = 0;
window.onload = async () => {
    id("displayer").style.display = "none";
    id("start").addEventListener('click', () => {
        id("displayer").style.display = "flex";
        pattern = id("input1").value;
        Psize = pattern.length
        text = id("input").value;
        Tsize = text.length;
        id("input1").style.display = "none"
        id("input").style.display = "none"
        id("start").style.display = "none"
        for (let i = 0; i < Tsize; i++) {
            let tile = document.createElement('span');
            tile.id = idcount;
            tile.classList.add("tile");
            tile.innerText = text[i];
            id("text").appendChild(tile);
            idcount++;
        }
        let idcount1 = 0;
        for (let i = 0; i < Psize; i++) {
            let tile = document.createElement('span');
            tile.id = idcount;
            tile.classList.add("tile");
            tile.innerText = pattern[i];
            id("pattern").appendChild(tile);
            idcount++;
        }
        kmp(pattern, text, Psize, Tsize);
    })
}