import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  complaint: String,
  createdAt: { type: Date, default: Date.now },
});

const Patient = mongoose.model('Patients', PatientSchema);
export default Patient;

