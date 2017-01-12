
var Fs= core.System.IO.Fs
import Path from 'path'
var config=  {
	"port": 443,
	"timeout": 560000,
	"console": "default",
	"usehttps": true, // Esto es para no usar como proxy, sino como un servidor HTTPS
	"autoresponder": [

		{

			"match":[
				
			],
			"active": true,
			"id": "org.voxsoftware.httpsfromhttp", // Esto debe ir tal como está acá
			"require": "korpu:httpsfromhttp" // Esto también va tal como está

		}


	],
	"httpsHandle":[
		"all"
	]
}




// Buscar el archivo de configuración de Magno ...

var home= process.env.HOME || process.env.USERPROFILE
var file= Path.join(home, "MachineConfig"), data, autoresponder, sites, site, expr
file= Path.join(file, "machine.config.json")


if(Fs.sync.exists(file)){

	autoresponder= config.autoresponder[0]
	data= require(file)
	sites= data.sites

	for(var i=0;i<sites.length;i++){
		site= sites[i]
		site.url= site.url.replace(".", function(){return "\\."})
		//expr= /https\:\/\/local\.dev(\/*)+/
		expr= "https\\:\\/\\/" + site.url + "(\\/*)+"
		expr= new RegExp(expr, "i")
		autoresponder.match.push(expr)
	}
	

}

vw.info(config.autoresponder[0].match)
export default config