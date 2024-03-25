
const Healthblog = () => {  
    const refArray = useRef([]);
    
    const [blogData, setBlogData] = useState([]);
  
      const apiUrl = 'http://localhost:8080/api';
  
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${apiUrl}/articleRoutes`);
            setBlogData(response.data);
          } catch (error) {
            console.error('Error fetching data', error.message);
          }
        };
  
        fetchData();
      }, []);
  
      const [menuOpen, setMenuOpen] = useState(false)
      const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.2, // Trigger animation when 20% of the element is in view
      });
    
      useEffect(() => {
        if (inView) {
          // Trigger animations when the component is in view
          // You can customize this logic based on your needs
        }
      }, [inView]);
  
    return (
    //   <div> 
  
    //       <Nav />
  
    //         <div className="health-blog">
    //           <div className="hbc">
  
    //           </div>
    //           <div className="healthm">
    //             <div className="health1">
                 
  
  
  
  
  
  
  
  
    //   {blogData.map((blog, index) => (
      <motion.div key={index + 1}
        className="bblog"
        ref={refArray.current[index]}
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: .9 }}
      >
        <motion.div
          className="bblog-pic"
          initial={{ opacity: 0 }} // Initial state: hidden
          animate={inView ? { opacity: 1 } : {}} // Fade in when in view
          transition={{ delay: 2, duration: 1 }} >
          <img src="doctor.jpg" alt="" className='bblog-img' />
        </motion.div>
        <motion.div
          className="bblog-content"
          initial={{ opacity: 0, x: 100 }} // Initial state: hidden
          animate={inView ? { opacity: 1, x: 0 } : {}} // Fade in when in view
          transition={{ delay: 2, duration: 1.5 }} >
          <p className="bblog-date">
            MARCH 10 20255555
          </p>
          <p className="bblog-title">
            {blog.title}
          </p>
          <p className="bblog-text">
            {blog.body}
          </p>
        </motion.div>
      </motion.div>
    // ))}
    )