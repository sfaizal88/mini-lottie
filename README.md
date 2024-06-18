# Mini lottie

## Introduction

The goal of this project is to create a mini real-time Lottie animation editor. The application includes the following features:

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

Runs the backend server to support socket / multi user.

### `npm run deploy`

Runs the frontend code deployment in github server and you can visit the github page to check the output [https://github.com/sfaizal88/mini-lottie/settings/pages](https://github.com/sfaizal88/mini-lottie/settings/pages) to check whether its deployed. You can check the output directly at the website link [https://sfaizal88.github.io/mini-lottie/](https://sfaizal88.github.io/mini-lottie/)

## Feature

- Mini Lottie application design with minimum css (Never used external css framework)
- JSON upload feature.
- Manipulation of properties such as speed, color, and scale.
- Layer management, including selecting single and multiple layers, removing layers, and changing the color of specific layers that support a single color.
- Multi-user editing of the same Lottie animation.
- Showcase of LottieFiles for users to select (The GraphQL link you shared keeps loading and stops with the logo, so I created an alternative method to display it).
- Save file features to the database, including completed queries and database connections.

## Planned feature

- Real time edition of the json file.
- File upload validation.
- Multi color layer update.
- Scale / speed update for each layer.
- Layer selection shown in the viewer section.
- Download feature in gif format.
- Adding play and pause like controller for the animation.
- Validation for speed and scale field.
- Controlling proper error message and success message.
- Support multi language.
- Support different device and responsive design.

## Screenshots
Initial screen
![Screenshot 2024-06-18 at 5 39 19 PM](https://github.com/sfaizal88/mini-lottie/assets/16524711/7d02a663-6db1-4e62-bf7a-07530f76f957)

Animation after json upload / select animation from below list
![Screenshot 2024-06-18 at 5 39 33 PM](https://github.com/sfaizal88/mini-lottie/assets/16524711/8baeb35d-2c30-4c35-878a-07f0d385432c)

Changing color of the layer
![Screenshot 2024-06-18 at 5 39 45 PM](https://github.com/sfaizal88/mini-lottie/assets/16524711/14542cd7-7286-46b3-b5bb-7629bced6423)

