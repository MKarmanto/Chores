# Welcome!

This is my first React-project
Learned the basics of React by doing this project, the code might be bit messy at time, but learned a lot about accessibility, modularity, and other things to keep the code cleaner in the future.

## The project
The project is a simple React app with three pages. The app uses React
Router to navigate between pages and has modular structure.
Under Chores you can find app is used to track chores/tasks.


In the app you can add & delete tasks, give them tags and use checkbox
to mark task completed.The tasks are saved in local storage and a
database. The app doesn't have a search function for tags yet, but you
can filter completed / not completed tasks.

The ChoresComponent and Todo-component contain most of the code.
The app uses API requests to communicate with database, which in this
project is in db.json file at the root of the project and requests are
made through npm package: json-server.

The server is started with "npx json-server -H localhost -p 3010 -w ./db.json"

(For extra feature, you can find a simple counter on the "Counter" page.)
