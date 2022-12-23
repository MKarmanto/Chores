import React from "react";

function Home() {
  return (
    <div className="default-container">
      <h1>Welcome</h1>
      <h2>This is a project made by Matias Karmanto.</h2>
      <p></p>
      <p>
        The project is a simple React app with three pages. The app uses React
        Router to navigate between pages and has modular structure.
      </p>
      <p>Under Chores you can find app is used to track chores/tasks</p>
      <p>
        In the app you can add & delete tasks, give them tags and use checkbox
        to mark task completed.The tasks are saved in local storage and a
        database. The app doesn't have a search function for tags yet, but you
        can filter completed / not completed tasks.
      </p>
      <p>
        The app uses API requests to communicate with database, which in this
        project is in db.json file at the root of the project and requests are
        made through npm package: json-server.
      </p>
      <p>
        The server is started with "npx json-server -H localhost -p 3010 -w
        ./db.json"
      </p>
      <p>
        The project was started by following a tutorial, but quickly diverged
        from it for extra features. You can find the tutorial at the bottom.
      </p>
      <p>
        https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
      </p>
      <p>
        (For extra feature, you can find a simple counter on the "Counter"
        page.)
      </p>
    </div>
  );
}
export default Home;
