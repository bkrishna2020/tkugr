// method runs after full site is fetched(runs after docuement ready function). body will be show and preloader will be hide  
$(window).on('load', function() { // makes sure the whole site is loaded 
//$('#test').fadeOut(); // will first fade out the loading animation 
$('.image-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
$('.bodycontent').delay(450).fadeIn('slow');
});	

//Intially run this method on url fetch. Intially body content will be in hide, only preloader will be in vishible
$(document).ready(function(){ 
		$('.bodycontent').hide();//intially body will be hidden mode
      $('.image-wrapper').show();//preloader will show here 
      $('#gototop').hide();
      $('#gototop').click(function(){
      $('html, body').animate({scrollTop:0}, 'slow'); });
      $('.special.cards .image').dimmer({
  on: 'hover'
});
///all Click functions of Rules and procedure page
$("#oneLi").click(function() {goThere("#objective");});
$("#objective").click(function() {goThere("#objective");});
$("#oneLione").click(function() {goThere("#objective");});
$("#twoLi").click(function() {goThere("#CampusPlacements");});
$("#CampusPlacements").click(function() {goThere("#CampusPlacements");});
$("#CPOne").click(function() {goThere("#CPOneTarget");});
$("#CPOneTarget").click(function() {goThere("#CPOneTarget");});
$("#CPOneTarOne").click(function() {goThere("#CPOneTarget");});
$("#CPTwo").click(function() {goThere("#CPTwoTarget");});
$("#CPTwoTarget").click(function() {goThere("#CPTwoTarget");});
$("#CPTwoTarTwo").click(function() {goThere("#CPTwoTarget");});
$("#CPThree").click(function() {goThere("#CPThreeTarget");});
$("#CPThreeTarget").click(function() {goThere("#CPThreeTarget");});
$("#CPThreeTarThree").click(function() {goThere("#CPThreeTarget");});
$("#CPFour").click(function() {goThere("#CPFourTarget");});
$("#CPFourTarget").click(function() {goThere("#CPFourTarget");});
$("#CPFourTarFour").click(function() {goThere("#CPFourTarget");});
$("#CPFive").click(function() {goThere("#CPFiveTarget");});
$("#CPFiveTarget").click(function() {goThere("#CPFiveTarget");});
$("#CPFiveTarFive").click(function() {goThere("#CPFiveTarget");});
$("#CPSix").click(function() {goThere("#CPSixTarget");});
$("#CPSixTarget").click(function() {goThere("#CPSixTarget");});
$("#CPSixTarSix").click(function() {goThere("#CPSixTarget");});
$("#CPSeven").click(function() {goThere("#CPSevenTarget");});
$("#CPSevenTarget").click(function() {goThere("#CPSevenTarget");});
$("#CPSevenTarSeven").click(function() {goThere("#CPSevenTarget");});
$("#CPEight").click(function() {goThere("#CPEightTarget");});
$("#CPEightTarget").click(function() {goThere("#CPEightTarget");});
$("#CPEightTarEight").click(function() {goThere("#CPEightTarget");});
$("#CPNine").click(function() {goThere("#CPNineTarget");});
$("#CPNineTarget").click(function() {goThere("#CPNineTarget");});
$("#CPNineTarNine").click(function() {goThere("#CPNineTarget");})
$("#CPTen").click(function() {goThere("#CPTenTarget");});
$("#CPTenTarget").click(function() {goThere("#CPTenTarget");});
$("#CPTenTarTen").click(function() {goThere("#CPTenTarget");})
$("#CPEleven").click(function() {goThere("#CPElevenTarget");});
$("#CPElevenTarget").click(function() {goThere("#CPElevenTarget");});
$("#CPElevenTarEleven").click(function() {goThere("#CPElevenTarget");})
$("#CPTwelve").click(function() {goThere("#CPTwelveTarget");});
$("#CPTwelveTarget").click(function() {goThere("#CPTwelveTarget");});
$("#CPTwelveTarTwelve").click(function() {goThere("#CPTwelveTarget");})
$("#CPThirteen").click(function() {goThere("#CPThirteenTarget");});
$("#CPThirteenTarget").click(function() {goThere("#CPThirteenTarget");});
$("#CPThirteenTarThirteen").click(function() {goThere("#CPThirteenTarget");})
$("#CPFourteen").click(function() {goThere("#CPFourteenTarget");});
$("#CPFourteenTarget").click(function() {goThere("#CPFourteenTarget");});
$("#CPFourteenTarFourteen").click(function() {goThere("#CPFourteenTarget");})

$("#scrollTop").click(function() {$('html, body').animate({scrollTop:0}, 'slow'); });

$('#GetinTouch').click(function () { goThere("#GetinTouchTar"); })
$('#GetinTouchTar').click(function () { goThere("#GetinTouchTar"); })
$('#OfficersonCharge').click(function () { goThere("#OfficersonChargeTar"); })
$('#OfficersonChargeTar').click(function () { goThere("#OfficersonChargeTar"); })
$('#TPStaff').click(function () { goThere("#TPStaffTar"); })
$('#TPStaffTar').click(function () { goThere("#TPStaffTar"); })
$('#OfficeAddress').click(function () { goThere("#OfficeAddressTar"); })
$('#OfficeAddressTar').click(function () { goThere("#OfficeAddressTar"); })

$('#BoardingRecruiters').click(function () { goThere("#BoardingRecruitersTar"); })
$('#BoardingRecruitersTar').click(function () { goThere("#BoardingRecruitersTar"); })
$('#PlacementOffice').click(function () { goThere("#PlacementOfficeTar"); })
$('#PlacementOfficeTar').click(function () { goThere("#PlacementOfficeTar"); })

$('#Vision').click(function () { goThere("#VisionTar"); })
$('#VisionTar').click(function () { goThere("#VisionTar"); })
$('#Mission').click(function () { goThere("#MissionTar"); })
$('#MissionTar').click(function () { goThere("#MissionTar"); })
$('#VCMessage').click(function () { goThere("#VCMessageTar"); })
$('#VCMessageTar').click(function () { goThere("#VCMessageTar"); })
$('#TPOMessage').click(function () { goThere("#TPOMessageTar"); })
$('#TPOMessageTar').click(function () { goThere("#TPOMessageTar"); })
$('#FICMessage').click(function () { goThere("#FICMessageTar"); })
$('#FICMessageTar').click(function () { goThere("#FICMessageTar"); })
$('#AboutRGUKT').click(function () { goThere("#AboutRGUKTTar"); })
$('#AboutRGUKTTar').click(function () { goThere("#AboutRGUKTTar"); })

$('#BTech').click(function () { goThere("#BTechTar"); })
$('#BTechTar').click(function () { goThere("#BTechTar"); })
$('#MTech').click(function () { goThere("#MTechTar"); })
$('#MTechTar').click(function () { goThere("#MTechTar"); })

$('#DuringIntern').click(function () { goThere("#DuringInternTar"); })
$('#DuringInternTar').click(function () { goThere("#DuringInternTar"); })
$('#AfterReporting').click(function () { goThere("#AfterReportingTar"); })
$('#AfterReportingTar').click(function () { goThere("#AfterReportingTar"); })
$('#Reporting').click(function () { goThere("#ReportingTar"); })
$('#ReportingTar').click(function () { goThere("#ReportingTar"); })
$('#Arrangements').click(function () { goThere("#ArrangementsTar"); })
$('#ArrangementsTar').click(function () { goThere("#ArrangementsTar"); })
$('#Involvement').click(function () { goThere("#InvolvementTar"); })
$('#InvolvementTar').click(function () { goThere("#InvolvementTar"); })
$('#Guidelines').click(function () { goThere("#GuidelinesTar"); })
$('#GuidelinesTar').click(function () { goThere("#GuidelinesTar"); })
$('#SIP').click(function () { goThere("#SIPTar"); })
$('#SIPTar').click(function () { goThere("#SIPTar"); })

$('#ay16-17').click(function () {goThere("#ay16-17Tar")})
$('#ay16-17Tar').click(function () {goThere("#ay16-17Tar")})
$('#ay15-16').click(function () {goThere("#ay15-16Tar")})
$('#ay15-16Tar').click(function () {goThere("#ay15-16Tar")})
$('#ay14-15').click(function () {goThere("#ay14-15Tar")})
$('#ay14-15Tar').click(function () {goThere("#ay14-15Tar")})
$('#ay13-14').click(function () {goThere("#ay13-14Tar")})
$('#ay13-14Tar').click(function () {goThere("#ay13-14Tar")})

$('#Civil').click(function () { goThere("#CivilTar"); })
$('#CivilTar').click(function () { goThere("#CivilTar"); })
$('#Che').click(function () { goThere("#CheTar"); })
$('#CheTar').click(function () { goThere("#CheTar"); })
$('#MME').click(function () { goThere("#MMETar"); })
$('#MMETar').click(function () { goThere("#MMETar"); })
$('#CSE').click(function () { goThere("#CSETar"); })
$('#CSETar').click(function () { goThere("#CSETar"); })
$('#ECE').click(function () { goThere("#ECETar"); })
$('#ECETar').click(function () { goThere("#ECETar"); })
$('#ME').click(function () { goThere("#METar"); })
$('#METar').click(function () { goThere("#METar"); })



function goThere(obj){
$('html, body').animate({
        scrollTop: $(obj).offset().top-85
    }, 2000);
}
//End of Rules and procedure page javascript pluggins
 }); 

$(function () {	
 $('.headerNavbar').load("navbar.html"); //includes navbar in page
 $('.footerNavbar').load("footer.html"); //includes footer in page
    // Check the initial Position of the fixed_nav_container
    var stickyHeaderTop = $('#fixDivCon').offset().top;
    //alert(stickyHeaderTop);
    $(window).scroll(function(){
     if($(document).scrollTop()-90 > stickyHeaderTop) {
     	//alert($('#fixDivCon').width());
     if($(window).width()>1000){
			$('#fixDivCon').show();   
			var name = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
			//alert();
			//var length = "59%";
			if(name.toLowerCase()=="about-rgukt.html"){
				$('#fixDivCon').css({position: 'fixed', top:'70px' ,left:"47%",border:'1px solid pink'});    
			}
			else if(name.toLowerCase()=="training-internship.html"){
			//alert($('#fixDivCon').width());				
				$('#fixDivCon').css({position: 'fixed', top:'70px' ,left:"40%",border:'1px solid pink'});    
			}
			else if(name.toLowerCase()=="campus-life.html"){
			//alert($('#fixDivCon').width());				
				$('#fixDivCon').css({position: 'fixed', top:'70px' ,left:"49%",border:'1px solid pink'});    
			}      
			else{
				 $('#fixDivCon').css({position: 'fixed', top:'70px' ,left:"59%",border:'1px solid pink'});
			} 
        }
         }
        else {
        		$('#fixDivCon').hide();   
			//	$('#fixDivCon:hidden').stop(true, true).fadeIn();//fab button slowly fad in here
 		}
    });
          
});
  
// animating the preloader while page is loading 
    var value = 0 ;
    setInterval(function(){ 
    var wd = $('#preimage').width();
    if(value == 0 ){
		$("#preimage").css('width','120');  
		if(wd==120){value=1;} 
		wd--;
    }
    else if(value==1){
    $("#preimage").css('width','130');
    if(wd==130){value=0;}wd++;
    }
}, 100);
	//ending of animation of preloader
	
//fetching all company names and listing out in website
	var companies = ["Aarvee Assoc.png","ADP.jpg","Alacriti.png","Amara Raja.jpg","Amazon.png","Biocon.jpg","BOSCH.jpg",
						  "CA.jpg","Cadence.jpg","Capgemini.png","CGG.jpg","Cipla.jpg","Crypsis.png","CtrlS.jpg","Cummins.png","DhruvSoft.jpg",
						  "Divami Software.png","Efftronics.png","FMC.png","Fony.png","HETERO.jpg","IBM.png","Infosys.jpg",
						  "Intone Networks.jpg","ITC.jpg","Kony Solutions.jpg","Logical People.png","Lumos.jpg","Mahindra.jpg",
						  "MAQ.png","Meil.png","Micropyramid.png","MOLD TEH.jpg","MPHASIS.jpg","MRF.jpg","Musigma.jpg","Osmosys.jpg",
						  "Polmon.jpg","PORTWARE.jpg","PurpleTalk.jpg","RAMBOLL.jpg","RightDoctors.png","Rithwik Projects.png",
						  "RMC Readymix.jpg","SAP.jpg","Sentini Geosol.png","SRC Technik.jpg","SVK Systems.jpg","TCS.jpg",
						  "Tech Mahindra.png","TESSOLVE.jpg","ThoughtWorks.png","TOSHIBA.jpg","TVS Sundaram.jpg","Vasar Labs.jpg",
						  "Vistex.png","VitWit.png","Way2Online.jpg","WIPRO.jpg","ZenQ.jpg"];
		//listing our and showing on page by for loop		
		for (i = 0; i < companies.length; i++) {
				var str = companies[i];
				var len = str.length;
				var sub_str = str.substring(0,len-4);
				var colorSet="green";
				if(sub_str.startsWith("A") || sub_str.startsWith("Z")){colorSet="blue";}
				else if(sub_str.startsWith("B") || sub_str.startsWith("W")){colorSet="red";}
				else if(sub_str.startsWith("C") || sub_str.startsWith("V")){colorSet="teal";}
				else if(sub_str.startsWith("D") | sub_str.startsWith("T")){colorSet="violet"}
				else if(sub_str.startsWith("E") | sub_str.startsWith("S")){colorSet="purple"}
				else if(sub_str.startsWith("F") | sub_str.startsWith("R")){colorSet="pink"}
				else if(sub_str.startsWith("H") | sub_str.startsWith("P")){colorSet="blue"}
				else if(sub_str.startsWith("I") | sub_str.startsWith("M")){colorSet="violet"}
				//alert(sub_str);				
				$("#companyID")
				.append('<div class="three wide tablet two wide computer column"><div class="ui fluid '+colorSet+' image segment" style="margin-bottom:20px;"><div class="ui '+colorSet+' ribbon label">'+sub_str+'</div><img src="pictures/companies/'+ companies[i]+'" alt="'+sub_str+'" style="height:70px;padding-top:36px;"></div></div>');		
		}
	
	
 //script for fab button 
 $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#gototop:hidden').stop(true, true).fadeIn();//fab button slowly fad in here
        
    } else {
       $('#gototop').stop(true, true).fadeOut();//fab button fadeout white reaching the top of the page
    }
});
