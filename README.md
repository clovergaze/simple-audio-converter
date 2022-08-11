# Simple Audio Converter

This application converts all .WAV files inside a specified folder and its subfolders to .MP3 files.

## Run

This program uses [Node.js](https://nodejs.org/), it must be installed on your system.

First, install the dependencies with:

```bash
npm install
```

This will install all packages necessary to build and run the application.

You can now build the program with:

```bash
npm run grunt
```

This will start the default [Grunt](https://gruntjs.com/) task. It is configured to build the application by first
linting it and then transpiling its TypeScript files to JavaScript.

You can now run the audio converter by executing the `bin/convert.js` file and pass it a path to a folder where the .WAV
files reside.

For example:

```bash
node bin/convert <folder name>
```

This will first download a version of [ffmpeg](https://ffmpeg.org/) that is compatible with the operating system using
the [ffbinaries](https://www.npmjs.com/package/ffbinaries) package if ffmpeg was not found inside the audio converter's
folder. It then converts each .WAV file inside the specified folder and in every subfolder to a corresponding .MP3 file
that is placed next to the .WAV file.

To install only the dependencies necessary to run the audio converter, without any packages used for development, run:

```bash
npm install --production
```

## Development

You can use a preconfigured Grunt `watch` task for development purposes by running:

```bash
npm run grunt watch
```

You can clean up any created files and folders by running:

```bash
npm run grunt clean
```

## Bugs & Issues

Something is not working as intended? Please report bugs or issues on
the [corresponding GitHub page](https://github.com/clovergaze/simple-audio-converter/issues).

## Author

Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License

Copyright (c) 2017 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.
