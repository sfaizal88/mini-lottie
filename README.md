# Mini lottie

## Introduction

The goal of this project is to create a mini real-time Lottie animation editor. The application includes the following features:\

- JSON Upload: Users can upload a JSON file to edit the animation.
- Property Manipulation: Users can adjust properties like speed, color, and scale.
- Layer Management: Users can view, select, and remove single or multiple layers.
- Real-Time Collaboration: Multiple users can edit the same Lottie animation simultaneously.
- Animation Import: Users can import animations from the LottieFiles website, using the LottieFiles.
- GraphQL API to fetch and display featured animations.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `node server/index.js`

Runs the backend server to support socket / multi user.\

## Feature

- Mini Lottie application design with minimum css (Never used external css framework)
- JSON upload feature.
- Manipulation of properties such as speed, color, and scale.
- Layer management, including selecting single and multiple layers, removing layers, and changing the color of specific layers that support a single color.
- Multi-user editing of the same Lottie animation.
- Showcase of LottieFiles for users to select (The GraphQL link you shared keeps loading and stops with the logo, so I created an alternative method to display it).
- Save file features to the database, including completed queries and database connections.