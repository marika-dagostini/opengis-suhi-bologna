var wms_layers = [];

var lyr_OSMStandard = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a> &nbsp&nbsp ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        
var lyr_SVCMIN0 = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/SVCMIN0.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>SVC MIN 0</b><br />\
        <img src="styles/legend/SVCMIN0_10.png" /> 1<br />\
        <img src="styles/legend/SVCMIN0_9.png" /> 0,9<br />\
        <img src="styles/legend/SVCMIN0_8.png" /> 0,8<br />\
        <img src="styles/legend/SVCMIN0_7.png" /> 0,7<br />\
        <img src="styles/legend/SVCMIN0_6.png" /> 0,6<br />\
        <img src="styles/legend/SVCMIN0_5.png" /> 0,5<br />\
        <img src="styles/legend/SVCMIN0_4.png" /> 0,4<br />\
        <img src="styles/legend/SVCMIN0_3.png" /> 0,3<br />\
        <img src="styles/legend/SVCMIN0_2.png" /> 0,2<br />\
        <img src="styles/legend/SVCMIN0_1.png" /> 0,1<br />\
        <img src="styles/legend/SVCMIN0_0.png" /> 0<br /></a>'
        }),
    opacity: 1,
    permalink: "SVCMIN0",
    
     
    title: '<div id="layertitle">SVC < 0<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/SVCMIN0_10.png" /> 1<br />\
        <img src="styles/legend/SVCMIN0_9.png" /> 0,9<br />\
        <img src="styles/legend/SVCMIN0_8.png" /> 0,8<br />\
        <img src="styles/legend/SVCMIN0_7.png" /> 0,7<br />\
        <img src="styles/legend/SVCMIN0_6.png" /> 0,6<br />\
        <img src="styles/legend/SVCMIN0_5.png" /> 0,5<br />\
        <img src="styles/legend/SVCMIN0_4.png" /> 0,4<br />\
        <img src="styles/legend/SVCMIN0_3.png" /> 0,3<br />\
        <img src="styles/legend/SVCMIN0_2.png" /> 0,2<br />\
        <img src="styles/legend/SVCMIN0_1.png" /> 0,1<br />\
        <img src="styles/legend/SVCMIN0_0.png" /> 0<br /></a>'
        });
    
var lyr_SVCMAGG0 = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/SVCMAGG0.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>SVC MAGG 0</b><br />\
        <img src="styles/legend/SVCMAGG0_10.png" /> 1<br />\
        <img src="styles/legend/SVCMAGG0_9.png" /> 0,9<br />\
        <img src="styles/legend/SVCMAGG0_8.png" /> 0,8<br />\
        <img src="styles/legend/SVCMAGG0_7.png" /> 0,7<br />\
        <img src="styles/legend/SVCMAGG0_6.png" /> 0,6<br />\
        <img src="styles/legend/SVCMAGG0_5.png" /> 0,5<br />\
        <img src="styles/legend/SVCMAGG0_4.png" /> 0,4<br />\
        <img src="styles/legend/SVCMAGG0_3.png" /> 0,3<br />\
        <img src="styles/legend/SVCMAGG0_2.png" /> 0,2<br />\
        <img src="styles/legend/SVCMAGG0_1.png" /> 0,1<br />\
        <img src="styles/legend/SVCMAGG0_0.png" /> 0<br /></a>'
        }),
    opacity: 1,
    permalink: "SVCMAGG0",
    
     
    title: '<div id="layertitle">SVC > 0<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/SVCMAGG0_10.png" /> 1<br />\
        <img src="styles/legend/SVCMAGG0_9.png" /> 0,9<br />\
        <img src="styles/legend/SVCMAGG0_8.png" /> 0,8<br />\
        <img src="styles/legend/SVCMAGG0_7.png" /> 0,7<br />\
        <img src="styles/legend/SVCMAGG0_6.png" /> 0,6<br />\
        <img src="styles/legend/SVCMAGG0_5.png" /> 0,5<br />\
        <img src="styles/legend/SVCMAGG0_4.png" /> 0,4<br />\
        <img src="styles/legend/SVCMAGG0_3.png" /> 0,3<br />\
        <img src="styles/legend/SVCMAGG0_2.png" /> 0,2<br />\
        <img src="styles/legend/SVCMAGG0_1.png" /> 0,1<br />\
        <img src="styles/legend/SVCMAGG0_0.png" /> 0<br /></a>'
        });
    
var lyr_SVC = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/SVC.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>SVC</b><br />\
        <img src="styles/legend/SVC_7.png" /> 0,65<br />\
        <img src="styles/legend/SVC_6.png" /> 0,45<br />\
        <img src="styles/legend/SVC_5.png" /> 0,25<br />\
        <img src="styles/legend/SVC_4.png" /> 0,05<br />\
        <img src="styles/legend/SVC_3.png" /> -0,15<br />\
        <img src="styles/legend/SVC_2.png" /> -0,35<br />\
        <img src="styles/legend/SVC_1.png" /> -0,55<br />\
        <img src="styles/legend/SVC_0.png" /> -0,75<br /></a>'
        }),
    opacity: 1,
    permalink: "SVC",
    
     
    title: '<div id="layertitle">SVC<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/SVC_7.png" /> 0,65<br />\
        <img src="styles/legend/SVC_6.png" /> 0,45<br />\
        <img src="styles/legend/SVC_5.png" /> 0,25<br />\
        <img src="styles/legend/SVC_4.png" /> 0,05<br />\
        <img src="styles/legend/SVC_3.png" /> -0,15<br />\
        <img src="styles/legend/SVC_2.png" /> -0,35<br />\
        <img src="styles/legend/SVC_1.png" /> -0,55<br />\
        <img src="styles/legend/SVC_0.png" /> -0,75<br /></a>'
        });
    
var lyr_Space = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/Space.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>Space</b><br />\
        <img src="styles/legend/Space_9.png" /> 13,91<br />\
        <img src="styles/legend/Space_8.png" /> 11,33<br />\
        <img src="styles/legend/Space_7.png" /> 8,74<br />\
        <img src="styles/legend/Space_6.png" /> 6,16<br />\
        <img src="styles/legend/Space_5.png" /> 3,58<br />\
        <img src="styles/legend/Space_4.png" /> 0,99<br />\
        <img src="styles/legend/Space_3.png" /> -1,59<br />\
        <img src="styles/legend/Space_2.png" /> -4,17<br />\
        <img src="styles/legend/Space_1.png" /> -6,76<br />\
        <img src="styles/legend/Space_0.png" /> -9,34<br /></a>'
        }),
    opacity: 1,
    permalink: "Space",
    
     
    title: '<div id="layertitle">Space<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Space_9.png" /> 13,91<br />\
        <img src="styles/legend/Space_8.png" /> 11,33<br />\
        <img src="styles/legend/Space_7.png" /> 8,74<br />\
        <img src="styles/legend/Space_6.png" /> 6,16<br />\
        <img src="styles/legend/Space_5.png" /> 3,58<br />\
        <img src="styles/legend/Space_4.png" /> 0,99<br />\
        <img src="styles/legend/Space_3.png" /> -1,59<br />\
        <img src="styles/legend/Space_2.png" /> -4,17<br />\
        <img src="styles/legend/Space_1.png" /> -6,76<br />\
        <img src="styles/legend/Space_0.png" /> -9,34<br /></a>'
        });
    
var format_SVC0CoolingSpots = new ol.format.GeoJSON();
var features_SVC0CoolingSpots = format_SVC0CoolingSpots.readFeatures(json_SVC0CoolingSpots, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SVC0CoolingSpots = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/SVC0CoolingSpots.png" /> <b>SVC < 0 (Cooling Spots)</b>'
    });
var lyr_SVC0CoolingSpots = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SVC0CoolingSpots, 
    style: style_SVC0CoolingSpots,
    permalink: "SVC0CoolingSpots",
    popuplayertitle: 'SVC < 0 (Cooling Spots)',
    creationdate: '2025-07-08 19:24:50',
    interactive: false,
    title: '<img src="styles/legend/SVC0CoolingSpots.png" /> SVC < 0 (Cooling Spots)'
    });
var featureCounter_SVC0CoolingSpots = 1;
jsonSource_SVC0CoolingSpots.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_SVC0CoolingSpots++);
    feature.set("layerObject", lyr_SVC0CoolingSpots);
});        
jsonSource_SVC0CoolingSpots.addFeatures(features_SVC0CoolingSpots);

var format_SVC0WarmingSpots = new ol.format.GeoJSON();
var features_SVC0WarmingSpots = format_SVC0WarmingSpots.readFeatures(json_SVC0WarmingSpots, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SVC0WarmingSpots = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/SVC0WarmingSpots.png" /> <b>SVC > 0 (Warming Spots)</b>'
    });
var lyr_SVC0WarmingSpots = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SVC0WarmingSpots, 
    style: style_SVC0WarmingSpots,
    permalink: "SVC0WarmingSpots",
    popuplayertitle: 'SVC > 0 (Warming Spots)',
    creationdate: '2025-07-08 19:24:50',
    interactive: false,
    title: '<img src="styles/legend/SVC0WarmingSpots.png" /> SVC > 0 (Warming Spots)'
    });
var featureCounter_SVC0WarmingSpots = 1;
jsonSource_SVC0WarmingSpots.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_SVC0WarmingSpots++);
    feature.set("layerObject", lyr_SVC0WarmingSpots);
});        
jsonSource_SVC0WarmingSpots.addFeatures(features_SVC0WarmingSpots);

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
    creationdate: '2025-07-08 19:24:51',
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
    creationdate: '2025-07-08 19:24:51',
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
    creationdate: '2025-07-08 19:24:51',
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
    creationdate: '2025-07-08 19:24:51',
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
var group_ExcursionSetContoursat95Probability = new ol.layer.Group({
                                layers: [lyr_SVC0CoolingSpots,lyr_SVC0WarmingSpots,],
                                openInLayerSwitcher: true,
                                title: 'Excursion Set Contours at 95% Probability'});
var group_PosteriorMeanSPDEFieldsC = new ol.layer.Group({
                                layers: [lyr_SVC,lyr_Space,],
                                openInLayerSwitcher: true,
                                title: 'Posterior Mean SPDE Fields (°C)'});
var group_PosteriorExcursionProbability = new ol.layer.Group({
                                layers: [lyr_SVCMIN0,lyr_SVCMAGG0,],
                                openInLayerSwitcher: true,
                                title: 'Posterior Excursion Probability'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_OSMStandard,],
                                openInLayerSwitcher: true,
                                title: 'Basemap'});

lyr_OSMStandard.setVisible(true);lyr_SVCMIN0.setVisible(false);lyr_SVCMAGG0.setVisible(false);lyr_SVC.setVisible(false);lyr_Space.setVisible(false);lyr_SVC0CoolingSpots.setVisible(false);lyr_SVC0WarmingSpots.setVisible(false);lyr_Buildings.setVisible(false);lyr_IndustrialBuildings.setVisible(false);lyr_GreenAreas.setVisible(false);lyr_MunicipalityofBologna.setVisible(false);
var layersList = [group_Basemap,group_PosteriorExcursionProbability,group_PosteriorMeanSPDEFieldsC,group_ExcursionSetContoursat95Probability,group_OSMData,group_StudyArea];
lyr_SVC0CoolingSpots.set('fieldAliases', {'FID': 'FID', });
lyr_SVC0WarmingSpots.set('fieldAliases', {'FID': 'FID', });
lyr_Buildings.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_IndustrialBuildings.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_GreenAreas.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'addr:city': 'addr:city', 'description': 'description', 'garden:type': 'garden:type', 'wikipedia': 'wikipedia', 'boundary': 'boundary', 'allocation:it': 'allocation:it', 'wikidata': 'wikidata', 'type': 'type', 'name': 'name', 'area': 'area', });
lyr_MunicipalityofBologna.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ISTAT': 'ISTAT', 'NOME_C': 'NOME_C', 'CD_BLF': 'CD_BLF', 'PRV_ID_E': 'PRV_ID_E', 'TY_E': 'TY_E', 'ID_E': 'ID_E', 'DT_INI_VAL': 'DT_INI_VAL', 'DATA_AGG': 'DATA_AGG', 'D_TIPO_AGG': 'D_TIPO_AGG', 'DT_PRES': 'DT_PRES', 'ST_VALID': 'ST_VALID', 'ST_CERTIF': 'ST_CERTIF', 'QUALITA': 'QUALITA', 'METODO': 'METODO', 'D_METODO': 'D_METODO', 'COMP_FONTI': 'COMP_FONTI', 'SEZ_ID_E': 'SEZ_ID_E', 'INT_FONTI': 'INT_FONTI', 'VISIBILITA': 'VISIBILITA', 'TIPO_FONTE': 'TIPO_FONTE', 'DATA_DA': 'DATA_DA', 'DATA_A': 'DATA_A', 'SHAPE_Leng': 'SHAPE_Leng', 'DT_FIN_VAL': 'DT_FIN_VAL', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_SVC0CoolingSpots.set('fieldImages', {'FID': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_SVC0WarmingSpots.set('fieldImages', {'FID': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Buildings.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_IndustrialBuildings.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_GreenAreas.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'leisure': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:street': 'TextEdit', 'addr:city': 'TextEdit', 'description': 'TextEdit', 'garden:type': 'TextEdit', 'wikipedia': 'TextEdit', 'boundary': 'TextEdit', 'allocation:it': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'area': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_MunicipalityofBologna.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ISTAT': 'TextEdit', 'NOME_C': 'TextEdit', 'CD_BLF': 'TextEdit', 'PRV_ID_E': 'TextEdit', 'TY_E': 'TextEdit', 'ID_E': 'TextEdit', 'DT_INI_VAL': 'DateTime', 'DATA_AGG': 'DateTime', 'D_TIPO_AGG': 'TextEdit', 'DT_PRES': 'DateTime', 'ST_VALID': 'TextEdit', 'ST_CERTIF': 'TextEdit', 'QUALITA': 'TextEdit', 'METODO': 'TextEdit', 'D_METODO': 'TextEdit', 'COMP_FONTI': 'TextEdit', 'SEZ_ID_E': 'TextEdit', 'INT_FONTI': 'TextEdit', 'VISIBILITA': 'TextEdit', 'TIPO_FONTE': 'TextEdit', 'DATA_DA': 'DateTime', 'DATA_A': 'DateTime', 'SHAPE_Leng': 'TextEdit', 'DT_FIN_VAL': 'DateTime', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_SVC0CoolingSpots.set('fieldLabels', {'FID': 'no label', });
lyr_SVC0WarmingSpots.set('fieldLabels', {'FID': 'no label', });
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
