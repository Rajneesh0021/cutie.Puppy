# cutie.Puppy
CRUD opperation using typescript nodejs express
## HOW TO RUN
1. clone this repository.
2. Open terminal and install the dependencies by using `npm install` or `npm i`, install nodemon if not installed globally by writting command `npm i nodemon`.
3. add `.env` file and provide your mongoose url as `MongoCon` and port as `PORT`.
4. On Terminal write `npx tsc` for build.
5. On Terminal write `npm start` for starting the server.
6. Now it's ready to use, you can customize the code in `src` folder and build using `npx tsc` to see your changes.


## Endpoints
|Method | ENDPOINT | DESCRIPTION |
|--------|-----------|------------|
|GET | /animals | To get all the dogs info|
|POST | /animals | To create a new Dog info|
|PUT | /animals/:id | To update existing Dog info.|
|DELETE | /animals/:id | To delete the dogs info|


## Dataschema

|FEILD | TYPE | DESCRIPTION |
|--------|-----------|------------|
|name | String | name of the dog, required |
|speceis |String| Spicy of the dog, required |
|age | Number | Age of the Dog, 1means one year 0.1means one month,  required |

