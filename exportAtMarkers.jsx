

app.enableQE(); //not supported by Adobe
var sqe = qe.project.getActiveSequence();  

var seq = app.project.activeSequence; //Get the "normal" active sequence
var markers = seq.markers; 

// Loop through all the markers
    // Set the playhead to the start of each marker
    // Export a screenshot
 for (var current_marker = markers.getFirstMarker();    
        current_marker !== undefined; 
        current_marker = markers.getNextMarker(current_marker)) {

        var markerStartTicks = current_marker.start.ticks; //Get the start ticks for the marker

        seq.setPlayerPosition(markerStartTicks); //Set the playhead position to the marker's start ticks

        var playheadTime = sqe.CTI.timecode; // CTI = Current Time Indicator of playhead
        var outputPath = new File("\\\\sb-fbp-ist01\\Transfer\\CNC\\Helmut\\Helmut4\\Admin\\Abnahme\\Thumbnails"); //Get the full filepath of a folder
        var outputFileName = outputPath.fsName + '\\file_' + markerStartTicks + '.png'; //Add the filename to the filepath

        sqe.exportFramePNG(playheadTime, outputFileName); //Export the frame at the playhead

 }