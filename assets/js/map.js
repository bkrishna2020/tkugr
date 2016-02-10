var map;
jQuery(document).ready(function(){

    map = new GMaps({
        div: '#map',
        lat: 18.882585,
        lng: 77.918306,
    });
    map.addMarker({
        lat: 18.882585,
        lng: 77.918306,
        title: 'Rajiv Gandhi University of Knowledge Technologies - Basar',      
        infoWindow: {
            content: '<h5 class="title">Rajiv Gandhi University of Knowledge Technologies</h5><p><span class="region">Basar</span><br><span class="region">Telangana State</span><br><span class="postal-code">504107</span><br><span class="country-name">India</span></p>'
        }
        
    });

});
