var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  
  var run2015 = {data:[
    {"exp" : 1, "dest" :9},
    {"exp" : 2, "dest" :8},
    {"exp" : 3, "dest" :11},
    {"exp" : 4, "dest" :6},
    {"exp" : 6, "dest" :4},
    {"exp" : 7, "dest" :2},
    {"exp" : 8, "dest" :4},
    {"exp" : 9, "dest" :3},
    {"exp" : 10, "dest" :7},
    {"exp" : 11, "dest" :1},
    ]};
    
  var run2016 = {data:[
    {"exp" : 1, "dest" :10},
    {"exp" : 2, "dest" :9},
    {"exp" : 3, "dest" :8},
    {"exp" : 4, "dest" :7},
    {"exp" : 5, "dest" :11},
    {"exp" : 6, "dest" :1},
    {"exp" : 7, "dest" :5},
    {"exp" : 8, "dest" :3},
    {"exp" : 9, "dest" :2},
    {"exp" : 10, "dest" :6},
    {"exp" : 11, "dest" :4},
    ]};
    
    var run2017 = {data:[
    {"exp" : 11, "dest" :7}, //nicole=>patrick
    {"exp" : 4, "dest" :9},  //benoit => stephane
    {"exp" : 1, "dest" :13}, // mathieu => Christine
    {"exp" : 2, "dest" :12}, //yves => Yvon
    {"exp" : 3, "dest" :5}, //martine => pauline
    {"exp" : 5, "dest" :6}, //pauline => michele
    {"exp" : 6, "dest" :3}, //michele => martine
    {"exp" : 7, "dest" :10}, //patrick => bernard
    {"exp" : 8, "dest" :2}, //thomas => yves
    {"exp" : 9, "dest" :11}, //stephane => nicole
    {"exp" : 10, "dest" :1}, //bernard => mathieu
    {"exp" : 12, "dest" :4}, //Yvon => benoit
    {"exp" : 13, "dest" :8}, //Christine => thomas
    ]};
    
    var run2018 = {data:[
    {"exp" : 2, "dest" :11}, //yves => nicole
    {"exp" : 3, "dest" :12},  //martine => yvon
    {"exp" : 4, "dest" :8}, // benoit => thomas
    {"exp" : 5, "dest" :9}, //pauline => stephane
    {"exp" : 6, "dest" :5}, //michele => pauline
    {"exp" : 1, "dest" :14}, //mathieu => Sarah
    {"exp" : 7, "dest" :13}, //patrick => christine
    {"exp" : 8, "dest" :10}, //thomas => bernard
    {"exp" : 9, "dest" :1}, //stephane => mathieu
    {"exp" : 10, "dest" :4}, //bernard => benoit
    {"exp" : 11, "dest" :6}, //nicole => michele
    {"exp" : 12, "dest" :7}, //Yvon => patrick
    {"exp" : 13, "dest" :2}, //Christine => yves
    {"exp" : 14, "dest" :3}, //Sarah => martine
    ]};
    
    var run2019 = {"data":[
      {"exp":1,"dest":8},{"exp":2,"dest":15},{"exp":3,"dest":14},{"exp":4,"dest":11},{"exp":5,"dest":10},{"exp":6,"dest":12},{"exp":7,"dest":16},{"exp":8,"dest":13},{"exp":9,"dest":4},{"exp":10,"dest":3},{"exp":11,"dest":5},{"exp":12,"dest":9},{"exp":13,"dest":6},{"exp":14,"dest":1},{"exp":15,"dest":7},{"exp":16,"dest":2}
      ]};
// mathieu => thomas
// yves => Loïc
// martine => manu
// benoit => bernard
// pauline => sarah
// michele => nicole
// patrick => Christelle
// thomas => marie
// stephane => benoit
// sarah => martine
// bernard => pauline
// nicole => stephane
// marie => michele
// manu => mathieu
// Loïc => patrick
// Christelle => yves

  $scope.listExp = null;
  $scope.listDest = null;
  $scope.results = null;
  $scope.logText = null;
  
  
  
  $scope.findDest = function(expIndex, destIndex) {
      return false;
  }
  
  checkInvert = function(idExp, idDest) {
    
     for(var i =0;i < $scope.listDest.data.length;i++){
          if($scope.listDest.data[i].exp === idDest && $scope.listExp.data[i].dest === idExp) {
               return true;
          }
      }
      return false;
  }
  
  checkRun2015 = function(idExp, idDest) {
        for(var i =0;i < run2015.data.length;i++){
          if(run2015.data[i].exp === idExp) {
            if(run2015.data[i].dest === idDest) {
               return true;
            }  
            return false;
          }
        }
        return false;
  }
  
  checkRun2016 = function(idExp, idDest) {
        for(var i =0;i < run2016.data.length;i++){
          if(run2016.data[i].exp === idExp) {
            if(run2016.data[i].dest === idDest) {
               return true;
            }  
            return false;
          }
        }
        return false;
  }
  
  checkRun2017 = function(idExp, idDest) {
      for(var i =0;i < run2017.data.length;i++){
        if(run2017.data[i].exp === idExp) {
          if(run2017.data[i].dest === idDest) {
              return true;
          }  
          return false;
        }
      }
      return false;
  }

  checkRun2018 = function(idExp, idDest) {
    for(var i =0;i < run2018.data.length;i++){
      if(run2018.data[i].exp === idExp) {
        if(run2018.data[i].dest === idDest) {
            return true;
        }  
        return false;
      }
    }
    return false;
  }
  
  checkIfExist = function(idExp, idDest) {
    console.log($scope.results);
      for(var i =0;i < $scope.results.length;i++){
          if($scope.results[i].exp.id === idDest && $scope.results[i].dest.id === idExp) {
               return true;      
          }
        }
        return false;
  }

  $scope.exportCurrentData = function() {
    var currentExport = {data: []};
    
    for(var i=0;i<$scope.results.length;i++) {
      currentExport.data.push({exp: $scope.results[i].exp.id, dest : $scope.results[i].dest.id});
    }
    
    $scope.log2(currentExport);
  }
  
  $scope.log2 = function(log) {
    //console.log(log);
    $scope.logText.push(log);
  }
  
  $scope.init = function(log) {
    $scope.listExp = {"data" : [
      {"nom" : "mathieu", "id" : 1, "famille" :1 },
      {"nom" : "yves", "id" : 2, "famille" :1 }, 
      {"nom" : "martine", "id" : 3, "famille" :1 },
      {"nom" : "benoit", "id" : 4, "famille" :1 },
      {"nom" : "pauline", "id" : 5, "famille" :1 },
      {"nom" : "michele", "id" : 6, "famille" :2 },
      {"nom" : "patrick", "id" : 7, "famille" :2 },
      {"nom" : "thomas", "id" : 8, "famille" :2 },
      {"nom" : "stephane", "id" : 9, "famille" :2 },
      {"nom" : "sarah", "id" : 10, "famille" :2 },
      {"nom" : "bernard", "id" : 11, "famille" :3 },
      {"nom" : "nicole", "id" : 12, "famille" :3 },
      {"nom" : "marie", "id" : 13, "famille" :3 },
      {"nom" : "manu", "id" : 14, "famille" :3 },
      {"nom" : "Loïc", "id" : 15, "famille" :3 },
      {"nom" : "Christelle", "id" : 16, "famille" :3 },

      // {"nom" : "Yvon", "id" : 12, "famille" :4 },
      // {"nom" : "Christine", "id" : 13, "famille" :4 },
      
      // Attention en melangeant les Id des participants, cela fausse les resultats des annees precedentes.
    ]};
    
    $scope.listDest = angular.copy($scope.listExp);
    $scope.results = [];
    $scope.logText = [];
  }
  
  function randomNumber() {
      return Math.floor((Math.random() * $scope.listDest.data.length)); 
  }
  
  $scope.run = function() {
    
     $scope.init();
     var dataLength = $scope.listExp.data.length;
     var j = 0;
     var found = 0;
     var i=0;
     
     while(found<dataLength) {
      
        var rand = randomNumber();
        
        if($scope.listExp.data[i].id === $scope.listDest.data[rand].id) {
          $scope.log2("Meme personne ! " + $scope.listExp.data[i].nom +"=>" + $scope.listDest.data[rand].nom);
          
        }
        else if($scope.listExp.data[i].famille === $scope.listDest.data[rand].famille) {
          $scope.log2("Meme famille ! " + $scope.listExp.data[i].nom +"=>" + $scope.listDest.data[rand].nom);
        }
        else if(checkRun2015($scope.listExp.data[i].id, $scope.listDest.data[rand].id)) {
          $scope.log2("en 2015 ! " + $scope.listExp.data[i].nom +"=>" + $scope.listDest.data[rand].nom);
        }
        else if(checkRun2016($scope.listExp.data[i].id, $scope.listDest.data[rand].id)) {
          $scope.log2("en 2016 ! " + $scope.listExp.data[i].nom +"=>" + $scope.listDest.data[rand].nom);
        }
        else if(checkRun2017($scope.listExp.data[i].id, $scope.listDest.data[rand].id)) {
          $scope.log2("en 2017 ! " + $scope.listExp.data[i].nom +"=>" + $scope.listDest.data[rand].nom);
        }
        else if(checkRun2018($scope.listExp.data[i].id, $scope.listDest.data[rand].id)) {
          $scope.log2("en 2018 ! " + $scope.listExp.data[i].nom +"=>" + $scope.listDest.data[rand].nom);
        }
        else if(checkIfExist($scope.listExp.data[i].id, $scope.listDest.data[rand].id)) {
          $scope.log2("Cette association existe deja dans l'autre sens! " + $scope.listExp.data[i].nom +"=>" + $scope.listDest.data[rand].nom);
        }
        else {
          $scope.results.push({
            "exp":$scope.listExp.data[i],
            "dest" :$scope.listDest.data[rand]
          });
          found++;
          $scope.listExp.data.splice(i,1);
          $scope.listDest.data.splice(rand,1);
        }
        
        j++;
        if(j==10) {
            for(var k=0;k<100000000;k++){}
        }
        if(j>100) {
          $scope.log2("Le programme n'arrive pas a determiner une generation correcte - recommencez !");
             $scope.init();
            var dataLength = $scope.listExp.data.length;
            var j = 0;
            var found = 0;
            var i=0;    
        }
     }
    
  };
  
  
  
  $scope.init();
  
});
