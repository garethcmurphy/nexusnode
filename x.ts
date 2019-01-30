var hdf5 = require('hdf5').hdf5;
var h5lt = require('hdf5').h5lt;

 
var Access = require('hdf5/lib/globals').Access;

class GetH5Info {
	filename:string;
constructor(){
	this.filename="V20_ESSIntegration_2018-12-10_1009.nxs";
}
	getInfo (){
var file = new hdf5.File(this.filename, Access.ACC_RDONLY);
var group = file.openGroup('/entry/ESS_users/');
var array=h5lt.readDataset(group.id, 'name');
 console.log(array);
 }
}


const h5 = new GetH5Info();
h5.getInfo();
