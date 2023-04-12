const salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
    // Shahab: 300,
};

const topSalary = (salary) => {
    const personWithTopSalary = [];

    let topSalary = 0;

    for (const [name, salaryAmount] of Object.entries(salary)) {
        topSalary = (salaryAmount >= topSalary) ? salaryAmount : topSalary;
    }

    for (const [name, salaryAmount] of Object.entries(salary)) {
        (topSalary == salaryAmount) ? personWithTopSalary.push(name) : 0;

        // if (topSalary == salaryAmount) {
        //     personWithTopSalary.push(name);
        // }
    }

    return personWithTopSalary;
};

const result = topSalary(salaries);
console.log(result);
