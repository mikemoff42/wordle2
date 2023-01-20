let letters='QWERTYUIOPASDFGHJKLZXCVBNM';
let allKeys=[];
let colorKeys=[];
function KeyBoard(){
  let rowCount=1;
  let counter =0;
  let clr = [250,190];
  for (let i=0;i<letters.length;i++){
    if (i==10){
      rowCount++;
      counter=0;
    }
    else if (i==19){
      rowCount++;
      counter=0;
    }
    allKeys[i] = new Key(counter,letters[i],rowCount,clr)
    counter++;
  }
  
}
function showKeys(){
  for (let i=0;i<26;i++){
    allKeys[i].show();
    
  }
  enterBackspace();
}