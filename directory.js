angular.module('directoryApp', []).controller('directoryController', function() {
	var dirList = this;

	dirList.list = [
		{ name: 'Manali', age: 35 },
		{ name: 'Amit', age: 39 },
		{ name: 'Ross', age: 30 },
		{ name: 'Ben', age: 25 },
	];

	dirList.addPerson = function() {
		dirList.list.push({ name: dirList.name, age: dirList.age });
		dirList.name = '';
		dirList.age = 0;
	};
});
