
    var countBits = function(n) {
        var result = n.toString(2).match(/1/g) != null ? n.toString(2).match(/1/g).length : 0;
        return result;
      };
      console.log(countBits('a'))


countBits([1234])

