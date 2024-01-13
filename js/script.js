LuasKelilingPersegi = () => {
    let sisi = document.getElementById('sisiPersegi').value;
    let luas = sisi*sisi;
    let keliling = sisi*4;
    document.getElementById('luasPersegi').innerHTML = "<b><p>Luas : " + luas + " m2</p><p>Keliling : " + keliling + " m</p></b>";
    document.getElementById('luasPersegi').style.display = "flex";
    document.getElementById('luasPersegi').style.flexDirection = "column";
}

resetValue = () => {
    document.getElementById('sisiPersegi').value = null;
    document.getElementById('luasPersegi').style.display = "none";
}