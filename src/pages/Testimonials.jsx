// TestimonialsPage.jsx
import { motion } from "framer-motion";
import StudentReviews from '../../public/StudentReviews';


export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h2 className="text-5xl text-black  font-bold mb-10 ">What Our Students Say</h2>

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {StudentReviews.map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[350px] bg-white p-6 rounded-2xl shadow-lg "
            >  
              <img src={t.imageSrc} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover" />
              <p className="text-gray-600 mb-4">“{t.review}”</p>
              <h4 className="font-semibold text-lg">{t.name}</h4>

            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
