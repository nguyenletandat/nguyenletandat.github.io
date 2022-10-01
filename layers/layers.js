ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32648").setExtent([680376.439091, 1193915.250501, 704791.117542, 1206396.296884]);
var wms_layers = [];

var lyr_ThuDuc_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "ThuDuc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThuDuc_0.png",
    attributions: ' ',
                                projection: 'EPSG:32648',
                                alwaysInRange: true,
                                imageExtent: [683233.096476, 1192813.229407, 699781.447768, 1207685.703459]
                            })
                        });
var format_HanhChinh_1 = new ol.format.GeoJSON();
var features_HanhChinh_1 = format_HanhChinh_1.readFeatures(json_HanhChinh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_HanhChinh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HanhChinh_1.addFeatures(features_HanhChinh_1);
var lyr_HanhChinh_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HanhChinh_1, 
                style: style_HanhChinh_1,
                interactive: true,
                title: '<img src="styles/legend/HanhChinh_1.png" /> HanhChinh'
            });
var format_DuongGiaoThong_2 = new ol.format.GeoJSON();
var features_DuongGiaoThong_2 = format_DuongGiaoThong_2.readFeatures(json_DuongGiaoThong_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_DuongGiaoThong_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DuongGiaoThong_2.addFeatures(features_DuongGiaoThong_2);
var lyr_DuongGiaoThong_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DuongGiaoThong_2, 
                style: style_DuongGiaoThong_2,
                interactive: true,
                title: '<img src="styles/legend/DuongGiaoThong_2.png" /> DuongGiaoThong'
            });
var format_UBNDPhuong_3 = new ol.format.GeoJSON();
var features_UBNDPhuong_3 = format_UBNDPhuong_3.readFeatures(json_UBNDPhuong_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_UBNDPhuong_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBNDPhuong_3.addFeatures(features_UBNDPhuong_3);
var lyr_UBNDPhuong_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UBNDPhuong_3, 
                style: style_UBNDPhuong_3,
                interactive: true,
                title: '<img src="styles/legend/UBNDPhuong_3.png" /> UBNDPhuong'
            });

lyr_ThuDuc_0.setVisible(true);lyr_HanhChinh_1.setVisible(true);lyr_DuongGiaoThong_2.setVisible(true);lyr_UBNDPhuong_3.setVisible(true);
var layersList = [lyr_ThuDuc_0,lyr_HanhChinh_1,lyr_DuongGiaoThong_2,lyr_UBNDPhuong_3];
lyr_HanhChinh_1.set('fieldAliases', {'id': 'id', 'Dientich': 'Dientich', });
lyr_DuongGiaoThong_2.set('fieldAliases', {'id': 'id', 'TenDuong': 'TenDuong', 'ChieuDai': 'ChieuDai', });
lyr_UBNDPhuong_3.set('fieldAliases', {'id': 'id', 'UBND': 'UBND', 'Toa do X': 'Toa do X', 'Toa do Y': 'Toa do Y', });
lyr_HanhChinh_1.set('fieldImages', {'id': 'TextEdit', 'Dientich': '', });
lyr_DuongGiaoThong_2.set('fieldImages', {'id': 'TextEdit', 'TenDuong': '', 'ChieuDai': '', });
lyr_UBNDPhuong_3.set('fieldImages', {'id': 'TextEdit', 'UBND': '', 'Toa do X': '', 'Toa do Y': '', });
lyr_HanhChinh_1.set('fieldLabels', {'id': 'no label', 'Dientich': 'no label', });
lyr_DuongGiaoThong_2.set('fieldLabels', {'id': 'no label', 'TenDuong': 'inline label', 'ChieuDai': 'no label', });
lyr_UBNDPhuong_3.set('fieldLabels', {'id': 'no label', 'UBND': 'inline label', 'Toa do X': 'inline label', 'Toa do Y': 'inline label', });
lyr_UBNDPhuong_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});