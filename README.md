This is a project made by Matias Karmanto.
The project is a simple React app with three pages. The app uses React Router to navigate between pages and has modular structure.

Under Chores you can find app is used to track chores/tasks

In the app you can add & delete tasks, give them tags and use checkbox to mark task completed.The tasks are saved in local storage and a database. The app doesn't have a search function for tags yet, but you can filter completed / not completed tasks.

The app uses API requests to communicate with database, which in this project is in db.json file at the root of the project and requests are made through npm package: json-server.

The server is started with "npx json-server -H localhost -p 3010 -w ./db.json"

The project was started by following a tutorial, but quickly diverged from it for extra features. You can find the tutorial at the bottom.

https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

(For extra feature, you can find a simple counter on the "Counter" page.)
