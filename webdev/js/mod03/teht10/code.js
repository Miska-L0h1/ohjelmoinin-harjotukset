//establish candidates
var num = parseInt(prompt("enter number of candidates."))
var listorg = []

//ask names
for (let i = 1; i <= num; i++) {
    let name = prompt("Name for candidate " + i)
    listorg[i-1] = { name: name, votes: 0 }
}

//ask voters
var voters = parseInt(prompt("enter number of voters."))

//collect votes
for (let i = 1; i <= voters; i++) {
    let vote = prompt("voter " + i + ". who do you vote for?")
    if (vote == "") {
        continue
    }
    for (let a = 0; a < listorg.length; a++) {
        if (listorg[a].name == vote) {
            listorg[a].votes = listorg[a].votes + 1
        }
    }
}

//sort votes
listorg.sort(function (a, b) {
    console.log(a, b)
    return b.votes - a.votes
})

//print winner
console.log("The winner is " + listorg[0].name + " with " + listorg[0].votes + " votes.")

//print results
console.log("results:")
for (let i = 0; i < listorg.length; i++) {
    console.log(listorg[i].name + ": " + listorg[i].votes + " votes")
}