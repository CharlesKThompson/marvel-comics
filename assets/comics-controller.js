MarvelController = function MarvelController(){
    var marvelService = new MarvelService()

    //Private
    function getCharacters(){
        marvelService.getCharacters(drawMarvel)
    }

    function drawMarvel(arr){
        console.log(arr)
        var template = ''
        var marvelElem = document.getElementById("marvel-characters")
        for(var i =0; i<arr.length;i++){
            var char = arr[i]
            char.description = char.description ? char.description : 'No Description Avalable'
            template +=`
            <div class="col s4">
			<img src="${char.thumbnail.path + '.' + char.thumbnail.extension}" alt="">
			<h4><b>Name:</b> ${char.name}</h4>
			<p><b>Description:</b> ${char.description}</p>
			<p><b>Comic Appearances:</b>${char.comics.available}</p>
			<button class="waves-effect waves-light btn" onclick="app.marvelCtrl.addToTeam(${char.id})">Add to team</button>
		</div>
            `
        }
        marvelElem.innerHTML = template
    }

    function drawMyTeam(arr){

    }

    function getMyTeam(){

    }


    //Public

    this.addToTeam = function addToTeam(id){
        //service function
        //drawMyTeam

    }
    this.removeFromTeam = function removeFromTeam(){}




    getCharacters() 
}

