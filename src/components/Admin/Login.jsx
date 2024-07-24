import { useEffect, useState } from "react";
import GlobalApi from "../../lib/GlobalApi";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCookie();
  });

  const getCookie = async () => {
    await GlobalApi.getXsrf();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      const res = await GlobalApi.login(data);
      console.log(res.data);
      localStorage.setItem('token', res.data.token)
      alert("berhasil login");
      navigate("/admin");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen items-center content-center mx-auto">
      <div className="w-[90%] md:w-[50%] rounded-lg shadow-lg  mx-auto ">
        <h2 className="text-center p-2">SELAMAT DATANG DIHALAMAN ADMIN</h2>
        <FaUserCircle className="py-2 text-[70px] mx-auto" />
        <form onSubmit={loginUser}>
          <div className="px-4">
            <label htmlFor="">Email</label>
            <br />
            <input
              type="text"
              className="border w-full rounded-md"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="p-4">
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              className="border w-full rounded-md"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="mx-auto py-2 content-center items-center justify-center place-content-center text-center ">
            <button
              type="submit"
              className="border bg-blue-600 mx-auto px-2 rounded-lg items-center hover:bg-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
