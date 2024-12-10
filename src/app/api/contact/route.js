import mongoose from 'mongoose';
import Contact from '@/content/model/contact';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, message } = body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return new Response(JSON.stringify({ message: 'Message saved successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error saving message:', error);
    return new Response(JSON.stringify({ message: 'Failed to save message.', error: error.message }), { status: 500 });
  }
}
