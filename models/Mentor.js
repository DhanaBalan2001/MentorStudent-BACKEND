import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  expertise: { type: String, required: true },
});

const Mentor = mongoose.model('Mentor', mentorSchema);
export default Mentor;