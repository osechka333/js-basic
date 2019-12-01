/*eslint-disable no-console*/
//1. Make a method in object which will use value from context.
const doctor = {
  position: 'Surgeon',
  initials: 'OOP',
  go: function displayUserInitials() {
    return `${this.position} ${this.initials}`;
  }
};
console.log(doctor.go());

//2. Call this method on object. Save this method to new variable. Execute variable, context is lost. Find a way to
//  return object context to function.
doctor.go();
const user = doctor.go;
console.log(user.apply(doctor));

//other solutions
//user.bind(doctor); //created new function
//user.call(doctor); //for the list of arguments: fun.call(thisArg[, arg1[, arg2[, ...]]])
//user.apply(doctor); // for the single array of arguments: fun.apply(thisArg, [argsArray])

//3. Call function from previous task in other context.
const nurse = {
  position: 'Senior nurse',
  initials: 'ORT'
};
console.log(user.apply(nurse));

//4. Write method in object which will use external context (add in external context some new property to use).
const clinic = {
  name: 'Healthcare',
  clinicDetails() {
    return {
      clinicLocation : () => {
        this.location = 'England';
        return `${doctor.position} ${this.name} ${this.location}`;
      }
    };
  }
};
console.log(clinic.clinicDetails().clinicLocation());

//5. Write a method in object which will return new object which will have method where it using context of parent object.

const appointments = {
  startWorkingTime: '8:00',
  endWorkingTime: '17:00',
  displaySchedule() {
    return {
      workingHours : () => `Doctor schedule: From ${this.startWorkingTime} Till ${this.endWorkingTime}`
    };
  }
};
console.log(appointments.displaySchedule().workingHours());
