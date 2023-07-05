import React, { useState, useEffect } from "react";
import "./flipBox.css";
import Swal from "sweetalert2";
const Box = ({ setUserChoice, num, setClicks, clicks }) => {
  const [flipped, setFlipped] = useState(false);
const[showNum,setShowNum]=useState(false)
  useEffect(() => {
    if (clicks > 5) {
      Swal.fire({
        title: "You reach maximum limit",
        icon: "error",
        customClass: {
          popup: "swal-custom-background_light",
          cancelButton: "swal-custom-cancel-button",
        },
        reverseButtons: true,
      }).then(response=>{
        if(response.isConfirmed){
          location.reload()
        }
      })
    }
  }, [clicks]);
  return (
    <div
      onClick={() => {
        if (flipped) {
          Swal.fire({
            title: "Cannot select this box again",
            icon: "warning",
            customClass: {
              popup: "swal-custom-background_light",
              cancelButton: "swal-custom-cancel-button",
            },
            reverseButtons: true,
          });
        } else {
          setUserChoice(num);
          setFlipped(!flipped);
          setClicks(clicks + 1);
          setTimeout(()=>{
            setShowNum(true)
          },1200)
        }
        
      }
    }
      className={`w-40 h-40 inline-flex items-center cursor-pointer  justify-center text-center mx-auto bg-teal-400 rounded-md hover:bg-yellow-300 ${
        flipped ? "flipped hover:cursor-not-allowed bg-teal-100" : ""
      } `}
    >
      {showNum ? `${num}` : "Click to enter your choice"}
    </div>
  );
};

export default Box;
