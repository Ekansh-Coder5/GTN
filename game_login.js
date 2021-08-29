function addUser() {
    P1NAME = document.getElementById('P1Input').value
    P2NAME = document.getElementById('P2Input').value

    localStorage.setItem("P1key", P1NAME)
    localStorage.setItem("P2key", P2NAME)
    window.location = 'game_page.html'
}
