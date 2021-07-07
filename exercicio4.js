function somaMedia(nota1, nota2, nota3){
  let media = (nota1 + nota2 + nota3)/3

  if(media > 6){
    return "aprovado"
  }else{
    return "reprovado"
  };
};

console.log(somaMedia(7,7,7));