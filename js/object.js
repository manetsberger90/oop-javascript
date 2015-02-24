var students = [
    {
        name: 'Jill',
        track: 'iOS',
        achievements: 32,
        points: 5438,
    },
    { 
        name:  'Henrietta',
        track: 'Front-end Web Development',
        achievements: 14,
        points: 1281,
    },
    { 
        name: 'Garfield',
        track: 'Android',
        achievements: 37,
        points: 2583,
    },
    { 
        name: 'Hubert Cumberdale',
        track: 'Back-End Web Development',
        achievements: 92,
        points: 14289, 
    },
    {
        name: 'Joe Rogan',
        track: 'Web Design',
        achievements: 18,
        points: 1488,
    },
];


var message = '';
var student = '';
var search = '';

function print (message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}

 function getStudentReport( index ) {
   var report = "<h2>Name: " + students[index].name + "</h2>";
   report += "<p>Track: " + students[index].track + "</p>";
   report += "<p>Achievements: " + students[index].achievements + "</p>";
   report += "<p>Points: " + students[index].points + "</p>";
   return report;
}

while (true) {
 search = prompt("Search for a students name, i.e. [Joe Rogan]. Type 'quit' to exit Search");
    if (search === null || search === undefined || search.toLowerCase() === 'quit') {
        break;
    }
    else { 
        for (i = 0; i < students.length; i += 1) {

            if (students[i].name.toLowerCase() === search.toLowerCase()) {
                message = getStudentReport(i);
                print(message);

                }
            }
    
    }
    

}

