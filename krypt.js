
 /*
    Funcionalidade: *O tipo de rotação da criptografia = 3
    -Pegar a Primeira Posição + a rotação da cripto;
    - ex: A = [1] + [3];
  */


let Alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z'];

function krypto(pharse){
    let frase = '';

    pharse.toLowerCase();
   for(let i = 0; i < pharse.length; i++){
       let x = pharse.charCodeAt([i]);
       let m = String.fromCharCode(x);

       if(m.toLowerCase() === m){
           if(pharse == ''){
               return m.trim();
           }
           if(/[\d\s\.]+/.test(m)){
                frase += m;
           }
           else{
               x = (x - 97 + 4) % 26;
               frase += Alpha[x];
           }       
       }        
  }
   return console.log('mensagem com krypt:', frase)
}
krypto("you miss 100 percent of the shots you never take. wayne gretzky");

function Dkrypt(pharse){
    let frase = ''
    pharse.toLowerCase();
    for(let i = 0; i < pharse.length; i++){
        let x = pharse.charCodeAt([i]);
        let m = String.fromCharCode(x);

            if(/[\d\s\.]+/.test(m)){
                frase += m
            }
            else{
               x = (x - 23) % 26;
               frase += Alpha[x];
            }    
        }        
    return console.log('mensagem Dkrypt:', frase)
 }
Dkrypt("csy qmww 100 tivgirx sj xli wlsxw csy riziv xeoi. aecri kvixdoc")

