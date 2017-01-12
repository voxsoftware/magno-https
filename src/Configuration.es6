
var K= core.org.voxsoftware.Korpu.Http
import Path from 'path'
var Fs= core.System.IO.Fs



class Configuration extends K.Configuration{
	

	static get ["default"](){
		return new Configuration(Configuration.defaultConfigurationFile)
	}

	static get defaultConfigurationFile(){
		/*
		var file,home= process.env.HOME || process.env.USERPROFILE
		home= Path.join(home, ".voxsoftware")
		if(!Fs.sync.exists(home)){
			Fs.sync.mkdir(home)
		}



		home= Path.join(home, "magno-https")
		if(!Fs.sync.exists(home)){
			Fs.sync.mkdir(home)
		}

		file=Path.join(home, "config.es6")
		if(!Fs.sync.exists(file)){
			Fs.sync.writeFile(file, Fs.sync.readFile(Path.join(__dirname, "_config.es6")))
		} 

		return file
		*/

		var file= Path.join(__dirname, "..", "configuration.es6")
		return file
	}

}

export default Configuration