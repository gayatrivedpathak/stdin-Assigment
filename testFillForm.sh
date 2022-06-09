#! /bin/bash

node fillForm.js << EOF > /dev/null
Juieli
2001-12-12
singing,dancing
1234567890
here
somewhere
EOF

echo -n '{"name":"Juieli","dob":"2001-12-12","hobbies":["singing","dancing"],"mob":"1234567890","address":"here\nsomewhere"}' > expectedResponses.json

diff expectedResponses.json responses.json

if [[ $! -eq 0 ]]
then 
  echo 'test passed' 
fi
