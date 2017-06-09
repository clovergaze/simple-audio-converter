# Simple Audio Converter

The app converts all .WAV files inside a specified folder and its subfolders to .MP3 files.

## Run
This program uses [Node.js](https://nodejs.org/), it must be on your system.

First, install the dependencies with:
~~~bash
npm install
~~~

This will install all modules necessary to build and run the app.

You can now build the program with:

~~~bash
npm run grunt
~~~

This will start the default [Grunt](https://gruntjs.com/) task. It is configured to build the app by first linting it
and finally transpiling its TypeScript files to JavaScript.

You can now run the audio converter by executing the _index_ file with a folder path to where the .WAV files reside.

For example:
~~~bash
node index my-wav-files
~~~

This will first download a version of [ffmpeg](https://ffmpeg.org/) for your operating system using the Node module
[ffbinaries](https://www.npmjs.com/package/ffbinaries), if ffmpeg was not found inside the audio converters folder. It
then converts all .WAV files inside the specified folder and all its subfolders and places a corresponding .MP3 file
next to them.

To install only dependencies necessary to run the audio converter, without any modules used to build it, run:
~~~bash
npm install --production
~~~

## Development

You can use a preconfigured Grunt _watch_ task for development purposes by running:
~~~bash
npm run grunt watch
~~~

And you can clean up any created files and folders by running:
~~~bash
npm run grunt clean
~~~

## Author
Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License
Copyright (c) 2017 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.