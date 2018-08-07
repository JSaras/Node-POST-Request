var http = require('http');
var querystring = require('querystring')


var names = ["River", "Zane", "Mark", "Brooks", "Nicolas", "Paxton", "Judah", "Emiliano", "Kaden", "Bryan", "Kyle", "Myles", "Peter", "Clie", "Kyrie", "Thiago", "Brian", "Kenneth", "Andres", "Lukas", "Aidan", "Jax", "Caden", "Milo", "Paul", "Beckett", "Brady", "Colin", "Omar", "Bradley", "Javier", "Knox", "Jaden", "Barrett", "Israel", "Matias", "Jorge", "Zander", "Derek", "Josue", "Cayden", "Holden", "Griffin", "Arthur", "Leon", "Felix", "Remington", "Jake", "Killian", "Clayton", "Sean", "Adriel", "Riley", "Archer", "Legend", "Erick", "Enzo", "Corbin", "Francisco", "Dallas", "Emilio", "Gunner", "Simon", "Andre", "Walter", "Damien", "Chance", "Phoenix", "Colt", "Tanner", "Stephen", "Kameron", "Tobias", "Manuel", "Amari", "Emerson", "Louis", "Cody", "Finley", "Iker", "Martin", "Rafael", "Nash", "Beckham", "Cash", "Karson", "Rylan", "Reid", "Theo", "Ace", "Eduardo", "Spencer", "Raymond", "Maximiliano", "Anderson", "Ronan", "Lane", "Cristian", "Titus", "Travis", "Jett", "Ricardo", "Bodhi", "Gideon", "Jaiden", "Fernando", "Mario", "Conor", "Keegan", "Ali", "Cesar", "Ellis", "Jayceon", "Walker", "Cohen", "Arlo", "Hector", "Dante", "Kyler", "Garrett", "Donovan", "Seth", "Jeffrey", "Tyson", "Jase", "Desmond", "Caiden", "Gage", "Atlas", "Major", "Devin", "Edwin", "Angelo", "Orion", "Conner", "Julius", "Marco", "Jensen", "Daxton", "Peyton", "Zayn", "Collin", "Jaylen", "Dakota", "Prince", "Johnny", "Kayson", "Cruz", "Hendrix", "Atticus", "Troy", "Kane", "Edgar", "Sergio", "Kash", "Marshall", "Johnathan", "Romeo", "Shane", "Warren", "Joaquin", "Wade", "Leonel", "Trevor", "Dominick", "Muhammad", "Erik", "Odin", "Quinn", "Jaxton", "Dalton", "Nehemiah", "Frank", "Grady", "Gregory", "Andy", "Solomon", "Malik", "Rory", "Clark", "Reed", "Harvey", "Zayne", "Jay", "Jared", "Noel", "Shawn", "Fabian", "Ibrahim", "Adonis", "Ismael", "Pedro", "Leland", "Malakai", "Malcolm"];

function sendForm() {
    names.forEach(name => {
        var newName = name + Math.floor(Math.random() * Math.floor(300)) + "@yahoo.com";
        var pass = name + Math.floor(Math.random() * Math.floor(300));

        var postData = querystring.stringify({
            browserinfo: null,
            step: 'confirmation',
            rt: null,
            rp: null,
            t: 1337,
            p: 0,
            whichForm: "login",
            inputEmailHandle: newName,
            inputPassword: pass
        })

        var post_options = {
            host: //Server,
            port: '80',
            path: //Route,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        var post_req = http.request(post_options, (res) => {
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
            });
            res.on('error', (error) => {
                console.log(error);
                
            })
        })
        console.log('Sending ' + newName);
                
        post_req.write(postData);
        post_req.end();


    });

}


sendForm()