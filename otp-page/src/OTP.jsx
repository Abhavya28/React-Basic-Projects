import { useRef, useState } from "react";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!value) return;
    const newOtp = [...otp];
    const chars = value.split("").slice(0, 4 - index);
    chars.forEach((c, i) => {
      newOtp[index + i] = c;
    });
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const removeData = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }

      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 4);
    const newOtp = pasteData.split("");
    setOtp(newOtp);
    e.preventDefault();
  };

  return (
    <div className="min-h-[100vh] py-20 flex  justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-red-500 text-4xl font-bold">Enter OTP</h1>
        <div className="flex gap-2" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => removeData(e, index)}
              className="border border-gray-400 h-12 w-10 focus:outline-gray-500 placeholder:text-red-700"
            />
          ))}
        </div>
        <button
          className="bg-green-600 rounded-lg p-2 text-white"
          onClick={(e) => {
            setOtp(["", "", "", ""]);
          }}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OTP;
