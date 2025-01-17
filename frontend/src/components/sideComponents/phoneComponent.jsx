import {useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import debounce from 'lodash.debounce';

function PhoneComponent() {
    const [isHovered, setIsHovered] = useState(false);

    const [isAtTop, setIsAtTop] = useState(true);
    // const [isAtBottom, setIsAtBottom] = useState(false);
  
    // Function to handle scroll visibility
    const handleScroll = debounce(() => {
      const scrollY = window.pageYOffset;
      // const windowHeight = window.innerHeight;
      // const documentHeight = document.documentElement.scrollHeight;
  
      setIsAtTop(scrollY === 0); // At the top
      // setIsAtBottom(scrollY + windowHeight >= documentHeight - 10); // At the bottom
    }, 100); // Debounce to limit function calls
  
    // Scroll to Top
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    // Scroll to Bottom
    // const scrollToBottom = () => {
    //   window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    // };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
   
  return (
    <div className={`flex flex-col gap-5 z-40 fixed ${isAtTop ? 'bottom-10' : 'bottom-[105px]'} right-4`}>

    <motion.div
  
      className="relative flex items-center"
   
      onHoverStart={() => setIsHovered(true)}  // Set hover state to true
      onHoverEnd={() => setIsHovered(false)}   // Set hover state to false
    >
      {/* The Button */}
      <motion.button
      onClick={()=>window.location.href= 'tel:+91 7559012690'}
        className="bg-gray-400 text-lg hover:bg-gray-600 text-white p-3 rounded-full flex space-x-2 items-center group transition-all duration-300 ease-in-out shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon
          icon={faPhoneVolume}
          className="p-1 text-sm text-white rounded-full transform transition-transform duration-500 group-hover:translate-y--2"
        />

        {/* <img src={chatDoctor} className="p-1 w-[25px] h-auto transform transition-transform duration-500 group-hover:translate-y--2 " /> */}
      </motion.button>

      {/* Detail Box - Appears on Hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="absolute right-[60px] bottom-1 bg-gray-400 text-white px-3 py-2 rounded-lg shadow-lg text-sm w-max"
        >
          Ring us
        </motion.div>
      )}
    </motion.div>
  </div>
    
   
     
    
    
    
  
    
  )

}


export default PhoneComponent