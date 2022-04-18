
 let docs = document.getElementById('show');

 let x = prompt('JAVASCRIPT nə zaman yaranib?','Daxil edin');

 if(x < 1996 && x > 1994){
     docs.innerHTML = 'Tebrik edirik.Cavab duzdur';
 }
 else if(x >= 1990 && x < 1995){
     docs.innerHTML = 'Cavaba yaxinlasdiniz';
 }
 else if(x > 1995 && x <= 2000){
     docs.innerHTML = 'Cavabdan uzaqlasdiniz';
 }
 else if(x <= 1990 && x >= 1980){
     docs.innerHTML = 'Cox uzaqlasdiniz';
 }
else{
    docs.innerHTML = 'Cavab yanlisdir';
}














  
