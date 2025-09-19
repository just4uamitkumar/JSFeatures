
const User = {
	userName:"Chai",
	email:"chai@google.com"
}

const Teacher = {
	makeVideo:true
}

const TeachingSupport = {
	isAvailable:false
}

const TASupport = {
	makeAssignment:'JS Assignment',
	fullTile:true,
	__proto__:TeachingSupport
}

Teacher.__proto__ = User




console.log(TASupport.isAvailable)
console.log(User)
console.log(Teacher.userName)


let obj1 = {
	keyboardBrand:'TVS',
	mouseBrand:'Logitech'
}

let obj2 = {
	isWindowAvailable:true,
	isMonitorAvailable:true
}



// Object.setPrototypeOf(object1, object2) /// provide all the properties of object2 into object 1

Object.setPrototypeOf(obj1, obj2) /// provide all the properties of object2 into object 1

console.log(obj1.isWindowAvailable)
console.log(obj2.keyboardBrand) /// undefined