// automates the process of populating the data to the database
require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/Product');
const jsonProducts = require('./products.json');

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		console.log('connected!');

		await Product.deleteMany();
		await Product.create(jsonProducts); // creates each array element to a product. as long as it is the same as the schema
		console.log('Population success');
		process.exit();
	} catch (error) {
		console.log(error);
	}
};

start();
