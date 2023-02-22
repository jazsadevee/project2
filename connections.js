import mongoose from 'mongoose'

const connection_string = 'mongodb://127.0.0.1:27017/'

mongoose.connect(connection_string, {})

export default mongoose
