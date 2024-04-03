import  { useEffect,useState } from "react";
import toast from "react-hot-toast";

export default function useGetconversations() {
  const [loading, setloading] = useState(false);
  const [conversations, setconversations] = useState([]);

  useEffect(() => {

    const getConversations = async () => {
      setloading(true);
      try {
        const res = await fetch("/users/", 
        { method: "GET",
        headers: { "Content-Type": "application/json" }});
        const data = await res.json();
        
        // console.log(data,"ye getconversation js se h")
        if (data.error) {
          throw new Error(data.error);
        }
        setconversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setloading(false);
      }
    };

    getConversations();
  }, []);

        console.log(conversations,"ye getconversation js se h")
  return { loading, conversations };
}


// Unexpected token '<', "<!doctype "... is not valid JSON