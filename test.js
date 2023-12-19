function Tumbler(content) {
  let drink = content
  return {
    getType : function() {
      return drink
    },
    setType : function(newType) {
      drink : newType
    }
  };
}

const canu = Tumbler("커피")
//console.log(canu)
console.log(canu.setType("물")) // undefined
