export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		console.log("somechanges");
		const abc =1;
		const defg = 3;
		return abc + defg;
		//	this.myVar1 = [1,2,3]
	},

	async myFun2 () {
		console.log("some other changes");
		console.log("I want to create more changes from here on, let's do it?");
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}