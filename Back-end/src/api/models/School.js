import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
});

const SchoolModel = mongoose.model('School', schoolSchema);

export default SchoolModel;