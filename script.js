let resposta = fizzBuzz(5);
console.log(resposta)

function fizzBuzz(entrada){
    switch(entrada){
      case entrada !== "number":
        console.log("não é um número");
        break;

      case entrada % 3 === 0:
        console.log(Fizz);
        break;
        
      case entrada % 5 === 0:
        console.log(Buzz);
        break;
        
      case entrada % 3 && entrada % 5 === 0:
        console.log(Fizzbuzz);
        break;
        
      case entrada % 3 && entrada % 5 !== 0:
      console.log(entrada);

      default:
        break;

    }
}