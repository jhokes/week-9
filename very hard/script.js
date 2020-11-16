function run(){
    console.log("Swimming is an awesome sport")
 }
function fetchJob(){
    console.log(this.name + " " +  "is a"+ " "+ this.job);
}
function person(name, job, age){
    this.name = "Jane Doe";
    this.job = "Singer";
    this.age = 26;
    run();
    fetchJob()
    }
person();