import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useGetconversations() {
  const [loading, setloading] = useState(false);
  const [conversations, setconversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setloading(true);
      try {
        // const res = await fetch("https://random-data-api.com/api/v2/users");
        const res = await fetch("/api/users");

        // random api use kar rha hu to code theeek se chal rha hai
        // const res = await fetch("/api/users/", {
        //   method: "GET",
        //   headers: { "Content-Type": "application/json" },
        // });
        const data = await res.json();
        // console.log("tryme")
        // if (!res.ok) {
        //   throw new Error(`HTTP error! Status: ${res.status}`);
        // }
        // const contentType = res.headers.get("content-type");

        // if (!contentType || !contentType.includes("application/json")) {
        //   throw new Error("Response is not JSON");
        // }
        // const data = await res.json();

        console.log(data,"ye getconversation js se h")
        if (data.error) {
          throw new Error(data.error);
        }
        setconversations(data);
      } catch (error) {
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

    getConversations();
  }, []);

  // console.log(conversations, "ye getconversation js se h");
  return { loading, conversations };
}

// Unexpected token '<', "<!doctype "... is not valid JSON
