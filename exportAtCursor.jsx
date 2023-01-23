app.enableQE(); //-not supported by Adobe
var sqe = qe.project.getActiveSequence();  //Get the QE active sequence object

var playheadTime = sqe.CTI.timecode; // CTI = Current Time Indicator of playhead

//alert(playheadTime.toString())


var outputPath = new File("\\\\sb-fbp-ist01\\Transfer\\CNC\\Helmut\\Helmut4\\Admin\\Abnahme\\Thumbnails"); //Get the full filepath of a folder


var outputFileName = outputPath.fsName + '\\file1.png'; //Add the filename to the filepath
alert(outputFileName)
sqe.exportFramePNG(playheadTime, outputFileName); //Export the frame at the playhead
