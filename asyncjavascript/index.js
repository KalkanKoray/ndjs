const fs = require ("fs") ; 
   
    //DOSYA YAZMA
    fs.writeFile("employees.json",'{"name" : "Emloyee1", "salary": 2000}',  "utf8", (err,data)=>{
        if (err);
        console.log(err);
        console.log(data);
        console.log("Dosya Yazildi");
    })
    /*
    //DOSYA OKUMA
    fs.readFile("employees.json","utf8", (err,data)=>{
        if (err);
        console.log(err);
        console.log(data);
        console.log("Dosya Okundu");
    })


    //DOSYA EKLEME
    fs.appendFile ("employees.json",' {"name" : "Emloyee2", "salary": 3000}',"utf8", (err,data)=>{
        if (err);
        console.log(err);
        console.log(data);
        console.log("Dosyaya  Eklendi");
    })
   
    //DOSYA SiLME
    fs.unlink("employees.json", (err)=>{
        if (err);
        console.log(err);
        console.log("Dosya Silindi");
    })
    
  
    */


