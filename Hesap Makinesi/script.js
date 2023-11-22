"use";
    var _butonlar = document.getElementsByTagName("button"),
    _uzunluk = _butonlar.length,
    i=0
    _sonuc = document.getElementById("sonuc");

    for (i=0; i<_uzunluk; i++){
        _butonlar[i].onclick = hesapla;
    }

    function hesapla(){
        var _deger = this.innerHTML;
        if(_deger == "="){
            try{
                _sonuc.value = eval(_sonuc.value);
            } catch (e){
                _sonuc.value = "0";
            }
            return;
        }
        _sonuc.value += _deger;
    }