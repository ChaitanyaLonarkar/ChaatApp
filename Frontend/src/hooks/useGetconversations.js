import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

export default function useGetconversations() {
  const [loading, setloading] = useState(false);
  const [conversations, setconversations] = useState([]);
  const { authUser, setAuthUser } = useAuthContext();

  const getusers = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users",
        {
          withCredentials: true,
        },
        { authUser }
      );

      console.log(res.data);
      setconversations(res.data)
    } catch (error) {
      console.log(error);
      // toast.error(error.message);
    }
  };
  useEffect(() => {
    const getConversations = async () => {
      setloading(true);
      try {
        // const res = await fetch("https://random-data-api.com/api/v2/users");
        // const res = await fetch("/api/users");
        const res = await axios.get("http://localhost:5000/api/users", {
          withCredentials: true,
        });

        // random api use kar rha hu to code theeek se chal rha hai
        // const res = await fetch("/api/users/", {
        //   method: "GET",
        //   headers: { "Content-Type": "application/json" },
        // });
        // const data = await res.json();
        // console.log("tryme")
        // if (!res.ok) {
        //   throw new Error(`HTTP error! Status: ${res.status}`);
        // }
        // const contentType = res.headers.get("content-type");

        // if (!contentType || !contentType.includes("application/json")) {
        //   throw new Error("Response is not JSON");
        // }
        // const data = await res.json();

        console.log(res.data, "ye getconversation js se h");

        // if (res.error) {
        //   throw new Error(res.error);
        // }
        setconversations(res);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setloading(false);
      }
      // try {
      //   const res = await fetch("/api/users/", {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json"
      //       // Optionally, you can include other headers if needed, like authorization headers
      //     },
      //   });

      //   if (!res.ok) {
      //     throw new Error(`HTTP error! Status: ${res.status}`);
      //   }

      //   const contentType = res.headers.get("content-type");

      //   if (!contentType || !contentType.includes("application/json")) {
      //     throw new Error("Response is not JSON");
      //   }

      //   const data = await res.json();

      //   // Check the response data for any error field or structure that indicates an error
      //   if (data.error) {
      //     throw new Error(data.error);
      //   }

      //   // Assuming `setConversations` is a state setter function
      //   setconversations(data);
      // } catch (error) {
      //   // Log the error for debugging purposes
      //   console.error("Error fetching data:", error);

      //   // Notify the user of the error using toast or any other notification mechanism
      //   toast.error("An error occurred while fetching data. Please try again later.");
      // }
      // finally {
      //     setloading(false);
      //   }
    };

    // getConversations();
    getusers();
  }, []);

  // console.log(conversations, "ye getconversation js se h");
  return { loading, conversations };
}

// Unexpected token '<', "<!doctype "... is not valid JSON
