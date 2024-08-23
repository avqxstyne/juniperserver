import mongoose from "mongoose"

// const MONGODB = "mongodb://127.0.0.1:27017/juniperdb";
const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim()) // ${password}
const uri = `mongodb+srv://augustwiesner16:PepperCorn993@junipercluster0.09ygd.mongodb.net/?retryWrites=true&w=majority&appName=JuniperCluster0`;

async function connect() {
	try {
		await mongoose.connect(uri)
		console.log(`MongoDB connected`)
	} catch (err) {
		console.error(err)
	}
}

export default connect