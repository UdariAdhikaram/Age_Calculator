function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);

    const ageinMS = Date.now() - dob.getTime();
    const ageDate = new Date(ageinMS);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    document.getElementById("year").innerHTML = age;
    document.getElementById("month").innerHTML = months;
    document.getElementById("day").innerHTML = days;
}
