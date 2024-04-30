const fs = require('fs');

function countStudents(path) {
    try {
        // Read the database file synchronously
        const data = fs.readFileSync(path, 'utf8');

        // Split the file content into lines
        const lines = data.trim().split('\n');

        // Initialize counts for each field
        const fieldCounts = {};

        // Iterate over each line (starting from index 1 to skip header)
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
                const [firstName, lastName, age, field] = line.split(',');
                if (field) {
                    // Count students in each field
                    if (fieldCounts[field]) {
                        fieldCounts[field].count++;
                        fieldCounts[field].names.push(firstName);
                    } else {
                        fieldCounts[field] = {
                            count: 1,
                            names: [firstName]
                        };
                    }
                }
            }
        }

        // Log the total number of students
        console.log(`Number of students: ${lines.length - 1}`); // Subtract 1 for the header

        // Log number of students in each field and their names
        for (const field in fieldCounts) {
            const { count, names } = fieldCounts[field];
            console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
