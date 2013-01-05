var di, di1,slid=0;
localStorage.guia;




$(document).ready(function(){
 window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
				      window.applicationCache.swapCache();
				      if (confirm('A new version of this site is available. Load it?')) 
				      {
				        window.location.reload();
				      }
				    }
				     else {
				      // Manifest didn't changed. Nothing new to server.
				    }
  }, false);
	
	alto = window.innerHeight ? window.innerHeight : document.body.offsetHeight ;
	/*$("footer").css('top',(alto-($("footer").position().top+30)));*/
	
		$(".item").click(function(){
			di=this.id;
			$("#menu").hide('fast');
			$("#submenu").slideDown('fast');

			$("#h2").append(this.id);

			$.ajax({
					type: "GET",
					url: "leyendas.xml",
					dataType: "xml",
					success: function(xml){
				
						$(xml).find("Leyenda").each(function(){
							
							$(this).find(di+" l1").each(function(){
								
									$("#ul").append('<li class="itemL" onclick="leer(this)" id="'+$(this).attr('id')+'">'+$(this).attr('tittle')+'</li>');
								
							
							});
					

						});

					}
					


				});
		});

		

	$("#back").click(function(){
		document.getElementById('h2').innerHTML="";
		document.getElementById('ul').innerHTML="";
		$("#submenu").hide('fast');
		$("#menu").slideDown('slow');
	});
	$("#back1").click(function(){
		document.getElementById('ley').innerHTML="";
		document.getElementById('h21').innerHTML="";
		$("#leyenda").hide('fast');
		$("#submenu").slideDown('slow');
		$("#pic").attr('src','');
	});

	

	document.getElementById('bdy').addEventListener('touchmove', function(event){
		if(event.targetTouches[0].screenX>120 && screen.width<=320 ){
				event.preventDefault();
				if(event.targetTouches[0].screenX>150 ){
						$("#bar").css('left',0);
						$("#oc").css({'-webkit-transform':'rotate(180deg)','transform':'rotate(180deg)', '-o-transform':'rotate(180deg)', '-moz-transform':'rotate(180deg)', '-ms-transform':'rotate(180deg)' });
						//alert("<=320");
		 		    }
		 	}

		else if(event.targetTouches[0].screenX>200 && screen.width>=321 && screen.width<=800){ 
				event.preventDefault();
				if(event.targetTouches[0].screenX>300)
					{	$("#bar").css('left',0);
						$("#oc").css({'-webkit-transform':'rotate(180deg)','transform':'rotate(180deg)', '-o-transform':'rotate(180deg)', '-moz-transform':'rotate(180deg)', '-ms-transform':'rotate(180deg)' });
						//alert("<=800");					
					}	
		     }
		else if(event.targetTouches[0].screenX>250 && screen.width>=801){ 
				event.preventDefault();
				if(event.targetTouches[0].screenX>400)
					{	$("#bar").css('left',0);
						$("#oc").css({'-webkit-transform':'rotate(180deg)','transform':'rotate(180deg)', '-o-transform':'rotate(180deg)', '-moz-transform':'rotate(180deg)', '-ms-transform':'rotate(180deg)' });
						//alert(">800");					
					}
		     }		

		
		
	});
//******************************* doble click ***************************************

		$("#menu, #submenu, #leyenda").dblclick(function(){
				if(slid==1) {
					$("#bar").css('left',"-60%");
					$("#bdy").css('left','0');
					slid=0;

				}
				else {
					$("#bar").css('left',0);slid=1;
					$("#bdy").css('left','49%');
					$("#oc").css({'-webkit-transform':'rotate(180deg)','transform':'rotate(180deg)', '-o-transform':'rotate(180deg)', '-moz-transform':'rotate(180deg)', '-ms-transform':'rotate(180deg)' });
						}


				

		});

//******************************* ocultar barra ***************************************

	$("#oc").click(function(){
			$("#bar").css('left',"-60%");
			$("#oc").css({'-webkit-transform':'rotate(0deg)','transform':'rotate(0deg)', '-o-transform':'rotate(0deg)', '-moz-transform':'rotate(0deg)'} );
			slid=0;
			$("#bdy").css('left','0');
	});

//******************************* Tamaño de fuente ***************************************

	$("#ttextoshow").text(parseInt($("#ley").css("font-size")));
	$("#texto").attr("value", parseInt($("#ley").css("font-size")));
	$("#ttexto").change(function(){
		
		$("#ttextoshow").text($("#ttexto").attr("value"));
		$("#ley").css("font-size", $("#ttexto").attr("value")+'px');
	});
//******************************* tipo de fuente ***************************************

	$("#tipo").change(function(){
		$("#ley").css('font-family',this.options[this.selectedIndex].value);
	});

	//********************  SHARE  *******************************//
 FB.init({appId: "110880615751032", status: true, cookie: true});
	$("#fb").click(function(){
		

   

        // calling the API ...
        var obj = {
          method: 'feed',
          link: 'http://analisis.net84.net/apps/Leyendas',
          picture: 'http://analisis.net84.net/apps/Leyendas/icon.png',
          name: 'Leyendas',
          caption: 'Leyendas Mexicanas Prehispánicas',
          description: 'Conócelas en: http://bit.ly/TnAdhx'
        };

        function callback(response) {
          document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        }

        FB.ui(obj, callback);
        
	});
	$("#twit").click(function(){
		window.open('https://twitter.com/share?lang=es&text=Disfruto: leyendas Mexicanas en &url=http://t.co/TDWOX9hq&via=iNpixELsinc&related=iNpixELsinc, everitosan','Compatir en twitter','width=500,height=300');

	});
//************************************Guia****************************************
	if(localStorage.guia!=0)
		{
			$("#pera").css('width',screen.width);
			$("#pera").css('height',alto);
			$("#bar").css('left','-40%');
			
			try{
				document.createEvent("TouchEvent");	
				$("#pera div #guiatxt").append('Desliza');
			}
			catch(e)
			{
			$("#pera div #guiatxt").append('Doble click');
			}
		}

		else{
				$("#pera").css('display', 'none');
			}
	
	$("#pera").click(function(){
		$(this).css('background-color','rgba(0,0,0,.1)');
		$("#bar").css('left','-60%');
		setTimeout(function(){
		$("#pera").css('display','none');	
		}, 500);
	});

	$("#guia").change(function(){
		localStorage.guia=0;
	});
//***********************POP **************************************//

	$(".lnk").click(function(){
		$("#pop").css('display', 'block');
		$("#pop").append('<div align="center" ><a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es_ES"><img alt="Licencia de Creative Commons" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png" /></a></div><hr><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">Leyendas</span> by <a target="_blank" xmlns:cc="http://creativecommons.org/ns#" href="http://evesan.webatu.com/" property="cc:attributionName" rel="cc:attributionURL">Everardo Sánchez</a> is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es_ES">Creative Commons Reconocimiento-NoComercial-CompartirIgual 3.0 Unported License</a>.<br />Creado a partir de la obra en <a xmlns:dct="http://purl.org/dc/terms/" href="http://analisis.net84.net/apps/Leyendas/" target="_blank" rel="dct:source">http://t.co/TDWOX9hq</a>');
	});

	$("#pop").click(function(){
		document.getElementById('pop').innerHTML="";
		$("#pop").css('display', 'none');
	});

});

function leer (este)
{
	di1=este.id;
	$("#submenu").slideUp('fast');
	$("#leyenda").slideDown('fast');
	$("#ley").append('<img id="pic" src="" alt="">');
	//document.getElementById('h21').innerHTML=di;
			$.ajax({
				type:"GET",
				url:"leyendas.xml",
				dataType:"xml",
				success: function(xml){
					$(xml).find(di).each(function(){
						$("#h21").append($(this).find('#'+di1).attr('tittle'));
						$("#ley").append( $(this).find('#'+di1+' l').text() );
						$("#pic").attr('src', $(this).find('#'+di1+' p').text());
						
					});
				}
			});

}

