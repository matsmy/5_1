(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    answer.innerHTML="TRWA ŁADOWANIE";
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(function (dane){
          NowaLinia(dane)
        })
    function NowaLinia(dane){
      answer.innerHTML="";
      for (var i =0; i <dane.length;i++){
        var div = document.createElement("div");
        div.innerHTML= '<mark><strong>UserID: ' + dane[i].userId + '</strong></mark><br><em>id: ' + dane[i].id +'</br></em>' + ' title: ' + dane[i].title + '<br> body: '+ dane[i].body + '<br><hr>';
        answer.appendChild(div);
      }
    }
  })

  cw2.addEventListener("click", function () {
    answer.innerHTML="TRWA ŁADOWANIE";
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(respone=>response.json())
    .thn(function(dane){
    NowaLinia(dane)
    })
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
  })

})();