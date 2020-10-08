const runner = {
    name: 'Kev',
    lastName: 'Barr',
    title: 'The Top Dawg'
}

// function print(person) {
//     const { name, lastName, title } = person;
//     console.log(`${name} ${lastName} is a mothafuking ${title}`)
// }
// print(runner)

function print({name, lastName, title}) {
    console.log(`${name} ${lastName} is a mothafuking ${title}`)
}

print(runner)


const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
}

parseResponse(response)