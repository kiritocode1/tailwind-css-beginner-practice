# tailwind-css-beginner-practice
this is the tailwind practice i made for myself
>TO DOWNLOAD TAILWIND FOLLOW THE FOLLOWING STEPS
>>  first make a new react app with tailwind ->
>>>```npx create-react-app my-project```
>>>```cd my-project```
>>well  it's name is my-project but u can name it anything as you wish . and then follow the steps necessary 
>>
>>then install ```tailwind css``` and it's peer dependencies and and then run init command to generate both
>>```tailwind.config.js``` and the ```postcss.config.js```
>>>```npm install -D tailwindcss postcss autoprefixer```
>>>```npx tailwindcss init -p```
>>and then do some changes to the tailwind.config.js , that is the config 
>> file that youre going to change 
>>> before : content:[]
>>> after : content:["./src/**/*.{js,jsx,ts,tsx}",]
>>and then we do the changes to the ./src/index files basically remove everything and add the 3 things that arte right here
>>>```@tailwind base;```
>>>```@tailwind components;```
>>>```@tailwind utilities;```
>>and thats almost it , now in the terminal -> ```npm run start```
>>once this is done and success is found , please 