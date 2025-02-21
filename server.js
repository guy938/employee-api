const express = require('express');
const app = express();
const employeeRoutes = require('./app/routes/employee.route');


app.use(express.json());


app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
