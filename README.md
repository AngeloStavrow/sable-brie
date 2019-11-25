# sable-brie: An Unsplash Sample App

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/sable-brie)

This sample app fetches a random photo from the Unsplash API! If you provide it with a search query, it'll choose the random photo based on that info.

Click the remix button at the top of this README to get your own copy of the Glitch project! 

Next, you'll need to sign up for a [Unsplash Developer Account](https://unsplash.com/developers) if you don't already have one, and then [create an app on Unsplash](https://unsplash.com/oauth/applications/new) for access to their API. Give the app the same name as your remixed project (in this case, my app on Unsplash is called **sable-brie**).

Once you've done that, get the Access and Secret Keys from your application's dashboard (look under the 🔑 **Keys** section), drop them in your remixed project's `.env` file, and you're ready to go.

Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

## The Project

On the front-end,
- edit `public/client.js`, `public/style.css` and `views/index.html`
- drag in `assets`, like images or music, to add them to your project

On the back-end,
- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)
  - Add your Unsplash app's Access Key to `APP_ACCESS_KEY`
  - Add your Unsplash app's Secret Key to `APP_SECRET`

## Made on [Glitch](https://glitch.com/)

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

\ ゜o゜)ノ
