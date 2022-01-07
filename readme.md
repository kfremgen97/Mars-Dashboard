# Mars Dashboard

This application consist of a dashboard that consumes the NASA API that will allow the user to select which rover's information they want to view.

## Getting the project running

There are a numebr of steps required to get the project running after cloning or downloading the project.

Below are the steps to run the project:

1. Add a .env file
    - Create a [NASA API KEY](https://api.nasa.gov/) 
      - Add your key as a variable ( NASA_API_KEY = ******* api key ********** )

2. Install required dependencies via ( npm install )

3. Build the project via (npm run webpack-prod)
    - Adds offline fucntionality via webpacks ervce workers

4. After the project is built start the server via ( npm run server-start )
    - There srver starts on localhost://8080

