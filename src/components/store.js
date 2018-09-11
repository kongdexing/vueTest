const STORAGE_KEY = 'todos-vuejs';
export default{
	fetch:function(){
		console.log('fetch...');
		JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]');
	},
	save:function(items){
		// console.log('storage save()');
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
	}
}