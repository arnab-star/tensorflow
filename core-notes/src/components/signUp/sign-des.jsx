import {Link} from "react-router-dom";

export default function SignDes() {
  return (
    <>
      <style>
        {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            font-family: 'Poppins', sans-serif;
            background:#0f172a;
          }

          .main-container{
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:20px;
            background:
              radial-gradient(circle at top right, #2563eb55, transparent 30%),
              radial-gradient(circle at bottom left, #7c3aed55, transparent 30%),
              linear-gradient(135deg,#020617,#0f172a,#111827);
          }

          .mobile-card{
            width:100%;
            max-width:390px;
            min-height:720px;
            background:rgba(15,23,42,0.92);
            border-radius:40px;
            padding:35px 28px;
            border:1px solid rgba(255,255,255,0.08);
            box-shadow:
              0 25px 60px rgba(0,0,0,0.5),
              inset 0 1px 1px rgba(255,255,255,0.05);
            position:relative;
            overflow:hidden;
            color:white;
          }

          .mobile-card::before{
            content:"";
            position:absolute;
            width:220px;
            height:220px;
            background:#2563eb33;
            border-radius:50%;
            top:-100px;
            right:-80px;
            filter:blur(30px);
          }

          .mobile-card::after{
            content:"";
            position:absolute;
            width:180px;
            height:180px;
            background:#7c3aed33;
            border-radius:50%;
            bottom:-90px;
            left:-70px;
            filter:blur(35px);
          }

          .content{
            position:relative;
            z-index:2;
            display:flex;
            flex-direction:column;
            justify-content:center;
            height:100%;
          }

          .logo{
            width:65px;
            height:65px;
            margin:auto;
            margin-bottom:28px;
            border-radius:22px;
            background:linear-gradient(135deg,#3b82f6,#7c3aed);
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:28px;
            font-weight:bold;
            box-shadow:0 10px 25px rgba(59,130,246,0.35);
          }

          .title{
            font-size:34px;
            font-weight:700;
            line-height:1.2;
            text-align:center;
            margin-bottom:12px;
          }

          .title span{
            background:linear-gradient(to right,#60a5fa,#a78bfa);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
          }

          .subtitle{
            text-align:center;
            color:#94a3b8;
            font-size:14px;
            line-height:1.7;
            margin-bottom:35px;
          }

          .label{
            margin-bottom:10px;
            font-size:20px;
            color:#e2e8f0;
            font-weight:500;
            display:flex;
            align-items:center;
          }

          .input-box{
            width:100%;
            height:58px;
            border:none;
            outline:none;
            border-radius:18px;
            background:rgba(255,255,255,0.06);
            border:1px solid rgba(255,255,255,0.08);
            padding:0 18px;
            color:white;
            font-size:15px;
            margin-bottom:18px;
            transition:0.3s ease;
          }

          .input-box::placeholder{
            color:#64748b;
          }

          .input-box:focus{
            border-color:#3b82f6;
            background:rgba(255,255,255,0.08);
            box-shadow:0 0 18px rgba(59,130,246,0.25);
          }

          .btn{
            width:100%;
            height:56px;
            border:none;
            border-radius:18px;
            color:white;
            font-size:15px;
            font-weight:600;
            cursor:pointer;
            transition:0.3s ease;
            margin-bottom:22px;
          }

          .btn:hover{
            transform:translateY(-2px);
          }

          .otp-btn{
            background:linear-gradient(135deg,#2563eb,#4f46e5);
            box-shadow:0 10px 25px rgba(37,99,235,0.35);
          }

          .verify-btn{
            background:linear-gradient(135deg,#06b6d4,#0284c7);
            box-shadow:0 10px 25px rgba(6,182,212,0.35);
          }

          .next-btn{
            background:linear-gradient(135deg,#7c3aed,#4f46e5);
            box-shadow:0 10px 25px rgba(124,58,237,0.35);
            margin-top:10px;
          }

          .terms{
            text-align:center;
            font-size:12px;
            line-height:1.7;
            color:#94a3b8;
            margin-top:5px;
            margin-bottom:20px;
          }

          @media(max-width:480px){
            .mobile-card{
              min-height:100vh;
              border-radius:0;
              max-width:100%;
              padding:30px 24px;
            }

            .main-container{
              padding:0;
            }

            .title{
              font-size:30px;
            }
          }
        `}
      </style>

      <div className="main-container">
        <div className="mobile-card">

          <div className="content">

            <div className="logo">
              📝
            </div>

            <h1 className="title">
              Welcome to <br />
              <span>Note App</span>
            </h1>

            <p className="subtitle">
              Create, organize and manage your notes in a smarter and faster way.
            </p>

            <label className="label">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter your phone number"
              className="input-box"
            />

            <button className="btn otp-btn">
              Send OTP
            </button>

            <label className="label">
              OTP Verification
            </label>

            <input
              type="text"
              placeholder="Enter OTP"
              className="input-box"
            />
            <button className="btn verify-btn">
              Verify OTP
            </button>
            <p className="terms">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
            <Link to="/details">
              <button className="btn next-btn">
                Continue
              </button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}