////////////
// Iyad - solution

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class TownInfrastructor {

    constructor(name, year){
        this.name = name;
        this.year = year;

    }

}
class Parks extends TownInfrastructor{
    constructor(name, year, treesNumber, area){
        super(name, year);
        this.treesNumber = treesNumber;
        this.area = area;
    }

    treeDensity(){
        return this.treesNumber / this.area;
    }

    calculateAge(){
        
        const age =  new Date().getFullYear() - this.year;
        return age;
    }
}

class Streets extends TownInfrastructor{
  
    constructor(name, year, streetLength){
        super(name, year);
        this.streetLength = streetLength;      
    }

    streetSizeClass(){
        if(this.streetLength <= 500){
            return 'small'
        }else if(this.streetLength > 500 && this.streetLength <= 1000){
            return 'normal'
        }else if(this.streetLength > 1000 && this.streetLength <= 2000){
            return 'big'
        }else{
            return 'huge'
        }
    }
}

const greenPark = new Parks('Green Park', 1950,900, .8);
const nationalPark = new Parks('National Park', 1940,4000, 3.5);
const oakPark = new Parks('Green Park', 1970,800, .4);

const parks = [greenPark, nationalPark, oakPark];

console.log('----PARKS REPORT-----');
let sum = 0;
parks.forEach((park) =>{   
    sum += park.calculateAge()  
});

console.log(`Our ${parks.length} parks have an average age  of ${sum / parks.length} years.`);
parks.forEach((park) =>{   
    console.log(`${park.name} has a tree density of ${park.treeDensity()} trees per square km.`);
    if(park.treesNumber > 1000){
        console.log(`${park.name} has more than 1000 trees.`)
    }
});

const evergreenSt = new Streets('Evergreen Street', 2008, 500);
const fourthSt = new Streets('4th Street', 2015, 1000);
const oceanAve = new Streets('Ocean Avenue', 1999, 2000);
const sunsetBl = new Streets('Sunset Boulevard', 1982, 3500);

const streets = [evergreenSt, fourthSt, oceanAve, sunsetBl];

console.log('------STREETS REPORT--------');
sum = 0;
streets.forEach(st => sum += st.streetLength);
console.log(`Our ${streets.length} streets have a total length of ${sum / 1000} km, with an average of ${(sum/1000) / streets.length} km.`);
streets.forEach(st => console.log(`${st.name}, built in ${st.year}, is a ${st.streetSizeClass()} street`));











