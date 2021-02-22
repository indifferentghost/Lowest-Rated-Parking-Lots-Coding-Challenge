# Lowest Rated Parking Lots Coding Challenge

## Logistics

This challenge is designed to take around 1 hour or less.

## Instructions

Your goal is to build a web app that finds and displays the lowest rated parking lots in a given region, using the Yelp API. 

Create a frontend with a search field that enables you to enter a location like San Francisco or Los Angeles. Show a list of parking lots from Yelp in that `location` with the address, an image if available, star rating, review count, and link to the Yelp page.

Also display a parking lot score that factors in number of reviews and ratings, using the formula: `score = ( number of reviews * rating ) / (number of reviews + 1)` to understand a bit about why this is needed, read [this](https://fulmicoton.com/posts/bayesian_rating/).

## Running this project

This project was bootstrapped with [Next](https://nextjs.org/). A framework built ontop of [React](https://reactjs.org/).

For development, you will only need Node.js and node package manager (npm), installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

	```sh
  sudo apt install nodejs
  sudo apt install npm
	```

- #### Node installation on MacOS

	You can install nodejs using Homebrew, running the following commands:

	```sh
	brew install node
	```

	Alternatives listed on the [offical Node.js website](https://nodejs.org/en/download/package-manager/#macos)


- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

```sh
node --version
# v8.11.3
```
```sh
npm --version
# 6.1.0
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```sh
npm install npm -g
```

### Environment Variables
This project does use environment variables, the setup is provided by [Next](https://nextjs.org/), you can see the full details in their [documentation about environment variables](https://nextjs.org/docs/basic-features/environment-variables).

You'll need a Yelp API Key set as the environment variable `YELP_API` in an `.env.local` file on the root. See the [documentation for Yelp Business Search](https://www.yelp.com/developers/documentation/v3/business_search)

Here's an example `.env.local` file:

```.env
YELP_API=myyelpkey
```