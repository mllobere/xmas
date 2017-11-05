var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  
  var run2016 = {data:[
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
    {"nom" : "bernard", "id" : 10, "famille" :3 },
    {"nom" : "nicole", "id" : 11, "famille" :3 }
  ]};
  
  $scope.listDest = angular.copy($scope.listExp);
  $scope.results = [];
  $scope.logText = [];
  
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
  
  
  $scope.log2 = function(log) {
    console.log(log);
    $scope.logText.push(log);
  }
  
  $scope.clear = function(log) {
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
    {"nom" : "bernard", "id" : 10, "famille" :3 },
    {"nom" : "nicole", "id" : 11, "famille" :3 }
  ]};
  
  $scope.listDest = angular.copy($scope.listExp);
  $scope.results = [];
  $scope.logText = [];
  }
  
  
  $scope.run = function() {
    
    // $scope.listExp.data.splice(1,1);
    //delete $scope.listExp.data[1];
    // return

    //for(var i =0;i < $scope.listExp.data.length;i++){
     i = 0;
      var rand = Math.floor((Math.random() * $scope.listDest.data.length));
      
      if($scope.listExp.data[i].id === $scope.listDest.data[rand].id) {
        $scope.log2("Meme personne ! " + $scope.listExp.data[i].nom +"=>" + $scope.listDest.data[rand].nom);
      }
      else if($scope.listExp.data[i].famille === $scope.listDest.data[rand].famille) {
        $scope.log2("Meme famille ! " + $scope.listExp.data[i].nom +"=>" + $scope.listDest.data[rand].nom);
      }
      else if(checkRun2016($scope.listExp.data[i].id, $scope.listDest.data[rand].id)) {
        $scope.log2("en 2016 ! " + $scope.listExp.data[i].nom +"=>" + $scope.listDest.data[rand].nom);
      }
      else {
         $scope.results.push({
           "exp":$scope.listExp.data[i],
           "dest" :$scope.listDest.data[rand]
         });
         $scope.listExp.data.splice(i,1);
         $scope.listDest.data.splice(rand,1);
      }
    // }
    
  }
  
  
  
  
  
});
