const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function plus1() {
  console.log("HHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  url = "https://192.168.0.43:8080/among";

    $.get(url, callBackGetSuccess).done(function() {
      console.log('succes');
         })
         .fail(function() {
           console.log('error');
         })
         .always(function() {
           //alert( "finished" );
         });

         var callBackGetSuccess = function(data) {
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature est de " + data.main.temp;
}
}
