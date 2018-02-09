MarvelService = function MarvelService() {
    var key = '?apikey=e44062bbc76b37176b08325d5265a0f3';
    var baseUrl = 'http://gateway.marvel.com/v1/public/'

    var marvelCharacters = []
    var myTeam = []


    this.getMyTeam = function () {
        return myTeam
    }

    this.removeFromTeam = function (id) {
        var character = getCharacterbyId(myTeam, id)

        if (!character) { return }
        
        var i = myTeam.indexof(char)
        
        myTeam.splice(i, 1)
    }


    function getCharacterbyId(arr, id) {
        for (var i = 0; i < arr.length; i++) {
            var character = arr[i]
            if (id == character.id) {
                return character
            }
        }
    }
    this.addToTeam = function (id) {

        var marvelChacater = getCharacterById(marvelCharacters, id)
        if (
            !marvelCharacter ||
            getCharacterbyId(myTeam, id) ||
            myTeam.length >= 5
        ) { return }

        myTeam.push(marvelCharacter)
    }


    this.getCharacters = function (callWhenDone) {
        var data = localStorage.getItem('MarvelData')
        if (data) {
            marvelCharacters = JSON.parse(data);
            return callWhenDone(marvelCharacters)
        }
        $.get(baseUrl + 'characters' + key, function (response) {
            localStorage.setItem('MarvelData', JSON.stringify(response.data.results))
            marvelCharacters = response.data.results;
            callWhenDone(marvelCharacters)
        })
    }

}
