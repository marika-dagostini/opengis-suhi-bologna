var clusterSize = 0;

var style_Buildings = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
        var value = feature.get("") || "";
        if ("" !== null) {
            labelText = String("");
        }
        var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(125,139,143,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
