"use client";
import React, { useState } from "react";
import Art from "@/media/images/login/Art-3.png";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/InputField/SubmitButton";
import PasswordField from "@/components/InputField/PasswordField";
import PhoneField from "@/components/InputField/PhoneField";
import toast, { Toaster } from "react-hot-toast";
function Signup() {
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [registrationPhone, setRegistrationPhone] = useState("");
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();

    const toastId = "form-error-toast";
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const phone = registrationPhone;
    const password = registrationPassword;

    if (!name || !phone || !password) {
      toast.dismiss(toastId);
      toast.error("All fields are required!", {
        id: toastId,
        duration: 5000,
      });
      return;
    }

    const phoneRegex = /^01[3-9]\d{8}$/;
    if (!phoneRegex.test(phone)) {
      toast.dismiss(toastId);
      toast.error("Enter a valid phone number.", {
        id: toastId,
        duration: 5000,
      });
      return;
    }

    if (password.length < 8) {
      toast.dismiss(toastId);
      toast.error("Password must be at least 8 characters.", {
        id: toastId,
        duration: 5000,
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.dismiss(toastId);
      toast.error("Password must contain at least one uppercase.", {
        id: toastId,
        duration: 5000,
      });
      return;
    }

    if (!/\d/.test(password)) {
      toast.dismiss(toastId);
      toast.error("Password must contain at least one number.", {
        id: toastId,
        duration: 5000,
      });
      return;
    }

    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      toast.dismiss(toastId);
      toast.error("Password must contain at least one special character.", {
        id: toastId,
        duration: 5000,
      });
      return;
    }

    try {
      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, phone, password }),
      });
      const result = await response.text();
      if (response.status === 201) {
        toast.dismiss();
        toast.success("Account created successfully!");
        router.push("/login");
      } else if (response.status === 409) {
        toast.error(JSON.parse(result).message);
      } else {
        toast.dismiss();
        toast.error("Unexpected error occurred.");
        console.error("Unexpected status:", response.status, result);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="my-10">
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{
          duration: 3000, // or as needed
          style: {
            background: "#162D3A",
            color: "#fff",
          },
        }}
      />
      <div
        className="md:w-1/2 lg:w-1/3 mx-auto bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url("https://i.ibb.co/v4v4Tqrr/Art-3.png")`,
        }}
      >
        {/* 
            https://i.ibb.co/vxvb3GzY/Art.png
            https://i.ibb.co/Rp76TYPb/Art-1.png
            https://i.ibb.co/yFmhhzBg/Art-2.png 
            https://i.ibb.co/v4v4Tqrr/Art-3.png 
          */}

        <div className="w-full h-full bg-[#000000e5] p-10">
          <h2 className="text-xl md:text-3xl font-semibold text-white">
            Create A new Account
          </h2>
          <span className="text-sm md:text-base text-gray-400">
            See what is going on with your business
          </span>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex flex-col gap-2 mb-5">
              <TextField
                id="name-basic"
                name="name"
                label="Name"
                variant="outlined"
                inputProps={{
                  style: {
                    color: "white", // input text color
                  },
                }}
                sx={{
                  // Input border styles
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },

                  // Label default color and focus color
                  "& .MuiInputLabel-root": {
                    color: "white", // default
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#1976D2", // on focus
                  },

                  // Border radius
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
              />
              <PhoneField
                value={registrationPhone}
                setValue={setRegistrationPhone}
              />
              <PasswordField
                value={registrationPassword}
                setValue={setRegistrationPassword}
              />
            </div>
            <SubmitButton value={"Register"} />
          </form>
          <p className="text-center text-xs text-gray-300 mt-5">
            Already Have an Account?
            <Link href="/login" className="text-[#1976D2] hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
