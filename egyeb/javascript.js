document.getElementById("start").addEventListener("click", osszegez)
function osszegez() {
    let szam = document.getElementById("szam").value
    let ar = szam * 3000
    let kt = document.getElementById("kotel").checked
    let sis = document.getElementById("sisak").checked
    let beul = document.getElementById("beulo").checked
    let cip = document.getElementById("cipo").checked

    if (kt == true) { ar = ar + szam * 500 }
    if (sis == true) { ar = ar + szam * 300 }
    if (beul == true) { ar = ar + szam * 400 }
    if (cip == true) { ar = ar + szam * 1000 }

    if (kt == true && sis == true && beul == true && cip == true) { ar = ar+ 2000 * szam }

    let hely = document.getElementById("s_varos").value
    if (hely !== "Budapest") { ar = ar * 0.9 }

    let idob = parseInt(document.getElementById("berles_hossz").value);

    switch (idob) {
        case 5: ar = ar * 1.4;
            break;
        case 4: ar = ar * 1.3;
            break;
        case 3: ar = ar * 1.2;
            break;
        case 2: ar = ar * 1.1;
            break;
    }

    if(document.getElementById("zd").checked){ar= ar *1.01}
    if(document.getElementById("sg").checked){ar= ar *1.02}
    if(document.getElementById("fkt").checked){ar= ar *1.03}
    if(document.getElementById("fh").checked){ar= ar *1.04}
    if(document.getElementById("lil").checked){ar= ar *1.05}
    if(document.getElementById("rose").checked){ar= ar *1.06}

    let sajatcucc = document.getElementById('not').checked
    if (sajatcucc == true) { ar = ar * 1.1; }

    let visszav = document.getElementById('regi').checked
    if (visszav == true) { ar = ar * 0.8; }

    let index = document.getElementById('cucc_merete').selectedIndex
    if (index == 0 || index == 1) { ar = ar * 0.95; }
    if (index == 2 || index == 3) { ar = ar * 0.99; }


    document.getElementById("kiiras").innerHTML = `A felszerelésed ára előreláthatólag: ${ar} Ft! Fizetés a helyszínen lehetséges.`;

}