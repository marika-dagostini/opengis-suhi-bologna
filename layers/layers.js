var wms_layers = [];

var lyr_OSMStandard = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a> &nbsp&nbsp ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        
var lyr_ModelDSVC = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/ModelDSVC.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>Model D - SVC</b><br />\
        <img src="styles/legend/ModelDSVC_0.png" /> -9,3392<br />\
        <img src="styles/legend/ModelDSVC_1.png" /> -6,0182<br />\
        <img src="styles/legend/ModelDSVC_2.png" /> -2,6971<br />\
        <img src="styles/legend/ModelDSVC_3.png" /> 0,6239<br />\
        <img src="styles/legend/ModelDSVC_4.png" /> 3,9449<br />\
        <img src="styles/legend/ModelDSVC_5.png" /> 7,2660<br />\
        <img src="styles/legend/ModelDSVC_6.png" /> 10,5870<br />\
        <img src="styles/legend/ModelDSVC_7.png" /> 13,9081<br /></a>'
        }),
    opacity: 1,
    permalink: "ModelDSVC",
    
     
    title: '<div id="layertitle">Model D - SVC<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ModelDSVC_0.png" /> -9,3392<br />\
        <img src="styles/legend/ModelDSVC_1.png" /> -6,0182<br />\
        <img src="styles/legend/ModelDSVC_2.png" /> -2,6971<br />\
        <img src="styles/legend/ModelDSVC_3.png" /> 0,6239<br />\
        <img src="styles/legend/ModelDSVC_4.png" /> 3,9449<br />\
        <img src="styles/legend/ModelDSVC_5.png" /> 7,2660<br />\
        <img src="styles/legend/ModelDSVC_6.png" /> 10,5870<br />\
        <img src="styles/legend/ModelDSVC_7.png" /> 13,9081<br /></a>'
        });
    
var lyr_ModelCSVC = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/ModelCSVC.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>Model C - SVC</b><br />\
        <img src="styles/legend/ModelCSVC_0.png" /> -0,7525<br />\
        <img src="styles/legend/ModelCSVC_1.png" /> -0,5515<br />\
        <img src="styles/legend/ModelCSVC_2.png" /> -0,3505<br />\
        <img src="styles/legend/ModelCSVC_3.png" /> -0,1495<br />\
        <img src="styles/legend/ModelCSVC_4.png" /> 0,0515<br />\
        <img src="styles/legend/ModelCSVC_5.png" /> 0,2525<br />\
        <img src="styles/legend/ModelCSVC_6.png" /> 0,4535<br />\
        <img src="styles/legend/ModelCSVC_7.png" /> 0,6545<br /></a>'
        }),
    opacity: 1,
    permalink: "ModelCSVC",
    
     
    title: '<div id="layertitle">Model C - SVC<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ModelCSVC_0.png" /> -0,7525<br />\
        <img src="styles/legend/ModelCSVC_1.png" /> -0,5515<br />\
        <img src="styles/legend/ModelCSVC_2.png" /> -0,3505<br />\
        <img src="styles/legend/ModelCSVC_3.png" /> -0,1495<br />\
        <img src="styles/legend/ModelCSVC_4.png" /> 0,0515<br />\
        <img src="styles/legend/ModelCSVC_5.png" /> 0,2525<br />\
        <img src="styles/legend/ModelCSVC_6.png" /> 0,4535<br />\
        <img src="styles/legend/ModelCSVC_7.png" /> 0,6545<br /></a>'
        });
    
var lyr_ModelBSVC = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/ModelBSVC.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>Model B - SVC</b><br />\
        <img src="styles/legend/ModelBSVC_0.png" /> -0,7502<br />\
        <img src="styles/legend/ModelBSVC_1.png" /> -0,5498<br />\
        <img src="styles/legend/ModelBSVC_2.png" /> -0,3494<br />\
        <img src="styles/legend/ModelBSVC_3.png" /> -0,1491<br />\
        <img src="styles/legend/ModelBSVC_4.png" /> 0,0513<br />\
        <img src="styles/legend/ModelBSVC_5.png" /> 0,2516<br />\
        <img src="styles/legend/ModelBSVC_6.png" /> 0,4520<br />\
        <img src="styles/legend/ModelBSVC_7.png" /> 0,6523<br /></a>'
        }),
    opacity: 1,
    permalink: "ModelBSVC",
    
     
    title: '<div id="layertitle">Model B - SVC<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ModelBSVC_0.png" /> -0,7502<br />\
        <img src="styles/legend/ModelBSVC_1.png" /> -0,5498<br />\
        <img src="styles/legend/ModelBSVC_2.png" /> -0,3494<br />\
        <img src="styles/legend/ModelBSVC_3.png" /> -0,1491<br />\
        <img src="styles/legend/ModelBSVC_4.png" /> 0,0513<br />\
        <img src="styles/legend/ModelBSVC_5.png" /> 0,2516<br />\
        <img src="styles/legend/ModelBSVC_6.png" /> 0,4520<br />\
        <img src="styles/legend/ModelBSVC_7.png" /> 0,6523<br /></a>'
        });
    
var lyr_ModelASVC = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/ModelASVC.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>Model A - SVC</b><br />\
        <img src="styles/legend/ModelASVC_0.png" /> -0,7044<br />\
        <img src="styles/legend/ModelASVC_1.png" /> -0,5108<br />\
        <img src="styles/legend/ModelASVC_2.png" /> -0,3172<br />\
        <img src="styles/legend/ModelASVC_3.png" /> -0,1236<br />\
        <img src="styles/legend/ModelASVC_4.png" /> 0,0700<br />\
        <img src="styles/legend/ModelASVC_5.png" /> 0,2636<br />\
        <img src="styles/legend/ModelASVC_6.png" /> 0,4572<br />\
        <img src="styles/legend/ModelASVC_7.png" /> 0,6508<br /></a>'
        }),
    opacity: 1,
    permalink: "ModelASVC",
    
     
    title: '<div id="layertitle">Model A - SVC<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ModelASVC_0.png" /> -0,7044<br />\
        <img src="styles/legend/ModelASVC_1.png" /> -0,5108<br />\
        <img src="styles/legend/ModelASVC_2.png" /> -0,3172<br />\
        <img src="styles/legend/ModelASVC_3.png" /> -0,1236<br />\
        <img src="styles/legend/ModelASVC_4.png" /> 0,0700<br />\
        <img src="styles/legend/ModelASVC_5.png" /> 0,2636<br />\
        <img src="styles/legend/ModelASVC_6.png" /> 0,4572<br />\
        <img src="styles/legend/ModelASVC_7.png" /> 0,6508<br /></a>'
        });
    
var lyr_ModelDSpace = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/ModelDSpace.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>Model D - Space</b><br />\
        <img src="styles/legend/ModelDSpace_0.png" /> -9,3392<br />\
        <img src="styles/legend/ModelDSpace_1.png" /> -6,7562<br />\
        <img src="styles/legend/ModelDSpace_2.png" /> -4,1732<br />\
        <img src="styles/legend/ModelDSpace_3.png" /> -1,5901<br />\
        <img src="styles/legend/ModelDSpace_4.png" /> 0,9929<br />\
        <img src="styles/legend/ModelDSpace_5.png" /> 3,5759<br />\
        <img src="styles/legend/ModelDSpace_6.png" /> 6,1590<br />\
        <img src="styles/legend/ModelDSpace_7.png" /> 8,7420<br />\
        <img src="styles/legend/ModelDSpace_8.png" /> 11,3251<br />\
        <img src="styles/legend/ModelDSpace_9.png" /> 13,9081<br /></a>'
        }),
    opacity: 1,
    permalink: "ModelDSpace",
    
     
    title: '<div id="layertitle">Model D - Space<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ModelDSpace_0.png" /> -9,3392<br />\
        <img src="styles/legend/ModelDSpace_1.png" /> -6,7562<br />\
        <img src="styles/legend/ModelDSpace_2.png" /> -4,1732<br />\
        <img src="styles/legend/ModelDSpace_3.png" /> -1,5901<br />\
        <img src="styles/legend/ModelDSpace_4.png" /> 0,9929<br />\
        <img src="styles/legend/ModelDSpace_5.png" /> 3,5759<br />\
        <img src="styles/legend/ModelDSpace_6.png" /> 6,1590<br />\
        <img src="styles/legend/ModelDSpace_7.png" /> 8,7420<br />\
        <img src="styles/legend/ModelDSpace_8.png" /> 11,3251<br />\
        <img src="styles/legend/ModelDSpace_9.png" /> 13,9081<br /></a>'
        });
    
var lyr_ModelCSpace = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/ModelCSpace.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>Model C - Space</b><br />\
        <img src="styles/legend/ModelCSpace_0.png" /> -9,3286<br />\
        <img src="styles/legend/ModelCSpace_1.png" /> -6,7471<br />\
        <img src="styles/legend/ModelCSpace_2.png" /> -4,1655<br />\
        <img src="styles/legend/ModelCSpace_3.png" /> -1,5839<br />\
        <img src="styles/legend/ModelCSpace_4.png" /> 0,9977<br />\
        <img src="styles/legend/ModelCSpace_5.png" /> 3,5793<br />\
        <img src="styles/legend/ModelCSpace_6.png" /> 6,1609<br />\
        <img src="styles/legend/ModelCSpace_7.png" /> 8,7425<br />\
        <img src="styles/legend/ModelCSpace_8.png" /> 11,3241<br />\
        <img src="styles/legend/ModelCSpace_9.png" /> 13,9057<br /></a>'
        }),
    opacity: 1,
    permalink: "ModelCSpace",
    
     
    title: '<div id="layertitle">Model C - Space<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ModelCSpace_0.png" /> -9,3286<br />\
        <img src="styles/legend/ModelCSpace_1.png" /> -6,7471<br />\
        <img src="styles/legend/ModelCSpace_2.png" /> -4,1655<br />\
        <img src="styles/legend/ModelCSpace_3.png" /> -1,5839<br />\
        <img src="styles/legend/ModelCSpace_4.png" /> 0,9977<br />\
        <img src="styles/legend/ModelCSpace_5.png" /> 3,5793<br />\
        <img src="styles/legend/ModelCSpace_6.png" /> 6,1609<br />\
        <img src="styles/legend/ModelCSpace_7.png" /> 8,7425<br />\
        <img src="styles/legend/ModelCSpace_8.png" /> 11,3241<br />\
        <img src="styles/legend/ModelCSpace_9.png" /> 13,9057<br /></a>'
        });
    
var lyr_ModelBSpace = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/ModelBSpace.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>Model B - Space</b><br />\
        <img src="styles/legend/ModelBSpace_0.png" /> -9,3686<br />\
        <img src="styles/legend/ModelBSpace_1.png" /> -6,7903<br />\
        <img src="styles/legend/ModelBSpace_2.png" /> -4,2121<br />\
        <img src="styles/legend/ModelBSpace_3.png" /> -1,6338<br />\
        <img src="styles/legend/ModelBSpace_4.png" /> 0,9445<br />\
        <img src="styles/legend/ModelBSpace_5.png" /> 3,5227<br />\
        <img src="styles/legend/ModelBSpace_6.png" /> 6,1010<br />\
        <img src="styles/legend/ModelBSpace_7.png" /> 8,6792<br />\
        <img src="styles/legend/ModelBSpace_8.png" /> 11,2575<br />\
        <img src="styles/legend/ModelBSpace_9.png" /> 13,8358<br /></a>'
        }),
    opacity: 1,
    permalink: "ModelBSpace",
    
     
    title: '<div id="layertitle">Model B - Space<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ModelBSpace_0.png" /> -9,3686<br />\
        <img src="styles/legend/ModelBSpace_1.png" /> -6,7903<br />\
        <img src="styles/legend/ModelBSpace_2.png" /> -4,2121<br />\
        <img src="styles/legend/ModelBSpace_3.png" /> -1,6338<br />\
        <img src="styles/legend/ModelBSpace_4.png" /> 0,9445<br />\
        <img src="styles/legend/ModelBSpace_5.png" /> 3,5227<br />\
        <img src="styles/legend/ModelBSpace_6.png" /> 6,1010<br />\
        <img src="styles/legend/ModelBSpace_7.png" /> 8,6792<br />\
        <img src="styles/legend/ModelBSpace_8.png" /> 11,2575<br />\
        <img src="styles/legend/ModelBSpace_9.png" /> 13,8358<br /></a>'
        });
    
var lyr_ModelASpace = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/ModelASpace.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>Model A - Space</b><br />\
        <img src="styles/legend/ModelASpace_0.png" /> -8,9776<br />\
        <img src="styles/legend/ModelASpace_1.png" /> -6,5383<br />\
        <img src="styles/legend/ModelASpace_2.png" /> -4,0989<br />\
        <img src="styles/legend/ModelASpace_3.png" /> -1,6596<br />\
        <img src="styles/legend/ModelASpace_4.png" /> 0,7798<br />\
        <img src="styles/legend/ModelASpace_5.png" /> 3,2191<br />\
        <img src="styles/legend/ModelASpace_6.png" /> 5,6585<br />\
        <img src="styles/legend/ModelASpace_7.png" /> 8,0978<br />\
        <img src="styles/legend/ModelASpace_8.png" /> 10,5372<br />\
        <img src="styles/legend/ModelASpace_9.png" /> 12,9765<br /></a>'
        }),
    opacity: 1,
    permalink: "ModelASpace",
    
     
    title: '<div id="layertitle">Model A - Space<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ModelASpace_0.png" /> -8,9776<br />\
        <img src="styles/legend/ModelASpace_1.png" /> -6,5383<br />\
        <img src="styles/legend/ModelASpace_2.png" /> -4,0989<br />\
        <img src="styles/legend/ModelASpace_3.png" /> -1,6596<br />\
        <img src="styles/legend/ModelASpace_4.png" /> 0,7798<br />\
        <img src="styles/legend/ModelASpace_5.png" /> 3,2191<br />\
        <img src="styles/legend/ModelASpace_6.png" /> 5,6585<br />\
        <img src="styles/legend/ModelASpace_7.png" /> 8,0978<br />\
        <img src="styles/legend/ModelASpace_8.png" /> 10,5372<br />\
        <img src="styles/legend/ModelASpace_9.png" /> 12,9765<br /></a>'
        });
    
var format_Buildings = new ol.format.GeoJSON();
var features_Buildings = format_Buildings.readFeatures(json_Buildings, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Buildings.png" /> <b>Buildings</b>'
    });
var lyr_Buildings = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_Buildings, 
    style: style_Buildings,
    permalink: "Buildings",
    popuplayertitle: 'Buildings',
    creationdate: '2025-07-07 21:05:10',
    interactive: false,
    title: '<img src="styles/legend/Buildings.png" /> Buildings'
    });
var featureCounter_Buildings = 1;
jsonSource_Buildings.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Buildings++);
    feature.set("layerObject", lyr_Buildings);
});        
jsonSource_Buildings.addFeatures(features_Buildings);

var format_IndustrialBuildings = new ol.format.GeoJSON();
var features_IndustrialBuildings = format_IndustrialBuildings.readFeatures(json_IndustrialBuildings, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndustrialBuildings = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/IndustrialBuildings.png" /> <b>Industrial Buildings</b>'
    });
var lyr_IndustrialBuildings = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_IndustrialBuildings, 
    style: style_IndustrialBuildings,
    permalink: "IndustrialBuildings",
    popuplayertitle: 'Industrial Buildings',
    creationdate: '2025-07-07 21:05:10',
    interactive: false,
    title: '<img src="styles/legend/IndustrialBuildings.png" /> Industrial Buildings'
    });
var featureCounter_IndustrialBuildings = 1;
jsonSource_IndustrialBuildings.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_IndustrialBuildings++);
    feature.set("layerObject", lyr_IndustrialBuildings);
});        
jsonSource_IndustrialBuildings.addFeatures(features_IndustrialBuildings);

var format_GreenAreas = new ol.format.GeoJSON();
var features_GreenAreas = format_GreenAreas.readFeatures(json_GreenAreas, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenAreas = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/GreenAreas.png" /> <b>Green Areas</b>'
    });
var lyr_GreenAreas = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_GreenAreas, 
    style: style_GreenAreas,
    permalink: "GreenAreas",
    popuplayertitle: 'Green Areas',
    creationdate: '2025-07-07 21:05:10',
    interactive: false,
    title: '<img src="styles/legend/GreenAreas.png" /> Green Areas'
    });
var featureCounter_GreenAreas = 1;
jsonSource_GreenAreas.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_GreenAreas++);
    feature.set("layerObject", lyr_GreenAreas);
});        
jsonSource_GreenAreas.addFeatures(features_GreenAreas);

var format_MunicipalityofBologna = new ol.format.GeoJSON();
var features_MunicipalityofBologna = format_MunicipalityofBologna.readFeatures(json_MunicipalityofBologna, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalityofBologna = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/MunicipalityofBologna.png" /> <b>Municipality of Bologna</b>'
    });
var lyr_MunicipalityofBologna = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_MunicipalityofBologna, 
    style: style_MunicipalityofBologna,
    permalink: "MunicipalityofBologna",
    popuplayertitle: 'Municipality of Bologna',
    creationdate: '2025-07-07 21:05:10',
    interactive: false,
    title: '<img src="styles/legend/MunicipalityofBologna.png" /> Municipality of Bologna'
    });
var featureCounter_MunicipalityofBologna = 1;
jsonSource_MunicipalityofBologna.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_MunicipalityofBologna++);
    feature.set("layerObject", lyr_MunicipalityofBologna);
});        
jsonSource_MunicipalityofBologna.addFeatures(features_MunicipalityofBologna);

var group_StudyArea = new ol.layer.Group({
                                layers: [lyr_MunicipalityofBologna,],
                                openInLayerSwitcher: true,
                                title: 'Study Area'});
var group_OSMData = new ol.layer.Group({
                                layers: [lyr_Buildings,lyr_IndustrialBuildings,lyr_GreenAreas,],
                                openInLayerSwitcher: true,
                                title: 'OSM Data'});
var group_PosteriorMeanSpaceFieldC = new ol.layer.Group({
                                layers: [lyr_ModelDSpace,lyr_ModelCSpace,lyr_ModelBSpace,lyr_ModelASpace,],
                                openInLayerSwitcher: true,
                                title: ' Posterior Mean Space Field (°C)'});
var group_PosteriorMeanSVCFieldC = new ol.layer.Group({
                                layers: [lyr_ModelDSVC,lyr_ModelCSVC,lyr_ModelBSVC,lyr_ModelASVC,],
                                openInLayerSwitcher: true,
                                title: ' Posterior Mean SVC Field (°C)'});

lyr_OSMStandard.setVisible(true);lyr_ModelDSVC.setVisible(false);lyr_ModelCSVC.setVisible(false);lyr_ModelBSVC.setVisible(false);lyr_ModelASVC.setVisible(false);lyr_ModelDSpace.setVisible(false);lyr_ModelCSpace.setVisible(false);lyr_ModelBSpace.setVisible(false);lyr_ModelASpace.setVisible(false);lyr_Buildings.setVisible(false);lyr_IndustrialBuildings.setVisible(false);lyr_GreenAreas.setVisible(false);lyr_MunicipalityofBologna.setVisible(false);
var layersList = [lyr_OSMStandard,group_PosteriorMeanSVCFieldC,group_PosteriorMeanSpaceFieldC,group_OSMData,group_StudyArea];
lyr_Buildings.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_IndustrialBuildings.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_GreenAreas.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'addr:city': 'addr:city', 'description': 'description', 'garden:type': 'garden:type', 'wikipedia': 'wikipedia', 'boundary': 'boundary', 'allocation:it': 'allocation:it', 'wikidata': 'wikidata', 'type': 'type', 'name': 'name', 'area': 'area', });
lyr_MunicipalityofBologna.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ISTAT': 'ISTAT', 'NOME_C': 'NOME_C', 'CD_BLF': 'CD_BLF', 'PRV_ID_E': 'PRV_ID_E', 'TY_E': 'TY_E', 'ID_E': 'ID_E', 'DT_INI_VAL': 'DT_INI_VAL', 'DATA_AGG': 'DATA_AGG', 'D_TIPO_AGG': 'D_TIPO_AGG', 'DT_PRES': 'DT_PRES', 'ST_VALID': 'ST_VALID', 'ST_CERTIF': 'ST_CERTIF', 'QUALITA': 'QUALITA', 'METODO': 'METODO', 'D_METODO': 'D_METODO', 'COMP_FONTI': 'COMP_FONTI', 'SEZ_ID_E': 'SEZ_ID_E', 'INT_FONTI': 'INT_FONTI', 'VISIBILITA': 'VISIBILITA', 'TIPO_FONTE': 'TIPO_FONTE', 'DATA_DA': 'DATA_DA', 'DATA_A': 'DATA_A', 'SHAPE_Leng': 'SHAPE_Leng', 'DT_FIN_VAL': 'DT_FIN_VAL', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Buildings.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_IndustrialBuildings.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_GreenAreas.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'leisure': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:street': 'TextEdit', 'addr:city': 'TextEdit', 'description': 'TextEdit', 'garden:type': 'TextEdit', 'wikipedia': 'TextEdit', 'boundary': 'TextEdit', 'allocation:it': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'area': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_MunicipalityofBologna.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ISTAT': 'TextEdit', 'NOME_C': 'TextEdit', 'CD_BLF': 'TextEdit', 'PRV_ID_E': 'TextEdit', 'TY_E': 'TextEdit', 'ID_E': 'TextEdit', 'DT_INI_VAL': 'DateTime', 'DATA_AGG': 'DateTime', 'D_TIPO_AGG': 'TextEdit', 'DT_PRES': 'DateTime', 'ST_VALID': 'TextEdit', 'ST_CERTIF': 'TextEdit', 'QUALITA': 'TextEdit', 'METODO': 'TextEdit', 'D_METODO': 'TextEdit', 'COMP_FONTI': 'TextEdit', 'SEZ_ID_E': 'TextEdit', 'INT_FONTI': 'TextEdit', 'VISIBILITA': 'TextEdit', 'TIPO_FONTE': 'TextEdit', 'DATA_DA': 'DateTime', 'DATA_A': 'DateTime', 'SHAPE_Leng': 'TextEdit', 'DT_FIN_VAL': 'DateTime', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Buildings.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_IndustrialBuildings.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_GreenAreas.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'leisure': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'addr:city': 'no label', 'description': 'no label', 'garden:type': 'no label', 'wikipedia': 'no label', 'boundary': 'no label', 'allocation:it': 'no label', 'wikidata': 'no label', 'type': 'no label', 'name': 'inline label - always visible', 'area': 'no label', });
lyr_MunicipalityofBologna.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ISTAT': 'no label', 'NOME_C': 'no label', 'CD_BLF': 'no label', 'PRV_ID_E': 'no label', 'TY_E': 'no label', 'ID_E': 'no label', 'DT_INI_VAL': 'no label', 'DATA_AGG': 'no label', 'D_TIPO_AGG': 'no label', 'DT_PRES': 'no label', 'ST_VALID': 'no label', 'ST_CERTIF': 'no label', 'QUALITA': 'no label', 'METODO': 'no label', 'D_METODO': 'no label', 'COMP_FONTI': 'no label', 'SEZ_ID_E': 'no label', 'INT_FONTI': 'no label', 'VISIBILITA': 'no label', 'TIPO_FONTE': 'no label', 'DATA_DA': 'no label', 'DATA_A': 'no label', 'SHAPE_Leng': 'no label', 'DT_FIN_VAL': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_MunicipalityofBologna.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

window.layersLoadedFlag = true;
const layersLoaded = new Event('layersLoaded');
document.dispatchEvent(layersLoaded);
