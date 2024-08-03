const data = {
    students: [
        {
            name: "Lulu Gearside",
            class: "art",
            attended: 35,
        },
        {
            name: "Matthew Milham",
            class: "art",
            attended: 11,
        },
        {
            name: "Dany Dufner",
            class: "biology",
            attended: 12,
        },
        {
            name: "Jeremy Doyle",
            class: "biology",
            attended: 3,
        },
        {
            name: "Tim O'Connor",
            class: "biology",
            attended: 10,
        },
        {
            name: "Charlie Wang",
            class: "french",
            attended: 12,
        },
    ],
};

const result = data.students.reduce((acc, student) => {
    const { class: className, attended } = student;

    if (!acc[className]) {
        acc[className] = { total: 0, count: 0 };
    }

    acc[className].total += attended;
    acc[className].count += 1;

    return acc;
}, {});

for (const className in result) {
    result[className].average = Math.round(
        result[className].total / result[className].count
    );
    delete result[className].count;
}

console.log(result);
