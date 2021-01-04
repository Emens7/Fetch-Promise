/*
Hozz létre egy tipikus HTML - CSS- JS projektet.
Helyezz el középre igazítva egy magyar zászlót az oldal tetején.
Amikor az alkalmazás betöltődik indíts el egyidejűleg kettő fetch kérést az alábbi két url-re, 
Promise.all használatával:
https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/teams.json
https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/hungary-players.json
Jelenítsd meg a HTML oldalon a magyar csapat alapvető adatait (legalább hármat).
Jelenítsd meg a HTML oldalon a kapott adatok alapján a magyar csapat játékosait,
 pozíciójukat és klubjukat soronként rendezve. Példa: Dibusz Dénes, Goalkeeper, Ferencváros
*/

async function huLab() {
    let soccerCountry = fetch('https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/teams.json')
    let soccerHunPlayer = fetch('https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/hungary-players.json')
    let data = await Promise.all([soccerCountry, soccerHunPlayer]);

    const sCountry = await data[0].json();
    const soccerHunTeam = sCountry['sheets']['Teams'][21];
    
    const teamHun = await data[1].json();
    const menHun = teamHun['sheets']['Players'];

    const group = sCountry['sheets']['Teams'][21].Group;
    document.querySelector('.group').innerText = group;

    const coatch = sCountry['sheets']['Teams'][21].Coach;
    document.querySelector('.coatch').innerText = coatch;

    const fifaRank = sCountry['sheets']['Teams'][21]['FIFA ranking'];
    document.querySelector('.fifaRank').innerText = fifaRank;

    const players = document.querySelector('.player')

    menHun.forEach((element, index) => {
    
        const player = `<tr>
                        <th scope="row">${index + 1}</th>
                        <td class="">${element.name}</td>
                        <td class="">${element.bio}</td>
                        <td class="">${element.position}</td>
                        </tr>`;
        players.innerHTML += player
    });
    
}
huLab();

