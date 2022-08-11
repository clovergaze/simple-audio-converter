import * as path from "path";
import * as glob from "glob";
import * as ffbinaries from "ffbinaries";
import * as ffmpeg from "fluent-ffmpeg";
import * as async from "async";

/*
 * Program arguments
 */

if (process.argv.length < 3) {
  console.log("Usage: node index <folder name>");
  process.exit();
}

const inputFolder = process.argv[2];

/*
 * File conversion
 */

let wavFiles = [];

async.series([
  (callback) => {

    /*
     * Make sure ffmpeg is available
     */

    glob("./ffmpeg/ffmpeg*", (error, file) => {
      if (file.length === 0) {
        console.log("Downloading ffmpeg binaries..");

        ffbinaries.downloadFiles("ffmpeg", {destination: "./ffmpeg"}, () => {
          console.log("Download complete..");
          callback();
        });
      } else {
        callback();
      }
    });
  },
  (callback) => {

    /*
     * Collect .WAV files from folder and subfolders
     */

    glob(path.join(inputFolder, "**/*.wav"), (error, files) => {
      wavFiles = files;
      callback();
    });
  },
  () => {

    /*
     * Convert collected files
     */

    async.eachSeries(wavFiles, convertFiles, () => {
      console.log("Conversion complete..");
    });
  }
]);

/**
 * Convert .WAV files to .MP3 files
 *
 * @param filename Path and filename of the input file
 * @param next Callback method after conversion is done
 */
const convertFiles = (filename, next) => {
  const command = ffmpeg();
  command.setFfmpegPath("./ffmpeg/ffmpeg");

  const outputFilename = path.join(path.dirname(filename), path.parse(filename).name + ".mp3");

  command.input(filename).output(outputFilename).on("end", () => {
    next();
  }).run();
};
