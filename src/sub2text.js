var fs = require('fs');

module.exports = function(file){
    if(fs.existsSync(file)){
        var arrayStrings;
        fs.readFile(file, function(err, data){
          if (err) throw err;
          arrayStrings = data.toString().split('\n');
          arrayStrings = arrayStrings.filter(cbFilter);
          return arrayStrings.join('\n');
        });
    }else{
        console.log('No existe el archivo');
    }

    function cbFilter(elem, index){
        //console.log(elem);
        var exReg = /\d:\d{2}:\d{2}.\d{3}/g ;
        var exRegArray = exReg.test(elem);
        if(elem === '' || exRegArray === true){
            return false;
        }else{
            return true;
        }
    }
};
