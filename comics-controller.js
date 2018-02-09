MarvelController = function MarvelController() {
    var marvelService = new MarvelService()

    //Private
    function getCharacters() {
        marvelService.getCharacters(drawMarvel)
        marvelService.getCharacters(drawMyTeam)
    }

    function drawMarvel(arr) {
        var template = ''
        var marvelElem = document.getElementById('marvel-characters')
        for (var i = 0; i < arr.length; i++) {
            var char = arr[i]
            char.description = char.description ? char.description : 'No Description Avalable'
            template += `
            <div class="col s4">
            <div class = "heroes">
                <img src="${char.thumbnail.path + '.' + char.thumbnail.extension}" alt="">
                <h4><b>Name:</b> ${char.name}</h4>
                <p><b>Description:</b> ${char.description}</p>
                <p><b>Comic Appearances:</b>${char.comics.available}</p>
                <button class="waves-effect waves-light btn" onclick="app.controllers.marvelCtrl.addToTeam(${char.id})">Add to team</button>
            </div>
        </div>
            `
        }
        marvelElem.innerHTML = template
    }

    function drawMyTeam(arr) {
        var template = ''
        var myTeamElem = document.getElementById('my-team')
        for (var i = 0; i < arr.length; i++) {
            var char = arr[i];
            char.description = char.description ? char.description : 'No Desctiption Available'
            template += `
            <div class="col-sm-4">
            <div class = "heroes">
            <img src="${char.thumbnail.path + '.' + char.thumbnail.extension}" alt="">
            <h4><b>Name:</b> ${char.name}</h4>
            <p><b>Description:</b> ${char.description}</p>
            <p><b>Comic Appearances:</b>${char.comics.available}</p>
            <button class="waves-effect waves-light btn" onclick="app.controllers.marvelCtrl.removeFromTeam${char.id})">Remove from team<button>
            </div>
            </div>
            `


        }
        myTeamElem.innerHTML = template
    }
    function getMyTeam() {

    }

    this.addToTeam = function addToTeam(id) {
        marvelService.addToTeam(id)
        drawMyTeam(marvelService.getMyTeam())

    }
    //Public


    this.removeFromTeam = function removeFromTeam(id) {

        marvelService.removeFromTeam(id)
        drawMyTeam(marvelService.getMyTeam())
    }


    getCharacters()
}

